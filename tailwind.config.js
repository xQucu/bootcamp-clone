import { fromJSON } from 'postcss';
import { transform } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        BottomShadow: '0 5px 0 0 #191A23',
      },
      keyframes: {
        infiniteSponsors: {
          from: { transform: 'translateX(-100%)' },
          to: { transform: 'translateX(0)' },
        },
      },
      animation: {
        infiniteSponsors: 'infiniteSponsors 25s linear infinite ',
      },
      colors: {
        dark: '#191A23',
        green: '#B9FF66',
        light: '#F3F3F3',
      },
      fontFamily: {
        sans: 'Space Grotesk',
      },
    },
  },
  plugins: [],
};
