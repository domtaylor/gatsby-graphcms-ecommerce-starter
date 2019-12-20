const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#fff',
      primary: '#5828e8',
      gainsboro: 'rgba(0, 0, 0, 0.1)',
      lightgray: 'rgba(0, 0, 0, 0.5)',
      slategray: '#101b42',
      red: '#DC143C',
    },
    fontFamily: {
      sans: ['Inter', ...fontFamily.sans],
    },
    extend: {
      boxShadow: {
        default: '0 0.625rem 2.5rem 0 rgba(18,18,18,.1)',
      },
      spacing: {
        96: '24rem',
      },
      margin: {
        '-96': '-24rem',
      },
    },
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: [],
};
