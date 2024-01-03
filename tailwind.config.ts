import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

const config: Config = {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    colors: {
      primary: '#2e70ff',
      white: '#FFFFFF',
      neutral: colors.neutral,
      link: '#2e70ff',
    },
    fontFamily: {
      heading: ['Merriweather'],
      body: ['Inter'],
    },
    boxShadow: {
      DEFAULT: '0px 0px 50px 0px #00000013',
    },
    extend: {},
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
