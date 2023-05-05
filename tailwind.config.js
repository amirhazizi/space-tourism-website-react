/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        clPrimary_1: "hsl(230,35%,7%)",
        clPrimary_2: "hsl(231,77%,90%)",
        clPrimary_3: "hsl(0,0%,100%)",
      },
      fontFamily: {
        bellefair: ["var(--font-bellefair)"],
        barlowCondensed: ["var(--font-barlow-condensed)"],
      },
    },
  },
  plugins: [],
}
