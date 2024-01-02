import * as React from 'react';

import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { FC } from 'react';

const inputVariants = cva(
  'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50',
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

const Input: FC<InputProps> = ({
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
          {icon && React.createElement(icon, { className: 'w-5 h-5' })}
        </div>
      </div>
    </label>
  );
};
Input.displayName = 'Input';

export { Input };
