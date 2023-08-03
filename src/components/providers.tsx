'use client';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '~/lib/query-client';
import { Analytics } from '@vercel/analytics/react';

type Props = {
  children: React.ReactNode;
};

export default function Providers({ children }: Props) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <Analytics />
    </QueryClientProvider>
  );
}
