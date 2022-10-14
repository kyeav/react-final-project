/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#1C2431",
        darkest: "#0B1523",
        accent: "#10C4BB",
        darker: "#181F2A",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp", "@tailwindcss/aspect-ratio")],
};
