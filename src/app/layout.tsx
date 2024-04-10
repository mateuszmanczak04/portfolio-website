import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

export const metadata: Metadata = {
	title: 'Mateusz Mańczak - Frontend / Full-Stack Developer',
	description:
		'Aspiring Frontend / Full-Stack Developer. I create websites and web applications using modern technologies like React, Next.js, and Tailwind CSS.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='pl' className='overflow-x-hidden'>
			<head>
				<link rel='icon' href='/icons/favicon.ico' sizes='any' />
			</head>
			<body className='relative overflow-x-hidden'>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
