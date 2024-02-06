/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
      screens: {
        '2xl': {'max': '1535px'},
        // => @media (max-width: 1535px) { ... }
  
        'xl': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }
  
        'lg': {'max': '1023px'},
        'lg1': {'max': '1065x'},
        
        // => @media (max-width: 1023px) { ... }
  
        'md1': {'max': '897px'},
        'md': {'max': '767px'},
        // => @media (max-width: 767px) { ... }
  
        'sm': {'max': '639px'},
        // => @media (max-width: 639px) { ... }
        'mob': {'max': '495px'},
        'mob1': {'max': '585px'},
        'mini1': {'max': '410px'},
        'mini':{'max': '340px'}
      },
  
    extend: {
      fontFamily: {
        gd: ["Glida Display"],
        gsmt: ["Gill sans mt"]
      },
      colors:{
        'mar': '#762023'
      },
      scale: {
        '70': '0.7',
        '85': '0.85',
        '80': '0.8',
        '65': '0.65',
        '60': '0.6',
      }
    },
  },
  plugins: [],
}