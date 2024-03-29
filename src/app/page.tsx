import About from '@/components/about';
import Contact from '@/components/contact';
import Effect from '@/components/effect';
import Footer from '@/components/footer';
import Hero from '@/components/hero';
import Offer from '@/components/offer';
import Process from '@/components/process';
import Separator from '@/components/separator';

export default function Home() {
  return (
    <div className='flex-1 px-4 md:px-8 max-w-screen-lg mx-auto pt-8 flex flex-col text-neutral-800'>
      <Hero />
      <Separator />
      <About />
      <Separator />
      <Effect />
      <Separator />
      {/* <Offer /> */}
      <Separator />
      <Process />
      <Separator />
      <Contact />
      <Footer />
    </div>
  );
}
