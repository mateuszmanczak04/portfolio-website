'use client';

import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import React, { FC, forwardRef } from 'react';

export const buttonVariants = cva(
  'h-10 px-4 py-2 inline-flex items-center justify-center gap-1 whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-white hover:bg-primary/90',
        secondary: 'bg-gray-100 text-gray-800 hover:bg-gray-200',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const iconVariants = cva('w-4 h-4', {
  variants: {
    variant: {
      default: 'text-white',
      secondary: 'text-gray-800',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

type IconType = (props: { className: string }) => JSX.Element;

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  icon?: IconType;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, icon, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, className }))}
        {...props}>
        {icon &&
          React.createElement(icon, {
            className: iconVariants({ variant }),
          })}
        {props.children}
      </button>
    );
  }
);
Button.displayName = 'Button';
