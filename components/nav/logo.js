import lightLogo from "/public/logo.svg";
// import darkLogo from "/public/logoDark.svg";
import Image from "next/image";
import { useTheme } from "next-themes";

export default function NavLogo() {
  //   const { resolvedTheme } = useTheme();
  //   let src;

  //   switch (resolvedTheme) {
  //     case "light":
  //       src = lightLogo;
  //       break;
  //     case "dark":
  //       src = darkLogo;
  //       break;
  //     default:
  //       src = lightLogo;
  //       break;
  //   }

  return (
    <section className="mx-auto overflow-auto justify-center">
      <Image src={lightLogo} alt="Logo" priority="true" />
    </section>
  );
}
