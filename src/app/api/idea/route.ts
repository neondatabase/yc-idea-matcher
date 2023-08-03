import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';
import { Pool } from '@neondatabase/serverless';
import { NextRequest, NextResponse } from 'next/server';
import { generateEmbeddings } from '~/utils';
import { z } from 'zod';

export const runtime = 'edge';

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  analytics: true,
  limiter: Ratelimit.slidingWindow(2, '5s'),
});

export async function POST(request: NextRequest) {
  const client = new Pool({ connectionString: process.env.DATABASE_URL });

  await client.connect();

  const id = request.ip ?? 'anonymous';
  const limit = await ratelimit.limit(id ?? 'anonymous');

  if (!limit.success) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
  }

  const body = await request.json();

  const schema = z.object({
    idea: z
      .string()
      .min(20, {
        message: 'Idea must be at least 20 characters.',
      })
      .max(140, {
        message: 'Idea should be at most 140 characters.',
      }),
  });

  const validated = schema.safeParse(body);

  if (!validated.success) {
    return NextResponse.json(
      { error: `Invalid request ${validated.error.message}` },
      { status: 400 }
    );
  }

  const { idea } = validated.data;

  const embedding = await generateEmbeddings(idea);

  const { rows } = await client.query(
    `SELECT id, name, smallLogoUrl,website, oneLiner, longDescription, batch, url, status, industries FROM companies ORDER BY embedding <-> array[${embedding}] LIMIT 5;`
  );

  return NextResponse.json({ data: rows });
}
