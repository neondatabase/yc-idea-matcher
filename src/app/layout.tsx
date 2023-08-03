import '../styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Providers from '~/components/providers';
import { cn } from '~/utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'YC Idea Matcher',
  description:
    'Submit your idea and get a list of similar ideas that YCombinator has invested in in the past.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        'bg-[#080808] text-gray-1100 selection:text-gray-1200 selection:bg-green-800',
        inter.className
      )}
    >
      <Providers>
        <body>{children}</body>
      </Providers>
    </html>
  );
}
