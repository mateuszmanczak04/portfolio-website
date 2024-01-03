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
    extend: {},
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
