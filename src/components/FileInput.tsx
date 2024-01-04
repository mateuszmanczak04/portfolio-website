'use client';

import { cn } from '@/lib/utils';
import { type VariantProps, cva } from 'class-variance-authority';
import { File } from 'lucide-react';
import { forwardRef } from 'react';

const inputVariants = cva(
  'l1 md:l0 flex h-10 md:h-12 w-full rounded-md lg:rounded-xl bg-neutral-100 hover:bg-neutral-200 transition px-3 py-2 placeholder:text-neutral-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50 pr-10 file:mr-4 file:pt-0 file:px-4 file:rounded-md lg:file:rounded-xl file:border-0 file:l1 file:font-medium file:bg-neutral-200 file:text-neutral-600 cursor-pointer leading-[24px] md:leading-[32px]',
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

export interface FileInputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  label?: string;
}

export const FileInput = forwardRef<HTMLInputElement, FileInputProps>(
  ({ label, className, variant, ...props }, ref) => {
    return (
      <label className={cn('flex flex-col gap-1 w-full', className)}>
        {label && <span className='pl-2 l1 md:l0 font-medium'>{label}</span>}
        <div className='w-full relative'>
          <input
            ref={ref}
            type='file'
            className={cn(inputVariants({ variant }))}
            {...props}
          />
          <div className='absolute right-3 top-1/2 -translate-y-1/2'>
            <File className='w-5 h-5 lg:h-6 lg:w-6' />
          </div>
        </div>
      </label>
    );
  }
);
FileInput.displayName = 'FileInput';
