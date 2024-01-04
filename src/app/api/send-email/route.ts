import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const { email, name, message } = await request.json();

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const content = `${name}\n${email}\n\n${message}`;

  const mailOptions = {
    from: process.env.EMAIL,
    to: 'mateuszmanczak2004@gmail.com',
    subject: 'Wiadomość ze strony Portfolio',
    text: content,
  };

  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      return Response.json(
        { message: 'Pomyślnie wysłano wiadomość.' },
        { status: 200 }
      );
    } else {
      return Response.json(
        { message: 'Nie udało się wysłać wiadomości. Spróbuj jeszcze raz.' },
        { status: 500 }
      );
    }
  });
}
