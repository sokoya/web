/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xxs: "370px",
      xs: "400px",
      sm: "600px",
      md: "950px",
      lg: "1200px",
      xl: "1500px",
    },
    extend: {
      colors: {
        primary1: "#373434",
        primary2: "#3362b0",
        primary3: "#3362B0",
        "primary3-light": "#3362B0B2",
        secondary1: "#3b3b3b",
        secondary2: "#F16436",
        secondary3: "#D7D4FE",
        accent1: "#01485E",
        accent2: "#0B8DB5",
        accent3: "#EEC21A",
        tertiary1: "#00BEE7",
        tertiary2: "#00AAE7",
        tertiary3: "#0082E7",
        tertiary4: "#005AE7",
        tertiary5: "#0028F0",
        error1: "#066E52",
        error2: "#066E33",
        error3: "#FF3D3D",
        error4: "#E00007",
        error5: "#FF050D",
        dark1: "#373434",
        headerBg: "#efefef"
      },
      screens: {
        bp1: "1000px",
        bp2: "900px",
        bp3: "500px",
        bp4: "1030px",
        bp5: "450px"
      },
      fontSize: {
        header: "3.5rem"
      }
      
    },
  },
  plugins: [],
};
