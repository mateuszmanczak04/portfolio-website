'use client';

import { FC, useCallback, useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AttachmentPreviewProps {
  filename: string;
  loading: boolean;
  error: string;
  id: string;
  handleRemove: (name: string) => void;
}

const AttachmentPreview: FC<AttachmentPreviewProps> = ({
  filename,
  handleRemove,
  loading,
  error,
  id,
}) => {
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <div
      className={cn(
        'flex-1 flex gap-2 items-center justify-between rounded-md lg:rounded-xl overflow-hidden h-10 md:h-12 pl-3 transition bg-neutral-100 relative',
        loading && 'bg-neutral-300 pointer-events-none',
        error && 'bg-error/10 text-error',
        hovered && 'bg-error/10'
      )}>
      <p className='truncate flex-1'>{filename}</p>
      {error && <p className='text-error'>{error}</p>}
      <X
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => handleRemove(id)}
        className='cursor-pointer text-neutral-800 rounded-md lg:rounded-xl transition h-10 w-10 md:w-12 md:h-24 p-2 md:p-3 hover:bg-error/50 hover:text-white'
      />
    </div>
  );
};

export default AttachmentPreview;
