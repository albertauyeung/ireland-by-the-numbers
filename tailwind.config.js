/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        parchment: {
          50: '#FDFBF6',
          100: '#FBF7EE',
          200: '#F4ECD8',
          300: '#E8DBB8',
        },
        emerald_ie: {
          50: '#EAF3EE',
          100: '#C9E0D2',
          400: '#3F8C5F',
          600: '#206944',
          700: '#14543D',
          800: '#0E3F2D',
          900: '#062A1E',
        },
        ochre: {
          400: '#E5A93C',
          500: '#D88E1F',
          600: '#B26C0E',
        },
        ink: {
          700: '#2C2A26',
          900: '#171612',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(20,20,20,0.04), 0 8px 24px -12px rgba(20,84,61,0.18)',
      },
    },
  },
  plugins: [],
};
