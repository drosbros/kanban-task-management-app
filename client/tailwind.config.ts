import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      purple: {
        default: '#635FC7',
        light: '#A8A4FF',
      },
      red: {
        default: '#EA5555',
        light: '#FF9898',
      },
      white: '#FFFFFF',
      black: '#000112',
      gray: {
        light: '#F4F7FD',
        medium: '#828FA3',
        dark: '#2B2C37',
        'very-dark': '#20212C',
      },
      lines: {
        dark: '#3E3F4E',
        light: 'E4EBFA',
      },
    },
    extend: {
      borderRadius: {
        '3xl': '20px',
        '4xl': '24px',
      },
    },
  },
  plugins: [],
};
export default config;
