'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';

export const ThemeButton = () => {
	const { theme, setTheme } = useTheme();

	const handleClick = () => {
		if (theme === 'dark') {
			setTheme('light');
		} else {
			setTheme('dark');
		}
	};

	return (
		<Button variant="outline" className="mt-2 w-64 gap-1" onClick={handleClick}>
			{theme === 'light' ? <Sun /> : <Moon />}Switch theme
		</Button>
	);
};
