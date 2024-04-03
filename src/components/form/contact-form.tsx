'use client';

import { getS3Url } from '@/actions/get-s3-url';
import { submitForm } from '@/actions/submit-form';
import AttachmentItem from '@/components/form/attachment';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import { formSchema } from '@/schema';
import { type Attachment } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { File, Mail, Send, User } from 'lucide-react';
import mime from 'mime-types';
import Link from 'next/link';
import { ChangeEvent, DragEvent, useState, useTransition } from 'react';
import { useFormState } from 'react-dom';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import DragAndDropIndicator from './drag-and-drop-indicator';

const ContactForm = () => {
	const [isUploadingAttachments, setIsUploadingAttachments] = useState(false);
	const [attachmentsError, setAttachmentsError] = useState('');
	const [isPending, startTransition] = useTransition();
	const [submitResult, dispatch] = useFormState(submitForm, undefined);
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			email: '',
			message: '',
			attachments: [],
		},
	});
	const [dragActive, setDragActive] = useState(false);

	const uploadFile = async (file: File): Promise<Attachment | undefined> => {
		// note:
		// it is impossible to create a progress bar because
		// XMLHttpRequest's upload event runs so rarely
		// that for small files it doesn't even trigger

		// block all files above 5 MB
		if (file.size > 5_242_880) {
			throw new Error('Maksymalny rozmiar pliku to 5MB');
		}

		const fileType = mime.lookup(file.name);

		if (typeof fileType !== 'string') {
			throw new Error('Serwer nie obsługuje plików bez rozszerzenia.');
		}

		const { url, error } = await getS3Url({
			fileName: file.name,
			contentType: fileType,
		});

		if (error) {
			throw new Error(error);
		}

		if (!url) {
			throw new Error(
				'Wystąpił błąd podczas dodawania pliku. Spróbuj ponownie później.',
			);
		}

		try {
			// upload file to s3
			await fetch(url, {
				method: 'PUT',
				headers: {
					'Content-Type': file.type,
				},
				body: file,
			});

			const fileUrl = url.split('?')[0];

			return { url: fileUrl, filename: file.name };
		} catch (err) {
			// catch exceptions when uploading to S3
			throw new Error(
				'Wystąpił błąd podczas dodawania pliku. Spróbuj ponownie później.',
			);
		}
	};

	// pass files which will be uploaded and added
	// to the form state:
	const attachFiles = async (files: FileList | null) => {
		setAttachmentsError('');

		if (!files || files.length < 1) return;

		const attachments: Attachment[] = [];

		setIsUploadingAttachments(true);

		try {
			// loop through all files from file type input, upload
			// them to aws s3 and push its {url, filename} to the
			// "attachments" array:
			for (let i = 0; i < files.length; i++) {
				// it could be done better by meaning in parallel but
				// these files are not too big so keep it as it is:
				const file: File = files[i];
				const attachment: Attachment | undefined = await uploadFile(file);
				if (attachment) {
					attachments.push(attachment);
				}
			}
		} catch (err: any) {
			// err.message is a text message
			setAttachmentsError(err.message);
		}

		// update state of form attachments:
		form.setValue('attachments', [
			...form.getValues().attachments,
			...attachments,
		]);

		setIsUploadingAttachments(false);
	};

	// when user clicks add file button:
	const onFileInputChange = async (e: ChangeEvent<HTMLInputElement>) => {
		attachFiles(e.target.files);
	};

	const onSubmit = (values: z.infer<typeof formSchema>) => {
		startTransition(async () => {
			dispatch(values);
			form.reset();
		});
	};

	// activated when user clicks on the "X" button
	// on attachment preview:
	const attachmentRemoved = (url: string) => {
		form.setValue(
			'attachments',
			form.getValues().attachments.filter((a) => a.url !== url),
		);
	};

	// drag & drop - display dragging indicator:
	const handleDrag = (e: DragEvent) => {
		e.preventDefault();
		e.stopPropagation();
		if (e.type === 'dragenter' || e.type === 'dragover') {
			setDragActive(true);
		} else if (e.type === 'dragleave') {
			setDragActive(false);
		}
	};

	// drag & drop - release file
	const handleDrop = (e: DragEvent) => {
		e.preventDefault();
		setDragActive(false);
		attachFiles(e.dataTransfer.files);
	};

	return (
		<Card
			className={cn('relative flex-1')}
			onDragEnter={handleDrag}
			onDragOver={handleDrag}
			onDragLeave={handleDrag}
			onDrop={handleDrop}>
			<CardHeader>
				<CardTitle>Bezpośredni formularz kontaktowy</CardTitle>
				<CardDescription>
					To, co tu napiszesz, przyjdzie mi natychmiastowo na maila.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
						<FormField
							control={form.control}
							name='name'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Imię i nazwisko</FormLabel>
									<FormControl>
										<div className='relative'>
											<Input
												id='form-name-input'
												{...field}
												placeholder='Jan Kowalski'
												className='pl-10'
											/>
											<User className='absolute left-2.5 top-2.5 h-5 w-5' />
										</div>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='email'
							render={({ field }) => (
								<FormItem>
									<FormLabel>E-mail</FormLabel>
									<FormControl>
										<div className='relative'>
											<Input
												{...field}
												placeholder='example@abc.com'
												className='pl-10'
											/>
											<Mail className='absolute left-2.5 top-2.5 h-5 w-5' />
										</div>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='message'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Wiadomość</FormLabel>
									<FormControl>
										<Textarea
											rows={8}
											{...field}
											placeholder='Dzień dobry, chciałbym zlecić ...'
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						{/* preview of attachments: */}
						<div className='grid grid-cols-1 gap-2'>
							{isUploadingAttachments && (
								<p className='animate-pulse text-center'>Ładuję pliki...</p>
							)}
							{form.watch('attachments').map((attachment: Attachment) => (
								<AttachmentItem
									key={attachment.url}
									remove={attachmentRemoved}
									url={attachment.url}
									filename={attachment.filename}
								/>
							))}
							{attachmentsError && (
								<p className='mt-2 rounded-md bg-destructive/10 p-2 text-center text-destructive'>
									{attachmentsError}
								</p>
							)}
						</div>
						{/* button to add attachments: */}
						<Button
							type='button'
							variant='secondary'
							className='flex h-20 w-full flex-col items-center gap-1'
							asChild>
							<label className='cursor-pointer'>
								<div className='flex items-center gap-1'>
									<input
										onChange={onFileInputChange}
										type='file'
										name='attachment'
										hidden
										multiple
									/>
									<File className='h-5 w-5' />
									<span>Dodaj załączniki</span>
								</div>
								<p className='text-foreground/50'>(lub przeciągnij je tutaj)</p>
							</label>
						</Button>
						<Button
							type='submit'
							className='flex w-full items-center gap-2'
							disabled={isPending}>
							<Send className='h-5 w-5' />
							<span>Wyślij wiadomość</span>
						</Button>
						{isPending && (
							<p className='animate-pulse text-center'>
								Trwa wysyłanie wiadomości...
							</p>
						)}
						{submitResult?.error && (
							<p className='rounded-md bg-destructive/10 p-2 text-center text-destructive'>
								{submitResult.error}
							</p>
						)}
						{submitResult?.success && (
							<p className='rounded-md bg-green-100 p-2 text-center text-green-600'>
								{submitResult.success}
							</p>
						)}
					</form>
				</Form>
			</CardContent>
			<CardFooter>
				<p>
					Klikając &bdquo;wyślij wiadomość&rdquo; akceptujesz&nbsp;
					<Link href='/regulamin' className='underline'>
						regulamin
					</Link>
					.
				</p>
			</CardFooter>
			<DragAndDropIndicator isVisible={dragActive} />
		</Card>
	);
};

export default ContactForm;
