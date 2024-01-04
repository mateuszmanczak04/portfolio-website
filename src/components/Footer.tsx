import { FC } from 'react';

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <div className='h-16 inset-x-0 grid place-content-center'>
      <p>&copy; Mateusz Mańczak 2024</p>
    </div>
  );
};

export default Footer;
