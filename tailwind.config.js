/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "Inter", "Segoe UI", "Roboto", "Arial", "sans-serif"],
      },
      letterSpacing: {
        luxe: "0.14em",
      },
      boxShadow: {
        luxe: "0 20px 80px rgba(0,0,0,.55)",
        glow: "0 0 0 1px rgba(255,255,255,.06), 0 14px 60px rgba(0,0,0,.55)",
      },
      backgroundImage: {
        "grain": "radial-gradient(circle at 1px 1px, rgba(255,255,255,.06) 1px, transparent 0)",
      },
    },
  },
  plugins: [],
};
