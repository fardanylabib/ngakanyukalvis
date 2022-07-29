/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js,php}"],
  theme: {
    extend: {
      colors : {
        lightPurple : '#5429FF',
        lightGray : '#CBCCE8',
        darkBlack : '#344054',
        darkGrey : '#667085'
      },
      fontFamily : {
        montserrat : 'Montserrat',
        inter : 'Inter',
        Poppins : ["Poppins,sans-serif"]
      }
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg : "1124px",
        xl : "1124px",
        "2xl" : "1124px"
      },
    },
  },
  plugins: [],
}
