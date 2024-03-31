'use client';

import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';

const MessageButton = () => {
	const handleClick = () => {
		const formNameInput = document.getElementById('form-name-input')!;
		formNameInput.scrollIntoView({ behavior: 'smooth' });
		setTimeout(() => {
			formNameInput.focus();
		}, 300);
	};

	return (
		<Button
			variant='secondary'
			size='lg'
			className='mt-2 flex w-full max-w-64 items-center gap-1'
			onClick={handleClick}>
			<Send className='h-5 w-5' /> <span>Napisz wiadomość</span>
		</Button>
	);
};

export default MessageButton;
