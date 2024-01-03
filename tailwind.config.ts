import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#E42859',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
