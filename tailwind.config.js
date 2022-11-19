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
        alert: "#F4A261",
        danger: "#E76F51",
        info: "#264653",
      },
      witdth: {
        logo: "239",
      },
      height: {
        logo: "48",
      },
      fontSize: {
        navIcon: ["17px", "26px"],
      },
    },
    plugins: [require("flowbite/plugin")],
  },
};
