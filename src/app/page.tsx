import About from '@/components/About';
import Contact from '@/components/Contact';
import Effect from '@/components/Effect';
import Hero from '@/components/Hero';
import Offer from '@/components/Offer';
import Process from '@/components/Process';
import Separator from '@/components/Separator';

export default function Home() {
  return (
    <div className='container py-24 flex flex-col gap-16'>
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
    </div>
  );
}
