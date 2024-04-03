import { File } from 'lucide-react';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { AnimatePresence, motion } from 'framer-motion';
import { FC } from 'react';

interface DragAndDropIndicatorProps {
	isVisible: boolean;
}

const DragAndDropIndicator: FC<DragAndDropIndicatorProps> = ({ isVisible }) => {
	return (
		<AnimatePresence>
			{isVisible && (
				<motion.div
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					exit={{ opacity: 0, scale: 0.8 }}
					className='absolute left-0 top-0 flex h-full w-full items-center justify-center rounded-md border-4 border-dashed border-primary/75 bg-primary/50'>
					<Card>
						<CardHeader>
							<CardTitle>Przeciągnij pliki tutaj</CardTitle>
							<CardDescription>Zostaną dodane do formularza</CardDescription>
						</CardHeader>
						<CardContent>
							<File className='mx-auto h-12 w-12' />
						</CardContent>
					</Card>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default DragAndDropIndicator;
