import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'portfolio-navy': '#1A2F4B',
        'portfolio-deep-sky': '#28475C',
        'portfolio-teal': '#2F8886',
        'portfolio-mint': '#84C69B', 
        'portfolio-sage': '#86A789',
        'portfolio-seafoam': '#B2C8BA',
        'portfolio-pale-mint': '#D2E3C8',
        'portfolio-ice': '#EBF3E8',
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
        roboto: ["var(--font-roboto)"],
      },
      animation: {
        "slide-left": "slide-left 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
        slideDownAndFade: 'slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideLeftAndFade: 'slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideUpAndFade: 'slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideRightAndFade: 'slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',

      },
      keyframes: {
        "slide-left": {
            "0%": {
                transform: "translateX(0)"
            },
            to: {
                transform: "translateX(-1000px)"
            }
        },
        slideDownAndFade: {
          from: { opacity: '0', transform: 'translateY(-2px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideLeftAndFade: {
          from: { opacity: '0', transform: 'translateX(2px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        slideUpAndFade: {
          from: { opacity: '0', transform: 'translateY(2px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideRightAndFade: {
          from: { opacity: '0', transform: 'translateX(-2px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
      }
    },
  },
  plugins: [],
};
export default config;
