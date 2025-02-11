/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      supermini: "150px",
      mini: "350px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
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
  plugins: [require('@tailwindcss/typography')],
}