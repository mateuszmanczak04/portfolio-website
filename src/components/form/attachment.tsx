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
		<div className='relative flex h-10 flex-1 items-center justify-between gap-2 overflow-hidden rounded-md bg-secondary px-4 py-2 transition'>
			<p className='flex-1 truncate'>{filename}</p>
			<X
				className='h-10 w-10 cursor-pointer p-2 md:h-12 md:w-12'
				onClick={() => remove(url)}
			/>
		</div>
	);
};

export default Attachment;
