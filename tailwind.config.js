/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        gd: ['Glida Display'],
        gsmt: ["Gill sans mt"]
      },
      colors:{
        'mar': '#762023'
      }
    },
  },
  plugins: [],
}
