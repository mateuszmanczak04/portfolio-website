import * as React from 'react';

import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { FC } from 'react';

const inputVariants = cva(
  'flex h-fit w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 leading-6',
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
      {label && <span>{label}</span>}
      <textarea
        className={cn(inputVariants({ variant, inputSize }))}
        {...props}
      />
    </label>
  );
};
MultiLineInput.displayName = 'MultiLineInput';

export { MultiLineInput };
