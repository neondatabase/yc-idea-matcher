import '../styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
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
        'bg-[#080808] text-gray-1100 selection:text-gray-1200 selection:bg-green-800 flex flex-col min-h-[95vh]',
        inter.className
      )}
    >
      <Providers>
        <body className="flex-grow">{children}</body>
        <footer className="my-5">
          <p className="text-center text-sm">
            Powered by{' '}
            <a
              className="focus-visible:border-gray-700 focus-visible:ring-2 focus-visible:ring-green-700 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-100
            transition-colors outline-none rounded-md text-gray-1200 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
              href="https://bit.ly/3OFaSTp"
            >
              Neon
            </a>{' '}
            and{' '}
            <a
              className="focus-visible:border-gray-700 focus-visible:ring-2 focus-visible:ring-green-700 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-100
            transition-colors outline-none rounded-md text-gray-1200 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/neondatabase/yc-idea-matcher"
            >
              pg_embedding
            </a>
          </p>
        </footer>
      </Providers>
    </html>
  );
}
