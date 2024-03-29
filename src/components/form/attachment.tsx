'use client';

import { X } from 'lucide-react';
import { FC } from 'react';

interface AttachmentProps {
  filename: string;
  url: string;
  remove: (url: string) => void;
}

const Attachment: FC<AttachmentProps> = ({ filename, url, remove }) => {
  return (
    <div className='flex-1 flex gap-2 items-center justify-between rounded-md overflow-hidden h-10 bg-secondary px-4 py-2 transition relative'>
      <p className='truncate flex-1'>{filename}</p>
      <X
        className='h-10 w-10 md:h-12 md:w-12 p-2 cursor-pointer'
        onClick={() => remove(url)}
      />
    </div>
  );
};

export default Attachment;
