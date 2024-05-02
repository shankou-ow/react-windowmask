import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'slide-right': 'slide-right 0.2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
        'slide-left': 'slide-left 0.2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
      },
      keyframes: {
        'slide-right': {
          '0%': {
            transform: 'translateX(-8rem)',
          },
          to: {
            transform: 'translateX(0)',
          },
        },
        'slide-left': {
          '0%': {
            transform: 'translateX(8rem)',
          },
          to: {
            transform: 'translateX(0)',
          },
        },
      },
    },
  },
  plugins: [],
};
export default config
