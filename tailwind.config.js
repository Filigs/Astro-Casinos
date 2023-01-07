import("tailwindcss").Config;

module.exports = {
  darkMode: "class",
  content: [
    "./pages/**.{js,ts,jsx,tsx}",
    "./components/**.{js,ts,jsx,tsx}",
    "./components/**/**.{js,ts,jsx,tsx}",
    "./components/**/**/**.{js,ts,jsx,tsx}",
    "./components/Users/**/**/**.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        // // //  Light mode https://coolors.co/ffffff-f7f8fa-f3f4f6-f08700
        cta: "#F08700",
        ctaHover: "#FFC170",
        fillerDark: "#F3F4F6",
        fillerMedium: "#F7F8FA",
        light: "#FFFFFF",
        // !palete
        // // text

        dark: "#0f172a", // slate-900

        // // layout

        // Backgrounds

        bgLight: "#ECE8DD", // Light Background
        bgDark: "#0f172a", //darkmode fullycrypto

        bgSecondary: "#FFFFFF", // light mode container

        bgSecondaryDark: "#1e293b", // dark mode container backgrounds

        placeholderColor: "#64748b", // placeholder color

        // Borders

        borderDark: "#334155", // slate-700
        footer: "#0c4a6e", // slate-800 bg footer

        // background colors for booleans

        success: "#56B389", // green
        danger: "#EB5E55", // red

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
