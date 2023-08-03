'use client';
import type { InputHTMLAttributes } from 'react';
import * as React from 'react';
import { cn } from '~/utils';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: 'text' | 'email' | 'password' | 'hidden' | 'number' | 'search';
  className?: string;
  id: string;
  name: string;
  placeholder?: string;
  value?: string;
  autoComplete?: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  function textInput(
    {
      type = 'text',
      id,
      name,
      className,
      placeholder,
      value,
      autoComplete = 'on',
      error,
      ...props
    }: InputProps,
    ref
  ) {
    return (
      <>
        <input
          ref={ref}
          id={id}
          name={name}
          type={type}
          value={value}
          autoComplete={autoComplete}
          className={cn(
            className,
            'block w-full rounded-md border-gray-700 bg-gray-200 text-gray-1200 shadow-sm placeholder:text-gray-1100 sm:text-sm',
            'disabled:cursor-not-allowed disabled:opacity-40',
            'focus-visible:border-gray-700 focus-visible:ring-2 focus-visible:ring-green-700 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-100',
            'transition-colors hover:border-green-800',
            error &&
              'border-red-800 focus-visible:border-red-800 focus-visible:ring-2 focus-visible:ring-green-700 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-100'
          )}
          placeholder={placeholder}
          {...props}
        />
      </>
    );
  }
);
