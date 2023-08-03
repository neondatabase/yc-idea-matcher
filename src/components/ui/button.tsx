'use client';
import * as React from 'react';
import type { HTMLAttributes } from 'react';
import { cn } from '~/utils';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  disabled?: boolean;
  size?: ButtonSize;
  appearance?: ButtonAppearance;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  children?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  link?: string;
}

export type ButtonSize = 'small' | 'medium' | 'large' | 'xlarge';

export type ButtonAppearance = 'primary' | 'secondary' | 'outlined' | 'danger';

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Btn(
    {
      disabled = false,
      loading = false,
      size = 'medium',
      appearance = 'primary',
      children,
      className,
      leadingIcon,
      trailingIcon,
      type = 'button',
      ...props
    }: ButtonProps,
    ref
  ) {
    const computeStyles = (appearance: ButtonAppearance) => {
      switch (appearance) {
        case 'primary':
          return 'text-white  bg-green-900  hover:bg-green-1000 border-transparent border';
        case 'secondary':
          return 'text-green-1100  bg-green-400 hover:bg-green-500 border-2 border-transparent';
        case 'danger':
          return 'text-gray-1200 bg-red-900 hover:bg-red-1000 border-2 border-transparent';
        case 'outlined':
          return 'bg-gray-200  border border-gray-700 text-gray-1100 hover:bg-gray-300 hover:text-gray-1200  hover:border-gray-800  transition-colors';
      }
    };

    return (
      <button
        type={type}
        ref={ref}
        disabled={disabled || loading}
        {...props}
        className={cn(
          computeStyles(appearance),
          size === 'small' && 'px-3 py-2 text-sm',
          size === 'medium' && 'px-4 py-2 text-sm ',
          size === 'large' && 'px-4 py-2.5 text-base',
          size === 'xlarge' && 'px-4 py-2.5 text-lg',
          'rounded-md disabled:cursor-progress disabled:opacity-50',
          'relative inline-flex select-none items-center  capitalize leading-4',
          'transition-colors duration-150 ease-in-out',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-700 focus-visible:ring-offset-2 ring-offset-gray-100',
          className
        )}
      >
        {leadingIcon}

        {loading ? 'Loading...' : children}
        {trailingIcon}
      </button>
    );
  }
);
