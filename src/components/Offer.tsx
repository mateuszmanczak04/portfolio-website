import OfferCard from './OfferCard';

const Offer = () => {
  return (
    <div
      className='w-full flex flex-col gap-4 lg:gap-8 py-16 md:py-20 lg:py-24'
      id='oferta'>
      <h2 className='h4  text-center w-full font-bold'>Aktualna oferta</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-8'>
        <OfferCard
          title='Strona wizytówka'
          description='Daj swoim klientom lepiej poznać się w internecie dzięki profesjonalnie stworzonej wizytówce w postaci strony internetowej.'
          image='/images/strona-wizytowka.jpg'
        />
        <OfferCard
          title='Aplikacja internetowa'
          description='Zautomatyzuj swoją pracę lub przeskaluj swój biznes dzięki nowoczesnej technologii.'
          image='/images/aplikacja-internetowa.jpg'
        />
      </div>
    </div>
  );
};

export default Offer;
