const About = () => {
	return (
		<div
			className='mx-auto flex w-full max-w-screen-md flex-col items-center gap-8 px-4 py-16 md:py-20 lg:py-24'
			id='o-mnie'>
			<h2 className='text-4xl font-bold'>O mnie</h2>
			<p className='w-full max-w-[500px] hyphens-auto text-justify leading-7'>
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
