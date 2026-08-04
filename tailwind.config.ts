import type { Config } from "tailwindcss";
import { config as businessConfig } from "./src/config";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],

  theme: {
    extend: {
      colors: {
        background: businessConfig.theme.colors.background,
        surface: businessConfig.theme.colors.surface,
        primary: businessConfig.theme.colors.primary,
        secondary: businessConfig.theme.colors.secondary,
        text: businessConfig.theme.colors.text,
        muted: businessConfig.theme.colors.muted,
        border: businessConfig.theme.colors.border,
        "surface-alt": businessConfig.theme.colors.surfaceAlt,
        "accent-glow": businessConfig.theme.colors.accentGlow
      },
      fontFamily: {
        display: ["Syne", "Inter", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        'glow': '0 0 40px -10px rgba(79, 142, 247, 0.4)',
        'glow-strong': '0 0 60px -15px rgba(0, 212, 255, 0.5)',
        'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', filter: 'brightness(1)' },
          '50%': { opacity: '1', filter: 'brightness(1.2)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        }
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, #1B2430 1px, transparent 1px), linear-gradient(to bottom, #1B2430 1px, transparent 1px)",
      }
    }
  },

  plugins: []
};

export default config;
