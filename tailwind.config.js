/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // primaryColor: "#0e2c3d",
        secondaryColor: "#0e2c3d",
        hover: "#f75e05",
        backgroundColor: "#f0f0f6",
        red: "#ff0000"
      }
    },
  },
  plugins: [],
}

// The "hover" color used here is my brand primary color
// secondaryColor: "#091d28",