/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        arrow: "url('/src/assets/arrow-curve.svg')",
        three: "url('/src/assets/three-dashes.svg')",
      },
      colors: {
        primary: '#ed4d1b',
        secondary: '#ff9a3c',
        black: '#000',
        white: '#fff',
      },
      boxShadow: {
        card: ' 4px 4px 0 #000',
      },
    },
    screens: {
      sm: '40rem',
      md: '48rem',
      lg: '72rem',
      xl: '90rem',
    },
  },
  plugins: [],
};

