'use client';

import Image from 'next/image';
import { FC, useState } from 'react';
import { Button } from './Button';
import { Minus, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AttachmentPreviewProps {
  file: File;
  handleRemove: (name: string) => void;
}

const AttachmentPreview: FC<AttachmentPreviewProps> = ({
  file,
  handleRemove,
}) => {
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <div
      className={cn(
        'flex-1 flex gap-2 items-center justify-between bg-white border border-neutral-200 rounded-md lg:rounded-xl overflow-hidden h-10 md:h-12 pl-3 transition',
        hovered && 'bg-error/10'
      )}>
      <p className='truncate flex-1'>
        {file.name.split('.').length > 1
          ? file.name.split('.').slice(0, -1).join('.')
          : file.name}
      </p>
      <p className='text-neutral-600'>
        {file.name.split('.').length > 1 && file.name.split('.').pop()}
      </p>
      <X
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => handleRemove(file.name)}
        className='cursor-pointer text-neutral-800 rounded-md lg:rounded-xl transition h-10 w-10 md:w-12 md:h-24 p-2 md:p-3 hover:bg-error/50 hover:text-white'
      />
    </div>
  );
};

export default AttachmentPreview;
