const About = ({}) => {
  return (
    <div
      className='w-full max-w-screen-md flex flex-col items-center mx-auto gap-2 py-16 md:py-20 lg:py-24'
      id='o-mnie'>
      <h2 className='h4 font-bold'>O mnie</h2>
      <p className='text-justify'>
        Aktualnie jestem studentem I roku informatyki w Poznaniu, a po godzinach
        szkolnych interesuję się programowaniem, szczególnie tworzeniem
        aplikacji webowych. W celu zbudowania mojego portfolio stworzyłem tę
        stronę jako wizytówkę i reklamę. Daję z siebie wszystko, by projekty,
        które tworzę były na jak najwyższym poziomie i zadowoliły oko i portfel
        klienta.
      </p>
    </div>
  );
};

export default About;
