/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mini: "350px",
    },
    extend: {
      backgroundImage: {
        'hack': "url('/assets/test.gif')"
      },
      fontFamily: {
        FiraCode: ['Fira Code', 'monospace'],
      }
    },
  },
  plugins: [],
}