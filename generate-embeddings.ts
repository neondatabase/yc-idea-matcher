import { Pool } from 'pg';
import axios from 'axios';

const DATABASE_URL = '';
const OPENAI_API_KEY = '';

const pool = new Pool({
  connectionString: DATABASE_URL,
});

async function createCompaniesTable() {
  const client = await pool.connect();
  try {
    await client.query(`
      CREATE EXTENSION IF NOT EXISTS embedding;
      CREATE TABLE IF NOT EXISTS companies (
        id SERIAL PRIMARY KEY,
        name TEXT,
        slug TEXT,
        website TEXT,
        "smallLogoUrl" TEXT,
        "oneLiner" TEXT,
        "longDescription" TEXT,
        "teamSize" INTEGER,
        url TEXT,
        batch TEXT,
        tags TEXT[],
        status TEXT,
        industries TEXT[],
        regions TEXT[],
        locations TEXT[],
        badges TEXT[],
        embedding REAL[]
      );
    `);
    console.log('Companies table created successfully');
  } catch (error) {
    console.error('Error creating companies table:', error);
  } finally {
    client.release();
  }
}

async function scrapeCompanies(url: string) {
  try {
    const response = await axios.get(url);
    const { companies, nextPage } = response.data;

    for (const company of companies) {
      const { longDescription } = company;
      const embedding = await generateEmbedding(longDescription);
      await storeCompany(company, embedding);
    }

    if (nextPage) {
      await scrapeCompanies(nextPage);
    }
  } catch (error) {
    console.error('Error scraping companies:', error);
  }
}

async function generateEmbedding(text: string): Promise<number[]> {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/embeddings',
      {
        input: text,
        model: 'text-embedding-ada-002',
      },
      {
        headers: {
          Authorization: `Bearer ${OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );
    const { data } = response.data;
    return data[0].embedding;
  } catch (error) {
    console.error('Error generating embedding:', error);
  }

  return [];
}

async function storeCompany(company: any, embedding: number[]) {
  const {
    name,
    slug,
    website,
    smallLogoUrl,
    oneLiner,
    longDescription,
    teamSize,
    url,
    batch,
    tags,
    status,
    industries,
    regions,
    locations,
    badges,
  } = company;
  const client = await pool.connect();

  try {
    await client.query(
      `
      INSERT INTO companies (
        name, slug, website, "smallLogoUrl", "oneLiner", "longDescription", "teamSize", url, batch, tags, status, industries, regions, locations, badges, embedding
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)
    `,
      [
        name,
        slug,
        website,
        smallLogoUrl,
        oneLiner,
        longDescription,
        teamSize,
        url,
        batch,
        tags,
        status,
        industries,
        regions,
        locations,
        badges,
        embedding,
      ]
    );

    console.log(`Company '${name}' stored successfully`);
  } catch (error) {
    console.error(`Error storing company '${name}':`, error);
  } finally {
    client.release();
  }
}

async function runScript() {
  await createCompaniesTable();
  await scrapeCompanies('https://api.ycombinator.com/v0.1/companies?page=1');
  await pool.end();
}

runScript();
