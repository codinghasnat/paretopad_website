/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'forest-green': '#0E3F2B',
        'mint': '#A8E6CF',
        'off-white': '#F5F7F2',
        'charcoal': '#0A0A0A',
        'dark-green': '#0A2F20',
        'emerald-accent': '#34D399', // Emerald 400
        'teal-accent': '#2DD4BF', // Teal 400
      },
      fontFamily: {
        'heading': ['ABeeZee', 'sans-serif'],
        'body': ['ABeeZee', 'sans-serif'],
        'slab': ['"Roboto Slab"', 'serif'],
        'display': ['Syne', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to bottom, #0E3F2B, #0A2F20)',
      },
      animation: {
        'shimmer': 'shimmer 2s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        shimmer: {
          from: { backgroundPosition: '0 0' },
          to: { backgroundPosition: '-200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: 1, boxShadow: '0 0 20px rgba(168, 230, 207, 0.2)' },
          '50%': { opacity: .5, boxShadow: '0 0 40px rgba(168, 230, 207, 0.6)' },
        }
      }
    },
  },
  plugins: [],
}
