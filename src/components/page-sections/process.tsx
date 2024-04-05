'use client';

import EffectCard from '@/components/effect-card';
import { motion } from 'framer-motion';

const Process = () => {
	return (
		<motion.div
			initial={{ opacity: 0, translateX: -256 }}
			whileInView={{ opacity: 1, translateX: 0 }}
			transition={{ delay: 0.25, duration: 2 }}
			viewport={{ once: true }}
			className='mx-auto flex w-full max-w-screen-lg flex-col items-center gap-8 px-4 py-16 md:py-20 lg:py-24'
			id='wspolpraca'>
			<h2 className='w-full text-center text-4xl font-bold'>
				Przebieg współpracy
			</h2>
			<div className='grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
				<EffectCard
					title='1. Oferta 💰'
					subtitle='Czas i pieniądze są ważne w biznesie.'
					description='Na dole strony znajduje się formularz, który możesz wypełnić. Skontaktuję się z Tobą, aby omówić szczegóły.'
				/>
				<EffectCard
					title='2. Rozmowa 📞'
					subtitle='Załatwmy to jak ludzie'
					description='Umówimy się na rozmowę na dowolnym komunikatorze, aby omówić szczegóły projektu, wykorzystane technologie i koszt. Wtedy też podpiszemy umowę poprzez serwis Useme.'
				/>
				<EffectCard
					title='3. Projekt ✏️'
					subtitle='Dobry plan to podstawa.'
					description='Po ustaleniu szczegółów rozpocznę pracę nad projektem. Będę na bieżąco informować Cię o postępach i konsultować z Tobą wszystkie ważne decyzje. Chcę, abyś jako klient miał swój udział w projekcie.'
				/>
				<EffectCard
					title='4. Poprawki ⚙️'
					subtitle='Doskonałość nie zna granic.'
					description='Jeśli w trakcie realizacji projektu uznasz, że chcesz coś zmienić lub poprawić, jestem otwarty na Twoje sugestie. O ile zmiany nie będą wymagać przeprojektowania całej strony od zera, z przyjemnością je wprowadzę.'
				/>
				<EffectCard
					title='5. Dostarczenie 📦'
					subtitle='Zadowolony klient to mój priorytet.'
					description='W zależności od wcześniejszych ustaleń otrzymasz pliki źródłowe strony lub gotową stronę internetową postawioną w internecie. W tym drugim przypadku będę również zarządzał nią dla Ciebie.'
				/>
			</div>
		</motion.div>
	);
};

export default Process;
