module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'kumbh-sans': ['Kumbh Sans', 'sans-serif'],
        'gordita': ['Gordita', 'sans-serif'],
        'gordita-medium': ['Gordita Medium', 'sans-serif'],
        'gordita-bold': ['Gordita Bold', 'sans-serif'],
        'gordita-light': ['Gordita Light', 'sans-serif'],
      },
      boxShadow: {
        'employee-box': '0px 4px 4px rgba(0, 0, 0, 0.25)'
      }
    },
  },
  plugins: [],
}
