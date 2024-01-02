'use client';

import { Menu } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';
import { FC } from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const Navigation = ({}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className='z-50'>
      {/* mobile nav bar: */}
      <div className='fixed bottom-0 inset-x-0 bg-primary h-16 p-2 text-white flex justify-end z-50 shadow-xl border-t-2 border-t-white/20'>
        <Button
          className='hover:bg-white/10 -z-50'
          onClick={() => setOpen((prev) => !prev)}>
          <Menu />
        </Button>
      </div>
      {/* list of mobile nav items: */}
      <div
        className={cn(
          'fixed bg-primary bottom-16 inset-x-0 flex flex-col justify-between gap-2 p-4 border-primary transition h-[320px] z-10',
          open ? 'translate-y-0' : 'translate-y-[384px]'
        )}>
        <MobileNavigationItem href='#o-mnie' onClick={() => setOpen(false)}>
          O mnie
        </MobileNavigationItem>
        <MobileNavigationItem href='#efekt' onClick={() => setOpen(false)}>
          Efekt
        </MobileNavigationItem>
        <MobileNavigationItem href='#oferta' onClick={() => setOpen(false)}>
          Oferta
        </MobileNavigationItem>
        <MobileNavigationItem href='#wspolpraca' onClick={() => setOpen(false)}>
          Współpraca
        </MobileNavigationItem>
        <MobileNavigationItem href='#kontakt' onClick={() => setOpen(false)}>
          Kontakt
        </MobileNavigationItem>
      </div>
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
    <Link
      className='flex-1 flex items-center justify-center w-full p-2 bg-white/20 text-white hover:bg-white/30 rounded-md cursor-pointer'
      onClick={onClick}
      href={href}>
      {children}
    </Link>
  );
};
