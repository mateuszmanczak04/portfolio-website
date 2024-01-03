'use client';

import { FC } from 'react';
import Navigation from './Navigation';

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className='flex justify-between max-w-screen-2xl mx-auto'>
      <Navigation />
      {children}
    </div>
  );
};

export default AppLayout;
