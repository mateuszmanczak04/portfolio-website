import aws from 'aws-sdk';
import { NextRequest } from 'next/server';
import mime from 'mime-types';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

export async function GET(request: NextRequest) {
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

  const contentType = request.nextUrl.searchParams.get('contentType');
  const fileName = request.nextUrl.searchParams.get('fileName');

  let extension = '';
  if (contentType) {
    extension = mime.extension(contentType) || '';
  }

  console.log('contentType: ', contentType);
  console.log('fileName: ', fileName);

  if (!contentType || !fileName) {
    return Response.json(
      {
        message: 'Nie udało się dodać załącznika. Spróbuj ponownie później.',
      },
      { status: 400 }
    );
  }

  const params = {
    Bucket: bucketName,
    Key: path.parse(fileName).name + '-' + uuidv4() + '.' + extension,
    Expires: 20,
    ContentType: contentType,
  };

  try {
    const url = await s3.getSignedUrlPromise('putObject', params);
    return Response.json({ url });
  } catch (error) {
    return Response.json(
      {
        message: 'Nie udało się dodać załącznika. Spróbuj ponownie później.',
      },
      { status: 500 }
    );
  }
}
