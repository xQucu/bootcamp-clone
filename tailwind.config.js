/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        extraSm: '425px',
      },
      backgroundImage: {
        contactFormGradient:
          'linear-gradient(90deg, #f3f3f300, #f3f3f3a6), url(../FormIllustration.svg)',
        contactFormPure: 'url(../FormIllustration.svg)',
      },
      boxShadow: {
        BottomShadow: '0 5px 0 0 #191A23',
      },
      keyframes: {
        infiniteSponsors: {
          from: { transform: 'translateX(-110%)' },
          to: { transform: 'translateX(-10%)' },
        },
      },
      animation: {
        infiniteSponsors: 'infiniteSponsors 30s linear infinite',
      },
      colors: {
        dark: '#191A23',
        green: '#B9FF66',
        light: '#F3F3F3',
      },
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
