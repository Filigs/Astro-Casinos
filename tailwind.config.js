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
        bgLight: "#f3f4f6", // Light Background
        dark: "#111827", // grey-900
        success: "#2A9D8F", // teal
        alert: "#E9C46A", //amarelo
        danger: "#F4A261", // laranja
        cta: "#E76F51", // peach
        info: "#264653", // teal escuro
        bgDark: "#27272a", //darkmode fullycrypto
        bgContainerDark: "#27272a", //container backgrounds
        burgerHover: "#343078",
        textAreaLight: "#f4f4f5", // bg <textarea> light
        textAreaDark: "#3f3f46", // bg <textarea> dark
        footer: "#262626", // neutral-900 bg footer
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
        mobile: "850px",
      },
    },
    plugins: [require("flowbite/plugin"), require("@tailwindcss/forms")],
  },
};
