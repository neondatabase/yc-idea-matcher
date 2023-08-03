'use client';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { Company } from '~/components/company';
import { Hero } from '~/components/hero';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';

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
    <main>
      <div className="px-6 my-20 max-w-6xl mx-auto">
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
        <div className="mt-5 mb-16">
          <div className="grid grid-cols-1 gap-5">
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
