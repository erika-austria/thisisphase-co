import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // Cream system
        cream: {
          DEFAULT: '#faf5ee',
          alt: '#f1e8da',
          page: '#fff9f1',
          deep: '#e8dec9',
        },
        // Ink system · warm editorial blacks
        ink: {
          DEFAULT: '#1a1410',
          soft: '#4a3f38',
          muted: '#6c6056',
        },
        // Navy system · manifesto blocks
        navy: {
          DEFAULT: '#2f4858',
          deep: '#1d2f3d',
        },
        // Rules
        rule: {
          DEFAULT: '#d9cdb8',
          soft: '#e8dec9',
        },
        // Pink system · brand accent
        pink: {
          DEFAULT: '#f086dc',
          soft: '#fbd7f1',
          wash: '#fce7f7',
          deep: '#c95cb0',
        },
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'Times New Roman', 'serif'],
        sans: ['var(--font-geist)', 'Inter Tight', 'Inter', 'Helvetica Neue', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        eyebrow: '0.18em',
        tightest: '-0.04em',
      },
      maxWidth: {
        content: '1240px',
        narrow: '920px',
        prose: '42rem',
      },
      fontSize: {
        '6xl': ['5rem', { lineHeight: '1.05', letterSpacing: '-0.025em' }],
        '5xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
        '4xl': ['2.75rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
      },
    },
  },
  plugins: [],
};

export default config;
