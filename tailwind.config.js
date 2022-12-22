import("tailwindcss").Config;

module.exports = {
  darkMode: "class",
  content: [
    "./pages/**.{js,ts,jsx,tsx}",
    "./components/**.{js,ts,jsx,tsx}",
    "./components/**/**.{js,ts,jsx,tsx}",
    "./components/**/**/**.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        light: "#ffffff", // White
        bgLight: "#e2e8f0", // Light Background
        dark: "#0f172a", // slate-900
        success: "#2A9D8F", // teal
        alert: "#E9C46A", //amarelo
        danger: "#F4A261", // laranja
        cta: "#E76F51", // peach
        info: "#264653", // teal escuro
        bgDark: "#0f172a", //darkmode fullycrypto
        bgContainer: "#ffffff", // light mode container
        bgContainerDark: "#1e293b", // dark mode container backgrounds
        borderLight: "#cbd5e1", // slate-300
        borderDark: "#334155", // slate-700
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
