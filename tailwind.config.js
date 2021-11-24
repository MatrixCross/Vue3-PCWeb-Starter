module.exports = {
  mode: 'jit',
  purge: {
    enable: process.env.NODE_ENV === 'production',
    content: ['./index.html', './src/**/*.{vue,ts,tsx}'],
  },
  theme: {
    extend: {
      screens: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        '2xl': '1600px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
