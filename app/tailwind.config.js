const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.js',
    './public/index.html'
  ],
  theme: {
    screens: {
      xs: '380px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        primary: '#3498db',
        secondary: '#ffffff',
        accent: '#2ecc71',
        background: '#f2f2f2',
        text: '#333333',
        highlight: '#f39c12'
      }
    }
  }
  // ...
}
