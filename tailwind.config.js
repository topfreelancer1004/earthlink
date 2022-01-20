module.exports = {
  content: [
    '/src/stories/index.css',
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#24599C',
        'slate':'#F9FAFB'
      },
      height: {
        'fit': 'fit-content',
      }
    }
  },
  plugins: []
}
