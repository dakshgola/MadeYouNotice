/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0B0B0B",
        secondary: "#111111",
        lightSection: "#1a1a1a",
        textPrimary: "#FFFFFF",
        textSecondary: "#A0A0A0",
        accent1: "#00FFB2",
        accent2: "#3B82F6",
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      animation: {
        "noise": "noise 1s steps(2) infinite",
        "float": "float 20s ease-in-out infinite",
        "float-delayed": "float 20s ease-in-out 10s infinite",
      },
      keyframes: {
        noise: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-5%, -5%)" },
          "20%": { transform: "translate(-10%, 5%)" },
          "30%": { transform: "translate(5%, -10%)" },
          "40%": { transform: "translate(-5%, 15%)" },
          "50%": { transform: "translate(-10%, 5%)" },
          "60%": { transform: "translate(15%, 0)" },
          "70%": { transform: "translate(0, 15%)" },
          "80%": { transform: "translate(3%, 35%)" },
          "90%": { transform: "translate(-10%, 10%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0) scale(1)", opacity: "0.2" },
          "50%": { transform: "translateY(-100px) scale(1.1)", opacity: "0.4" },
        }
      }
    },
  },
  plugins: [],
};
