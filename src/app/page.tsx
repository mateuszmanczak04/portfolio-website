import About from '@/components/About';
import Contact from '@/components/Contact';
import Effect from '@/components/Effect';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Offer from '@/components/Offer';
import Process from '@/components/Process';
import Separator from '@/components/Separator';

export default function Home() {
  return (
    <div className='flex-1 px-4 md:px-8 max-w-screen-lg mx-auto pt-8 flex flex-col text-neutral-800'>
      <Hero />
      <Separator />
      <About />
      <Separator />
      <Effect />
      <Separator />
      <Offer />
      <Separator />
      <Process />
      <Separator />
      <Contact />
      <Footer />
    </div>
  );
}
