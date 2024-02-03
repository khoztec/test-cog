module.exports = {
  content: [
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        imagehero:
          "url('@/assets/image-hero.png')"
      },
      colors: {
        primary: '#FFB800',
        secondary: '#1F1F1F',
        caption: '#2D2D2D'
      },
    },
  },
  plugins: [],
}

