'use client';

import { cn } from '@/lib/utils';
import { type VariantProps, cva } from 'class-variance-authority';
import { createElement, forwardRef } from 'react';

const inputVariants = cva(
  'l1 flex h-10 w-full rounded-md border-neutral-400 border bg-white px-3 py-2 placeholder:text-neutral-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default: '',
      },
      inputSize: {
        default: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      inputSize: 'default',
    },
  }
);

type IconType = (props: { className: string }) => JSX.Element;

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  label?: string;
  icon?: IconType;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, className, variant, inputSize, icon, ...props }, ref) => {
    return (
      <label className={cn('flex flex-col gap-1 w-full', className)}>
        {label && <span className='l1'>{label}</span>}
        <div className='w-full relative'>
          <input
            ref={ref}
            className={cn(
              inputVariants({ variant, inputSize }),
              icon && 'pr-10'
            )}
            {...props}
          />
          <div className='absolute right-2 top-1/2 -translate-y-1/2'>
            {icon && createElement(icon, { className: 'w-5 h-5' })}
          </div>
        </div>
      </label>
    );
  }
);
Input.displayName = 'Input';
