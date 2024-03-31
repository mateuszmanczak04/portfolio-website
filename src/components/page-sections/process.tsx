import EffectCard from '@/components/effect-card';

const Process = () => {
	return (
		<div
			className='mx-auto flex w-full max-w-screen-md flex-col items-center gap-8 px-4 py-16 md:py-20 lg:py-24'
			id='wspolpraca'>
			<h2 className='w-full text-center text-4xl font-bold'>
				Przebieg współpracy
			</h2>
			<div className='grid w-full grid-cols-1 gap-4 sm:grid-cols-2'>
				<EffectCard
					title='1. Oferta'
					subtitle='Bo w biznesie liczy się czas i pieniądz'
					description='Na dole strony znajduje się formularz, który możesz wypełnić, bym następnie ja mógł się z tobą skontaktować.'
				/>
				<EffectCard
					title='2. Rozmowa'
					subtitle='Załatwmy to jak ludzie'
					description='Łączymy się na dowolnym komunikatorze, by omówić szczegóły projektu, wykorzystane technologie i koszt. Tutaj też podpisujemy umowę poprzez serwis Useme.'
				/>
				<EffectCard
					title='3. Projekt'
					subtitle='Bo plan trzeba mieć'
					description='Wiedząc co mam do zrobienia, zaczynam pracę, na bieżąco komunikując się z Tobą oraz informując Cię o przebiegu pracy. Chcę, byś jako klient miał swój udział w projekcie.'
				/>
				<EffectCard
					title='4. Poprawki'
					subtitle='Wszystko idzie udoskonalić'
					description='Jeśli w międzyczasie uznasz, że chcesz coś zmienić lub poprawić, ja jestem pod tym względem elastyczny i o ile nie będzie to przeprojektowanie całej strony od zera, możemy dokonać zmian.'
				/>
				<EffectCard
					title='5. Dostarczenie'
					subtitle='Klient szczęśliwy'
					description='W zależności od poprzednich ustaleń, Ty jako klient dostajesz pliki źródłowe lub gotową stronę postawioną w internecie, którą ja będę od tej pory zarządzał dla Ciebie.'
				/>
			</div>
		</div>
	);
};

export default Process;
