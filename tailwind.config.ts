import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        gospel: {
          canvas: "var(--canvas)",
          surface: "var(--surface)",
          "surface-raised": "var(--surface-raised)",
          "surface-soft": "var(--surface-soft)",
          border: "var(--border)",
          "border-strong": "var(--border-strong)",
          text: "var(--text)",
          muted: "var(--muted)",
          "muted-2": "var(--muted-2)",
          gold: "var(--gold)",
          "gold-light": "var(--gold-light)",
          "gold-soft": "var(--gold-soft)",
          amber: "var(--amber)",
          blue: "var(--blue)",
          crimson: "var(--crimson)",
          emerald: "var(--emerald)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "sans-serif"],
        serif: ["var(--font-display)", "var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      borderRadius: {
        app: "16px",
        "app-lg": "24px",
        "app-xl": "32px",
      },
      boxShadow: {
        "soft-card": "0 2px 10px -2px rgba(0, 0, 0, 0.04), 0 12px 30px -10px rgba(0, 0, 0, 0.07)",
        "hover-card": "0 20px 40px -15px rgba(0, 0, 0, 0.12), 0 0 25px -5px rgba(245, 158, 11, 0.1)",
        "glow-gold": "0 0 50px -10px rgba(245, 158, 11, 0.25)",
        "glow-blue": "0 0 50px -10px rgba(56, 189, 248, 0.2)",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseSlow: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "pulse-slow": "pulseSlow 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
