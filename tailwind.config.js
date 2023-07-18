/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
      Poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      fontSize: {
        h1: "32px",
        h2: "24px",
        h3: "18.72px",
        h4: "16px",
        h5: "13.28px",
        h6: "10.72 px",
        // Add more custom heading sizes if needed
      },
      colors: { primary: "#1d4ed8", secondary: "#15803d", accent: "#404040" },
    },
  },
  plugins: [],
};
