// module.exports = {
//     theme: {
//       extend: {
//         textAlign: {
//           justify: 'justify',
//         },
//       },
//     },
//   }
  

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textAlign: {
        justify: 'justify',
      },
    },
  },
  plugins: [],
}
