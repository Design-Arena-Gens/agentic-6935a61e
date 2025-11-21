import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        midnight: "#0b1026",
        accent: {
          50: "#f3f6ff",
          100: "#d4e0ff",
          200: "#aac4ff",
          300: "#7ea7ff",
          400: "#5288ff",
          500: "#2c6aff",
          600: "#1b52db",
          700: "#123eb0",
          800: "#0a2b82",
          900: "#061f60"
        }
      },
      fontFamily: {
        heading: ["var(--font-heading)"],
        body: ["var(--font-body)"]
      },
      backgroundImage: {
        "grid-radial":
          "radial-gradient(circle at center, rgba(82, 136, 255, 0.35) 0%, rgba(11, 16, 38, 0) 60%), linear-gradient(180deg, rgba(11, 16, 38, 0.45) 0%, rgba(11, 16, 38, 1) 100%)"
      }
    }
  },
  plugins: [require("@tailwindcss/forms")]
};

export default config;
