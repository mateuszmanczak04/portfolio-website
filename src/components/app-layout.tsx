'use client';

import { FC } from 'react';
import Navigation from './navigation';

interface AppLayoutProps {
	children: React.ReactNode;
}

const AppLayout: FC<AppLayoutProps> = ({ children }) => {
	return (
		<div className='mx-auto flex max-w-screen-2xl justify-between'>
			<Navigation />
			{children}
		</div>
	);
};

export default AppLayout;
