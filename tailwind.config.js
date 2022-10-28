/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary1":"rgba(22, 42, 65, 1)",
        "P2":"rgba(163, 203, 56, 1)",
        "P3":"rgba(250, 152, 58, 1)",
        "P4":"rgba(16, 172, 132, 1)",
        "heading1":"rgba(42, 44, 48, 1)",
        "bg1":"rgba(248, 248, 251, 1)"
      },
      fontSize: {
        "sm": '14px',
        "base":'16px',
        "lg":'18px',
        "xl":'20px',
        "h1":"50px",
        "h2":"38px",
        "h5":"24px"
      }
    },
  },
  plugins: [],
}
