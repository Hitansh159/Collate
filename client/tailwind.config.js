module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      width:{
        '30p' : '30%',
        '60p' : '60%',
        '90p' : '90%'
      }, 
    },
  },
  variants: {
    extend: { 
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
  daisyui: {
    styled: true,
    themes: [
      'cmyk',
      'halloween',
      'dark',
      
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  }
}
