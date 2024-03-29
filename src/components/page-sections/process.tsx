import EffectCard from '@/components/effect-card';

const Process = () => {
	return (
		<div
			className='flex w-full flex-col gap-4 py-16 md:py-20 lg:gap-8 lg:py-24'
			id='wspolpraca'>
			<h2 className='w-full text-center text-4xl font-bold'>
				Przebieg współpracy
			</h2>
			<div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-8'>
				<EffectCard
					title='Oferta'
					description='Na dole strony znajduje się formularz, który możesz wypełnić, bym następnie ja mógł się z tobą skontaktować.'
					icon={<h3 className='text-4xl font-bold'>1</h3>}
				/>
				<EffectCard
					title='Rozmowa'
					description='Łączymy się na dowolnym komunikatorze, by omówić szczegóły projektu, wykorzystane technologie i koszt. Tutaj też podpisujemy umowę poprzez serwis Useme.'
					icon={<h3 className='text-4xl font-bold'>2</h3>}
				/>
				<EffectCard
					title='Projekt'
					description='Wiedząc co mam do zrobienia, zaczynam pracę, na bieżąco komunikując się z Tobą oraz informując Cię o przebiegu pracy. Chcę, byś jako klient miał swój udział w projekcie.'
					icon={<h3 className='text-4xl font-bold'>3</h3>}
				/>
				<EffectCard
					title='Poprawki'
					description='Jeśli w międzyczasie uznasz, że chcesz coś zmienić lub poprawić, ja jestem pod tym względem elastyczny i o ile nie będzie to przeprojektowanie całej strony od zera, możemy dokonać zmian.'
					icon={<h3 className='text-4xl font-bold'>4</h3>}
				/>
				<EffectCard
					title='Dostarczenie'
					description='W zależności od poprzednich ustaleń, Ty jako klient dostajesz pliki źródłowe lub gotową stronę postawioną w internecie, którą ja będę od tej pory zarządzał dla Ciebie.'
					icon={<h3 className='text-4xl font-bold'>5</h3>}
				/>
			</div>
		</div>
	);
};

export default Process;
