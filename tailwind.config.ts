import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        surface: {
          DEFAULT: "hsl(var(--surface))",
          raised: "hsl(var(--surface-raised))",
        },
        border: {
          DEFAULT: "hsl(var(--border))",
          strong: "hsl(var(--border-strong))",
        },
        muted: "hsl(var(--muted))",
        accent: {
          DEFAULT: "hsl(var(--accent))",
          hover: "hsl(var(--accent-hover))",
          soft: "hsl(var(--accent-soft))",
          foreground: "hsl(var(--accent-foreground))",
        },
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "fade-in-up": "fadeInUp 0.7s ease-out",
        "slide-up": "slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
