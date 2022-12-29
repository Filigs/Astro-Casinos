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
        // // text

        light: "#ffffff", // White
        dark: "#0f172a", // slate-900

        // // layout

        // Backgrounds

        bgLight: "#e2e8f0", // Light Background
        bgDark: "#0f172a", //darkmode fullycrypto
        bgContainer: "#ffffff", // light mode container
        bgContainerDark: "#1e293b", // dark mode container backgrounds

        // CTA

        cta: "#E76F51", // peach
        info: "#264653", // teal escuro
        alert: "#E9C46A", //amarelo

        // ctaLight: "#7900FF", // indigo(medium)
        // ctaDark: "#eab308", // yellow-500

        // Borders

        borderLight: "#cbd5e1", // slate-300
        borderDark: "#334155", // slate-700
        footer: "#262626", // neutral-900 bg footer

        // background colors for booleans

        success: "#2A9D8F", // teal
        danger: "#F4A261", // laranja

        // // Buttons & CTA

        // buttonLight: "#548CFF", // sky(darker)
        // buttonDark: "#0ea5e9", // sky-500

        // Button ring
        ringLight: "#7900FF", // indigo(medium)
        ringDark: "#7dd3fc", // sky-300

        // ::hover
        // hoverLight: "#0ea5e9", // sky-300
        // hoverDark: "#38bdf8", // sky-400
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
