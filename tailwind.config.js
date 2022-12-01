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
        bgContainerDark: "#28313f", //container backgrounds
      },
      width: {
        navLogo: "239px",
        navIcon: "32px",
      },
      height: {
        navLogo: "48px",
        navIcon: "32px",
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
