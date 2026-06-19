/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#F59E0B',
          dim: '#B97D0E',
          light: '#FBBF24',
        },
        secondary: '#0F172A',
        base: '#020617',
        accent: '#38BDF8',
        ink: {
          100: '#FFFFFF',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
        },
        glass: 'rgba(255,255,255,0.04)',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
        'radial-fade': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
      },
      boxShadow: {
        glow: '0 0 40px rgba(245, 158, 11, 0.25)',
        'glow-sm': '0 0 20px rgba(245, 158, 11, 0.15)',
        'accent-glow': '0 0 40px rgba(56, 189, 248, 0.2)',
        glass: '0 8px 32px rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
        float: 'float 6s ease-in-out infinite',
        'fade-up': 'fadeUp 0.8s ease forwards',
        marquee: 'marquee 30s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
