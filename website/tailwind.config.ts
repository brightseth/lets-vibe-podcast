import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Editorial color palette - NPR/Wirecutter/TED inspired
        background: '#FAFAFA',
        foreground: '#1A1A1A',
        muted: '#6B6B6B',
        border: '#E5E5E5',
        accent: '#C24B8C',      // Magenta from cover art
        'accent-warm': '#D4A574', // Copper from cover art
        surface: '#FFFFFF',
        'surface-dark': '#0A0A0A',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-source-serif)', 'Georgia', 'serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      fontSize: {
        // Editorial type scale
        'display': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'headline': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'title': ['1.75rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7' }],
        'body': ['1rem', { lineHeight: '1.7' }],
        'caption': ['0.875rem', { lineHeight: '1.5' }],
        'overline': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.1em' }],
      },
      spacing: {
        'section': '6rem',
        'content': '4rem',
      },
      maxWidth: {
        'article': '680px',
        'content': '1200px',
      },
    },
  },
  plugins: [],
} satisfies Config;
