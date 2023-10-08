/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        "500": "500px"
      },
      minWidth: {
        "240": "240px",
        "320": "320px"
      },
      gridTemplateColumns: {
        "details": "repeat(4, 1fr) max-content"
      }
    },
  },
  plugins: [],
}

