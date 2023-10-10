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
      },
      screens: {
        "desktop": "!hover: none"
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const hoverStyles = {
        '@media (hover: hover)': {
          '.hover-bt:hover': {
            'background-color': 'rgba(100, 116, 139, 0.1)'
          },
          '.hover-bt-delete:hover': {
            'background-color': 'rgba(255, 0, 0, 0.1)'
          },
          '.hover-bt-primary:hover': {
            'background-color': 'rgb(30 58 138)'
          },
          '.hover-bt-secondary:hover': {
            "color": "white",
            'background-color': 'rgb(30 64 175)'
          },
        },
        '@media (prefers-color-scheme: dark)': {
          "@media (hover: hover)": {
            '.hover-bt-primary-dark:hover': {
              'background-color': 'rgb(59 130 246)',
            },
            '.hover-bt-secondary-dark:hover': {
              "color": "white",
              'background-color': 'rgb(59 130 246)'
            },
          }
        }
      };

      addUtilities(hoverStyles);
    },
  ],
}

