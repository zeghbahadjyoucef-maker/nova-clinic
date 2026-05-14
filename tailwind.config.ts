import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '1rem', md: '2rem' },
      screens: { '2xl': '1280px' }
    },
    extend: {
      colors: {
        brand: {
          50: '#EAF6FC',
          100: '#D2ECF7',
          200: '#A8D8EF',
          300: '#7DC3E7',
          400: '#4FB0DE',
          500: '#1FA9E0',
          600: '#1387B5',
          700: '#0F6A8E',
          800: '#0F4C81',
          900: '#0B355A'
        },
        ink: {
          DEFAULT: '#1E2A3A',
          soft: '#475569',
          muted: '#94A3B8'
        },
        sky: {
          tint: '#E8F4FB'
        }
      },
      fontFamily: {
        sans: ['var(--font-jakarta)', 'ui-sans-serif', 'system-ui'],
        ar: ['var(--font-cairo)', 'ui-sans-serif', 'system-ui'],
        script: ['var(--font-script)', 'cursive']
      },
      boxShadow: {
        soft: '0 10px 40px -10px rgba(15, 76, 129, 0.15)',
        card: '0 20px 60px -20px rgba(15, 76, 129, 0.25)'
      },
      borderRadius: {
        '4xl': '2rem'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' }
        },
        blob: {
          '0%, 100%': { borderRadius: '60% 40% 50% 70% / 60% 40% 60% 40%' },
          '50%': { borderRadius: '40% 60% 70% 40% / 50% 60% 40% 50%' }
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        blob: 'blob 12s ease-in-out infinite',
        'fade-up': 'fade-up 0.6s ease-out both'
      }
    }
  },
  plugins: []
};

export default config;
