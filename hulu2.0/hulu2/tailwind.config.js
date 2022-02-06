module.exports = {
  mode: 'jit',
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "3xl": "2000px",
      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}




// module.exports = {
//   mode: 'jit',
//   purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
//   darkMode: false,
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
