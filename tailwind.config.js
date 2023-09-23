/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx}"
  ],
  theme: {
    extend: {
        colors: {
          "primary": "#F7EDE8",
          "text-primary": "#CD4631",
          "aliceblue": "#EDF3F7",
          "lightblue": "#81ADC8",
          grey: "#4D4D4D",
          "light-gray": "#4D4D4D"
        }
    },
  },
  plugins: [],
}

