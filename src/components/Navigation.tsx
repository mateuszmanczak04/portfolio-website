'use client';

import { ChevronRight, Menu } from 'lucide-react';
import { Button } from './Button';
import { useState } from 'react';
import { FC } from 'react';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <SideNavigation />
      <div className='z-50 2xl:hidden'>
        {/* mobile nav bar: */}
        <div className='fixed bottom-0 md:top-0 inset-x-0 bg-primary h-16 p-2 text-white flex justify-end z-50 shadow'>
          <Button
            className='hover:bg-white/10 w-full md:w-fit h-full'
            onClick={() => setOpen((prev) => !prev)}>
            <Menu />
          </Button>
        </div>
        {/* list of mobile nav items: */}
        <div
          className={cn(
            'fixed bg-white bottom-16 md:top-[-400px] inset-x-0 flex flex-col justify-between border-t border-t-neutral-200 gap-2 p-4 transition h-[320px] md:h-[400px] max-h-[calc(100vh-64px)] z-40 overflow-y-scroll',
            open
              ? 'translate-y-0 md:translate-y-[464px]'
              : 'translate-y-[384px] md:translate-y-0'
          )}>
          <MobileNavigationItem href='hero' onClick={() => setOpen(false)}>
            Hero
          </MobileNavigationItem>
          <MobileNavigationItem href='o-mnie' onClick={() => setOpen(false)}>
            O mnie
          </MobileNavigationItem>
          <MobileNavigationItem href='efekt' onClick={() => setOpen(false)}>
            Jaki efekt na ciebie czeka?
          </MobileNavigationItem>
          <MobileNavigationItem href='oferta' onClick={() => setOpen(false)}>
            Aktualna oferta
          </MobileNavigationItem>
          <MobileNavigationItem
            href='wspolpraca'
            onClick={() => setOpen(false)}>
            Przebieg współpracy
          </MobileNavigationItem>
          <MobileNavigationItem href='kontakt' onClick={() => setOpen(false)}>
            Kontakt
          </MobileNavigationItem>
        </div>
        <div
          className={cn(
            'bg-neutral-950/50 inset-0 fixed transition z-30',
            open ? 'opacity-100' : 'opacity-0 pointer-events-none'
          )}
          onClick={() => setOpen(false)}></div>
      </div>
    </>
  );
};

export default Navigation;

const MobileNavigationItem: FC<{
  children: React.ReactNode;
  onClick?: () => void;
  href: string;
}> = ({ children, onClick, href }) => {
  return (
    <Button
      className='flex-1 flex items-center justify-between w-full py-2 px-4 max-h-[64px] bg-neutral-50 text-neutral-800 hover:bg-neutral-100 rounded-md lg:rounded-xl cursor-pointer transition'
      onClick={() => {
        const goToSection = document.getElementById(href);
        if (goToSection) goToSection?.scrollIntoView({ behavior: 'smooth' });
        onClick && onClick();
      }}>
      {children}
      <ChevronRight />
    </Button>
  );
};

const SideNavigation = ({}) => {
  return (
    <div className='flex-col w-[320px] gap-4 hidden 2xl:flex sticky h-fit top-12 left-12'>
      <MobileNavigationItem href='hero'>Hero</MobileNavigationItem>
      <MobileNavigationItem href='o-mnie'>O mnie</MobileNavigationItem>
      <MobileNavigationItem href='efekt'>
        Jaki efekt na ciebie czeka?
      </MobileNavigationItem>
      <MobileNavigationItem href='oferta'>Aktualna oferta</MobileNavigationItem>
      <MobileNavigationItem href='wspolpraca'>
        Przebieg współpracy
      </MobileNavigationItem>
      <MobileNavigationItem href='kontakt'>Kontakt</MobileNavigationItem>
    </div>
  );
};
