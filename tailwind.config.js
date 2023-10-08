/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        "500": "500px"
      },
      minWidth: {
        "240": "240px",
        "320": "320px"
      }
    },
  },
  plugins: [],
}

