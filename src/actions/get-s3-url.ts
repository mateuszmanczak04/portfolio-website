'use server';

import { s3Schema } from '@/schema';
import aws from 'aws-sdk';
import mime from 'mime-types';
import { nanoid } from 'nanoid';
import path from 'path';
import { z } from 'zod';

export const getS3Url = async (values: z.infer<typeof s3Schema>) => {
  const validatedFields = s3Schema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'Invalid request' };
  }

  const { contentType, fileName } = validatedFields.data;

  const region = 'eu-central-1';
  const bucketName = 'mateuszmanczak-portfolio-website';
  const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
  const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

  const s3 = new aws.S3({
    region,
    accessKeyId,
    secretAccessKey,
    signatureVersion: 'v4',
  });

  let extension = '';
  if (contentType) {
    extension = mime.extension(contentType) || '';
  }

  if (!contentType || !fileName) {
    return {
      error: 'Plik nie mógł zostać obsłużony przez serwer.',
    };
  }

  const params = {
    Bucket: bucketName,
    Key: path.parse(fileName).name + '-' + nanoid() + '.' + extension,
    Expires: 20,
    ContentType: contentType,
  };

  try {
    const url = await s3.getSignedUrlPromise('putObject', params);
    return { url };
  } catch (error) {
    return {
      error: 'Nie udało się dodać załącznika. Spróbuj ponownie później.',
    };
  }
};
