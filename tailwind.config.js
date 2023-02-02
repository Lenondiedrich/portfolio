/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}", 
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Inter": 'Inter'
      },
      backgroundImage: {
        'texture': "url('/geometry.png')",
      },
      colors: {
        'background': '#16161a',
        'mainText': '#fffffe',
        'paragraph': '#94a1b2',
        'button': '#2cb67d'
      },
      keyframes: {
        'fade-in-down': {
            '0%': {
                opacity: '0',
                transform: 'translateY(-10px)'
            },
            '100%': {
                opacity: '1',
                transform: 'translateY(0)'
            },
        },
        'fade-in-right': {
          '0%': {
            opacity: '0',
            transform: 'translateX(300px)'
          },
          '100%': {
            opacity: '1'
          }
        },
        'fade-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(200px)'
          },
          '100%': {
            opacity: '1'
          }
        },
    },
    animation: {
        'fade-in-down': 'fade-in-down 0.3s ease-in-out',
        'fade-in-right': 'fade-in-right 1s ease-in-out',
        'fade-up': 'fade-up 1s ease-in-out',
    }
    },
    
  },
  plugins: [],
}