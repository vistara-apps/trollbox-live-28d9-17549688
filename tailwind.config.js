module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(var(--primary))',
        accent: 'hsl(var(--accent))',
        bg: 'hsl(var(--bg))',
        surface: 'hsl(var(--surface))',
        danger: 'hsl(var(--danger))',
        text: 'hsl(var(--text))',
        'text-muted': 'hsl(var(--text-muted))',
        'text-secondary': 'hsl(var(--text-secondary))',
        border: 'hsl(var(--border))',
        'border-light': 'hsl(var(--border-light))',
        shadow: 'hsl(var(--shadow))',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
        '3xl': '24px',
      },
      boxShadow: {
        'card': '0 4px 16px hsla(var(--shadow), 0.06), 0 2px 8px hsla(var(--shadow), 0.04)',
        'card-hover': '0 8px 32px hsla(var(--shadow), 0.12), 0 4px 16px hsla(var(--shadow), 0.08)',
        'focus': '0 0 0 3px hsla(var(--accent), 0.2)',
        'glow': '0 0 20px hsla(var(--primary), 0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'bounce-in': 'bounceIn 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '0.75rem' }],
      },
    },
  },
  plugins: [],
}
