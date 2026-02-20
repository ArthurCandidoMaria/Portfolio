/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        industrial: {
          black: '#0a0c0f',
          steel: '#1f2933',
          graphite: '#111827',
          metal: '#2f3a46',
          line: '#374151',
          accentBlue: '#38bdf8',
          accentOrange: '#f97316',
          text: '#d1d5db',
          textMuted: '#9ca3af',
        },
      },
      fontFamily: {
        display: ['Rajdhani', 'Inter', 'sans-serif'],
        body: ['Inter', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        panel: '0 0 0 1px rgba(56,189,248,0.15), 0 12px 32px rgba(0,0,0,0.45)',
      },
      backgroundImage: {
        grid: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
      },
      animation: {
        floatSlow: 'floatSlow 10s ease-in-out infinite',
        pulseGlow: 'pulseGlow 3s ease-in-out infinite',
        sweep: 'sweep 8s linear infinite',
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.45' },
          '50%': { opacity: '1' },
        },
        sweep: {
          '0%': { transform: 'translateX(-140%)' },
          '100%': { transform: 'translateX(140%)' },
        },
      },
    },
  },
  plugins: [],
}
