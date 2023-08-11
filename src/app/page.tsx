'use client';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { Company } from '~/components/company';
import { Hero } from '~/components/hero';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import va from '@vercel/analytics';

type FormValues = {
  idea: string;
};

export default function Home() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormValues>();

  const { mutate, isLoading, data } = useMutation(
    async (values: FormValues) => {
      va.track('Submit');
      const res = await fetch('/api/idea', {
        method: 'POST',
        body: JSON.stringify(values),
      });

      if (!res.ok) {
        throw new Error('Something went wrong...');
      }

      const data = await res.json();

      return data;
    }
  );

  const onSubmit = (values: FormValues) => mutate(values);

  return (
    <main className="relative">
      <a
        className="focus-visible:border-gray-700 focus-visible:ring-2 focus-visible:ring-green-700 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-100
            transition-colors outline-none rounded-md text-gray-1200 hover:underline p-1"
        target="_blank"
        rel="noopener noreferrer"
        href="https://bit.ly/3OFaSTp"
      >
        <svg
          className="w-7 h-7 absolute top-10 left-10  lg:left-40"
          width="57"
          height="56"
          viewBox="0 0 57 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 9.63547C0 4.31395 4.32472 0 9.65953 0H46.3657C51.7006 0 56.0253 4.31395 56.0253 9.63547V40.7763C56.0253 46.2817 49.0411 48.671 45.6538 44.3245L35.0641 30.7359V47.2138C35.0641 52.0032 31.1719 55.8857 26.3705 55.8857H9.65953C4.32472 55.8857 0 51.5718 0 46.2502V9.63547ZM9.65953 7.70837C8.59257 7.70837 7.72762 8.57116 7.72762 9.63547V46.2502C7.72762 47.3145 8.59257 48.1773 9.65953 48.1773H26.6603C27.1938 48.1773 27.3365 47.7459 27.3365 47.2138V25.117C27.3365 19.6117 34.3206 17.2223 37.708 21.5688L48.2976 35.1574V9.63547C48.2976 8.57116 48.3987 7.70837 47.3317 7.70837H9.65953Z"
            fill="#12FFF7"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 9.63547C0 4.31395 4.32472 0 9.65953 0H46.3657C51.7006 0 56.0253 4.31395 56.0253 9.63547V40.7763C56.0253 46.2817 49.0411 48.671 45.6538 44.3245L35.0641 30.7359V47.2138C35.0641 52.0032 31.1719 55.8857 26.3705 55.8857H9.65953C4.32472 55.8857 0 51.5718 0 46.2502V9.63547ZM9.65953 7.70837C8.59257 7.70837 7.72762 8.57116 7.72762 9.63547V46.2502C7.72762 47.3145 8.59257 48.1773 9.65953 48.1773H26.6603C27.1938 48.1773 27.3365 47.7459 27.3365 47.2138V25.117C27.3365 19.6117 34.3206 17.2223 37.708 21.5688L48.2976 35.1574V9.63547C48.2976 8.57116 48.3987 7.70837 47.3317 7.70837H9.65953Z"
            fill="url(#paint0_linear_9_7220)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 9.63547C0 4.31395 4.32472 0 9.65953 0H46.3657C51.7006 0 56.0253 4.31395 56.0253 9.63547V40.7763C56.0253 46.2817 49.0411 48.671 45.6538 44.3245L35.0641 30.7359V47.2138C35.0641 52.0032 31.1719 55.8857 26.3705 55.8857H9.65953C4.32472 55.8857 0 51.5718 0 46.2502V9.63547ZM9.65953 7.70837C8.59257 7.70837 7.72762 8.57116 7.72762 9.63547V46.2502C7.72762 47.3145 8.59257 48.1773 9.65953 48.1773H26.6603C27.1938 48.1773 27.3365 47.7459 27.3365 47.2138V25.117C27.3365 19.6117 34.3206 17.2223 37.708 21.5688L48.2976 35.1574V9.63547C48.2976 8.57116 48.3987 7.70837 47.3317 7.70837H9.65953Z"
            fill="url(#paint1_linear_9_7220)"
          />
          <path
            d="M46.3661 0C51.7009 0 56.0256 4.31395 56.0256 9.63547V40.7763C56.0256 46.2817 49.0414 48.671 45.6541 44.3245L35.0644 30.736V47.2138C35.0644 52.0032 31.1722 55.8857 26.3708 55.8857C26.9043 55.8857 27.3368 55.4543 27.3368 54.9222V25.117C27.3368 19.6117 34.3209 17.2223 37.7083 21.5688L48.298 35.1574V1.92709C48.298 0.862789 47.433 0 46.3661 0Z"
            fill="#B9FFB3"
          />
          <defs>
            <linearGradient
              id="paint0_linear_9_7220"
              x1="56.0253"
              y1="55.8857"
              x2="6.90024"
              y2="-0.1215"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#B9FFB3" />
              <stop offset="1" stop-color="#B9FFB3" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_9_7220"
              x1="56.0253"
              y1="55.8857"
              x2="22.77"
              y2="42.9181"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#1A1A1A" stop-opacity="0.9" />
              <stop offset="1" stop-color="#1A1A1A" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </a>{' '}
      <div className="px-6 my-36 max-w-6xl mx-auto">
        <Hero />
        <form
          className="flex md:flex-row flex-col space-y-5 md:space-y-0 md:items-center justify-center md:space-x-2"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            placeholder="Describe your next big idea"
            id="idea"
            {...register('idea', {
              required: true,
              maxLength: {
                message: 'Max length exceeded',
                value: 140,
              },
              minLength: {
                message: 'Your idea should be at least 20 characters long',
                value: 20,
              },
            })}
          />

          <Button
            className="justify-center "
            loading={isLoading}
            size="large"
            type="submit"
          >
            Submit
          </Button>
        </form>
        {errors && (
          <p className="text-red-1100 mt-2 text-sm">{errors.idea?.message}</p>
        )}
        <div className="mt-10 mb-16">
          <div className="grid grid-cols-1 gap-10">
            {isLoading ? (
              <>
                <div className="p-5 animate-pulse h-80 rounded-md bg-gray-500" />
                <div className="p-5 animate-pulse h-80 rounded-md bg-gray-500" />{' '}
                <div className="p-5 animate-pulse h-80 rounded-md bg-gray-500" />
              </>
            ) : (
              data &&
              data.data.map((company: Company) => (
                <Company key={company.id} {...company} />
              ))
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
