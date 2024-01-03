'use client';

import { ChevronRight, Menu } from 'lucide-react';
import { Button } from './Button';
import { useState } from 'react';
import { FC } from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const Navigation = ({}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className='z-50'>
      {/* mobile nav bar: */}
      <div className='fixed bottom-0 inset-x-0 bg-primary h-16 p-2 text-white flex justify-end z-50 shadow-xl'>
        <Button
          className='hover:bg-white/10 w-full'
          onClick={() => setOpen((prev) => !prev)}>
          <Menu />
        </Button>
      </div>
      {/* list of mobile nav items: */}
      <div
        className={cn(
          'fixed bg-white bottom-16 inset-x-0 flex flex-col justify-between border-t border-t-gray-200 gap-2 p-4 transition h-[320px] z-40',
          open ? 'translate-y-0' : 'translate-y-[384px]'
        )}>
        <MobileNavigationItem href='o-mnie' onClick={() => setOpen(false)}>
          O mnie
        </MobileNavigationItem>
        <MobileNavigationItem href='efekt' onClick={() => setOpen(false)}>
          Jaki efekt na ciebie czeka?
        </MobileNavigationItem>
        <MobileNavigationItem href='oferta' onClick={() => setOpen(false)}>
          Aktualna oferta
        </MobileNavigationItem>
        <MobileNavigationItem href='wspolpraca' onClick={() => setOpen(false)}>
          Przebieg współpracy
        </MobileNavigationItem>
        <MobileNavigationItem href='kontakt' onClick={() => setOpen(false)}>
          Kontakt
        </MobileNavigationItem>
      </div>
      <div
        className={cn(
          'bg-black/50 inset-0 fixed transition z-30',
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setOpen(false)}></div>
    </div>
  );
};

export default Navigation;

const MobileNavigationItem: FC<{
  children: React.ReactNode;
  onClick: () => void;
  href: string;
}> = ({ children, onClick, href }) => {
  return (
    <Button
      className='flex-1 flex items-center justify-between w-full py-2 px-4 bg-gray-50 text-gray-800 hover:bg-gray-100 rounded-md cursor-pointer'
      onClick={() => {
        const goToSection = document.getElementById(href);
        if (goToSection) goToSection?.scrollIntoView({ behavior: 'smooth' });
        onClick();
      }}>
      {children}
      <ChevronRight />
    </Button>
  );
};
