import * as React from 'react';

import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { FC } from 'react';

const inputVariants = cva(
  'b1 flex h-fit w-full rounded-md border border-neutral-400 bg-white px-3 py-2 placeholder:text-neutral-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50',
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

export interface MultiLineInputProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof inputVariants> {
  label?: string;
}

const MultiLineInput: FC<MultiLineInputProps> = ({
  label,
  className,
  variant,
  inputSize,
  ...props
}) => {
  return (
    <label className={cn('flex flex-col gap-1 w-full', className)}>
      {label && <span className='l1'>{label}</span>}
      <textarea
        className={cn(inputVariants({ variant, inputSize }))}
        {...props}
      />
    </label>
  );
};
MultiLineInput.displayName = 'MultiLineInput';

export { MultiLineInput };
