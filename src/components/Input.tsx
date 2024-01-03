'use client';

import { cn } from '@/lib/utils';
import { type VariantProps, cva } from 'class-variance-authority';
import { FC, createElement } from 'react';

const inputVariants = cva(
  'flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50',
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

export const Input: FC<InputProps> = ({
  label,
  className,
  variant,
  inputSize,
  icon,
  ...props
}) => {
  return (
    <label className={cn('flex flex-col gap-1 w-full', className)}>
      {label && <span>{label}</span>}
      <div className='w-full relative'>
        <input
          className={cn(inputVariants({ variant, inputSize }), icon && 'pr-10')}
          {...props}
        />
        <div className='absolute right-2 top-1/2 -translate-y-1/2'>
          {icon && createElement(icon, { className: 'w-5 h-5' })}
        </div>
      </div>
    </label>
  );
};
