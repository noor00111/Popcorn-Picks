/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        backgroundColor: "var(--body_background)",
        bodyColor: "var(--body_color)",
        colorMuted: "var(--body_color_muted)",
        toggleBg: "var(--toggle-bg)",
        bgForm: "var(--form-bg)",
      },
      fontFamily: {
        titleFont: ["Rancho", "cursive"],
        paraFont: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

