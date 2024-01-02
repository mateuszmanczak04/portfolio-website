import OfferCard from './OfferCard';

const Offer = () => {
  return (
    <div className='w-full flex flex-col gap-4'>
      <h2 className='text-4xl text-center w-full font-bold'>Aktualna oferta</h2>
      <div className='grid grid-cols-1 gap-4'>
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
