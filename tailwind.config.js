/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb', // 블루
        accent: '#22c55e', // 그린
        secondary: '#9333ea', // 퍼플
        warning: '#f59e42', // 오렌지
        info: '#06b6d4', // 시안
        success: '#10b981', // 에메랄드
        danger: '#ef4444', // 레드
        yellow: '#facc15',
        pink: '#ec4899',
        gray: {
          50: '#f3f4f6',
          100: '#e5e7eb',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
        blue: {
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#3b82f6',
          700: '#1d4ed8',
        },
        green: {
          50: '#f0fdf4',
          100: '#dcfce7',
          500: '#22c55e',
          700: '#15803d',
        },
        purple: {
          50: '#f5f3ff',
          100: '#ede9fe',
          500: '#a21caf',
          700: '#6d28d9',
        },
        yellow: {
          50: '#fefce8',
          100: '#fef9c3',
          500: '#eab308',
          700: '#ca8a04',
        },
      },
      fontFamily: {
        sans: ['Geist Sans', 'Noto Sans KR', 'Montserrat', 'Pretendard', 'Arial', 'sans-serif'],
        display: ['Montserrat', 'Geist Sans', 'Noto Sans KR', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 16px rgba(37,99,235,0.10)',
        btn: '0 2px 8px rgba(34,197,94,0.15)',
        accent: '0 2px 8px rgba(147,51,234,0.12)',
        glow: '0 0 16px 2px rgba(59,130,246,0.15)',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
        full: '9999px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    keyframes: {
      fadein: {
        '0%': { opacity: '0', transform: 'translateY(40px)' },
        '100%': { opacity: '1', transform: 'translateY(0)' },
      },
    },
    animation: {
      fadein: 'fadein 1s cubic-bezier(0.4,0,0.2,1) both',
    },
  },
  plugins: [],
};
