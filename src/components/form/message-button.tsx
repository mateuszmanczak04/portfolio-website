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
			size="lg"
			className="mt-4 flex w-full max-w-64 items-center gap-1"
			onClick={handleClick}>
			<Send className="h-5 w-5" /> <span>Send me a message</span>
		</Button>
	);
};

export default MessageButton;
