/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FFFCF7',
          100: '#FFF9EF', // Warm Cream
          200: '#FFF0D4',
          300: '#FFE6B9',
        },
        sunshine: {
          100: '#FFF6D6',
          200: '#FFEEAD',
          300: '#FFE285',
          DEFAULT: '#FFD66B', // Sunshine Yellow
          500: '#F5BE38',
          600: '#E6A310',
        },
        skyblue: {
          100: '#E8F6FD',
          200: '#CEECFA',
          DEFAULT: '#A9DDF5', // Sky Blue
          400: '#7AC6EE',
          500: '#4EAEE2',
          600: '#2A93CB',
        },
        peach: {
          100: '#FFF1EB',
          200: '#FFDED0',
          DEFAULT: '#FFC9AE', // Pastel Peach
          400: '#FFAF8A',
          500: '#FF8A54',
        },
        mint: {
          100: '#EEF9F2',
          200: '#DAF3E3',
          DEFAULT: '#BCE8CC', // Mint Green
          400: '#94D9AC',
          500: '#64C585',
          600: '#3EA964',
        },
        lavender: {
          100: '#F6F2FD',
          200: '#EAE1FA',
          DEFAULT: '#DCCBFA', // Lavender
          400: '#C2A5F5',
          500: '#A47AEF',
          600: '#8353DF',
        },
        navy: {
          100: '#E4EAF4',
          200: '#BDCBE1',
          500: '#485E86',
          DEFAULT: '#263653', // Deep Navy
          800: '#1D2A42',
          900: '#141E30',
        },
        coral: {
          DEFAULT: '#FF6B6B',
          400: '#FF8787',
          500: '#FA5252',
        }
      },
      fontFamily: {
        heading: ['Fredoka', 'Baloo 2', 'system-ui', 'sans-serif'],
        body: ['Nunito', 'Poppins', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 8px 30px rgba(38, 54, 83, 0.06)',
        'playful': '0 12px 0 0 rgba(38, 54, 83, 0.08)',
        'card': '0 14px 34px -10px rgba(38, 54, 83, 0.08)',
        'card-hover': '0 22px 45px -12px rgba(38, 54, 83, 0.14)',
        'button-yellow': '0 6px 0 0 #DDA51E',
        'button-blue': '0 6px 0 0 #2A7EAD',
        'button-coral': '0 6px 0 0 #D64545',
        'button-navy': '0 6px 0 0 #141E30',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        'blob': '60% 40% 70% 30% / 40% 50% 60% 50%',
        'blob-alt': '40% 60% 35% 65% / 55% 40% 60% 45%',
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'float-slow': 'float 7s ease-in-out infinite',
        'float-reverse': 'floatReverse 5s ease-in-out infinite',
        'wiggle': 'wiggle 2s ease-in-out infinite',
        'pulse-gentle': 'pulseGentle 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(2deg)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(12px) rotate(-2deg)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        pulseGentle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.03)' },
        },
      },
    },
  },
  plugins: [],
};
