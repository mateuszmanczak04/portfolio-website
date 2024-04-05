'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Image from 'next/image';
import { useState } from 'react';
import { X } from 'lucide-react';

const About = () => {
	const [isImagePreviewOpen, setIsImagePreviewOpen] = useState(false);

	return (
		<div
			className='relative mx-auto flex w-full max-w-screen-sm flex-col items-center gap-8 px-4 py-16 md:py-20 lg:py-24'
			id='o-mnie'>
			<h2 className='text-4xl font-bold'>O mnie</h2>
			<motion.div
				style={{ originX: 0.1, originY: 0.9 }}
				initial={{ opacity: 0, translateY: 64, scale: 0 }}
				whileInView={{ opacity: 1, translateY: 0, scale: 1 }}
				transition={{ delay: 0.1, duration: 0.25 }}
				viewport={{ once: true }}
				className='after:border-top-[50px_solid_#555] relative w-full space-y-2 rounded-xl bg-accent p-4 leading-7 after:absolute after:-bottom-7 after:left-6 after:-z-10 after:h-0 after:w-0 after:border-l-[24px] after:border-r-[24px] after:border-t-[32px] after:border-l-transparent after:border-r-transparent after:border-t-accent dark:bg-card dark:after:border-t-card'>
				<p>
					Cześć! Mam na imię Mateusz, ale większość osób mówi mi Maniek. Jestem
					studentem informatyki na poznańskim uniwersytecie. Swoją pasję do
					programowania rozwijam po godzinach, specjalizując się w tworzeniu
					nowoczesnych i funkcjonalnych aplikacji webowych.
				</p>
				<p>
					Stworzyłem tę stronę, aby zaprezentować światu swoje umiejętności i
					doświadczenie w programowaniu. Zależy mi na tym, by każdy projekt był
					dopracowany w najmniejszych szczegółach i spełniał wszystkie
					oczekiwania klienta.
				</p>
				<span className='block text-sm opacity-50'>
					(Avatar poniżej jest klikalny)
				</span>
			</motion.div>
			<Avatar
				className='ml-2 mr-auto mt-2 h-16 w-16 cursor-pointer shadow-xl transition hover:opacity-90'
				onClick={() => setIsImagePreviewOpen(!isImagePreviewOpen)}>
				<AvatarImage
					src='/images/avatar.webp'
					className='object-cover'
					alt='moje zdjęcie jako mały avatar'
				/>
				<AvatarFallback>MM</AvatarFallback>
			</Avatar>
			<AnimatePresence>
				{isImagePreviewOpen && (
					<motion.div
						initial={{ scale: 0, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						exit={{ scale: 0, opacity: 0 }}
						style={{
							position: 'absolute',
							left: '50%',
							top: '50%',
							x: '-50%',
							y: '-50%',
							width: 'calc(100% - 32px)',
							maxWidth: '400px',
						}}
						transition={{ duration: 0.25 }}>
						<Image
							priority={true}
							src='/images/avatar.webp'
							width={400}
							height={533}
							alt='Moje zdjęcie'
							className='rounded-xl'
							onClick={() => setIsImagePreviewOpen(false)}
						/>
						<div
							className='absolute right-0 top-0 flex h-12 w-12 cursor-pointer items-center justify-center rounded-bl-xl rounded-tr-xl bg-accent hover:opacity-90'
							onClick={() => setIsImagePreviewOpen(false)}>
							<X className='h-8 w-8' />
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default About;
