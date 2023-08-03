'use client';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '~/lib/query-client';

type Props = {
  children: React.ReactNode;
};

export default function Providers({ children }: Props) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
