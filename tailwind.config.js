
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(340, 72%, 50%)',
        accent: 'hsl(250, 72%, 60%)',
        bg: 'hsl(0, 0%, 98%)',
        surface: 'hsl(0, 0%, 100%)',
        danger: 'hsl(0, 72%, 50%)',
        text: 'hsl(0, 0%, 10%)',
        'text-muted': 'hsl(0, 0%, 50%)',
        border: 'hsl(0, 0%, 90%)',
      },
      spacing: {
        sm: '8px',
        md: '16px',
        lg: '24px',
      },
      borderRadius: {
        sm: '8px',
        md: '12px',
        lg: '16px',
      },
      boxShadow: {
        card: '0 4px 16px hsla(0, 0%, 0%, 0.06), 0 2px 8px hsla(0, 0%, 0%, 0.04)',
        focus: '0 0 0 3px hsla(250, 72%, 60%, 0.2)',
      },
      animation: {
        'fade-in': 'fadeIn 0.2s ease-out',
        'slide-up': 'slideUp 0.2s ease-out',
        'bounce-in': 'bounceIn 0.4s ease-out',
      },
    },
  },
  plugins: [],
}
