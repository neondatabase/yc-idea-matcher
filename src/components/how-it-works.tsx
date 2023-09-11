'use client';
import { useLocalStorage } from 'usehooks-ts';
import { Drawer } from 'vaul';

export const HowItWorks = () => {
  const codeString =
    `SELECT * FROM companies ORDER BY embedding <=> '[0.3, 0.8, -0.9]' LIMIT 5;`;

  const [open, setOpen] = useLocalStorage('show banner', true);

  return (
    <Drawer.Root open={open} onOpenChange={setOpen} shouldScaleBackground>
      <Drawer.Trigger asChild>
        <button className="underline ml-2 focus-visible:border-gray-700 text-gray-1200 focus-visible:ring-2 focus-visible:ring-green-700 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-100 transition-colors outline-none rounded-md">
          How it works
        </button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content
          className="z-10 bg-gray-300 flex flex-col rounded-t-[10px] h-[70%] mt-24 fixed bottom-0 left-0 right-0 focus-visible:border-gray-700 focus-visible:ring-2 focus-visible:ring-green-700 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-100
            transition-colors outline-none "
        >
          <div className="p-4 mb-5 bg-gray-300 rounded-t-[10px] flex-1 overflow-y-auto">
            <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-gray-1100 mb-8" />

            <div className="mx-auto prose prose-invert">
              <Drawer.Title className="font-medium mb-10 text-lg text-center">
                How this app works
              </Drawer.Title>
              <p>
                This project uses semantic search, an advanced search technique
                that aims to understand the intent and context behind a search
                query instead of just matching keywords.
              </p>
              <p>
                The first step was to collect company data from the YCombinator
                public API:{' '}
                <a
                  className="focus-visible:border-gray-700 focus-visible:ring-2 focus-visible:ring-green-700 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-100
            transition-colors outline-none rounded-md"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://api.ycombinator.com/v0.1/companies"
                >
                  https://api.ycombinator.com/v0.1/companies
                </a>
              </p>
              <p>
                Next, for each company description we generated an embedding,
                which is a vector (list) of floating-point numbers. For example,
                the word “Car” can be represented using the following vector:
                [0.3, 0.8, -0.9].
              </p>
              <p>
                We then used{' '}
                <a
                  className="focus-visible:border-gray-700 focus-visible:ring-2 focus-visible:ring-green-700 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-100
            transition-colors outline-none rounded-md"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://bit.ly/3OFaSTp"
                >
                  Neon
                </a>{' '}
                with{' '}
                <a
                  className="focus-visible:border-gray-700 focus-visible:ring-2 focus-visible:ring-green-700 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-100
            transition-colors outline-none rounded-md"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/neondatabase/pg_embedding"
                >
                  pg_embedding
                </a>
                , which makes it possible to store and retrieve vector
                embeddings in Postgres.
              </p>
              <p>
                When a user submits a query, we convert it into a vector
                embedding and find the 5 most similar results. Here is an
                example query:
                <pre className="font-mono text-[0.8rem]">
                  <code>{codeString}</code>
                </pre>
              </p>
              <p>
                You can find the{' '}
                <a
                  className="focus-visible:border-gray-700 focus-visible:ring-2 focus-visible:ring-green-700 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-100
            transition-colors outline-none rounded-md"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/neondatabase/yc-idea-matcher"
                >
                  source code on GitHub.
                </a>
              </p>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};
