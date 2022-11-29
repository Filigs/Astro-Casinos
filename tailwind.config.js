import("tailwindcss").Config;

module.exports = {
  darkMode: "class",
  content: [
    "./pages/**.{js,ts,jsx,tsx}",
    "./components/**.{js,ts,jsx,tsx}",
    "./components/**/**.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        light: "#ffffff", // White
        dark: "#111827", // grey-900
        success: "#2A9D8F",
        alert: "#E9C46A",
        danger: "#F4A261",
        cta: "#E76F51",
        info: "#264653",
        bgDark: "#121923", //darkmode fullycrypto
      },
      width: {
        navLogo: "239",
        navIcon: "1em",
      },
      height: {
        navLogo: "48",
        navIcon: "1em",
      },
      fontSize: {
        navIcon: ["17px", "26px"],
      },
      screens: {
        xs: "475px",
      },
    },
    plugins: [require("flowbite/plugin")],
  },
};
