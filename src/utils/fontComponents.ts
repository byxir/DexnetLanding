import localFont from "next/font/local";

export const exo = localFont({
  src: [
    {
      path: "../../public/fonts/Exo2-VariableFont_wght.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/Exo2-VariableFont_wght.ttf",
      weight: "500",
    },
    {
      path: "../../public/fonts/Exo2-VariableFont_wght.ttf",
      weight: "700",
    },
  ],
  variable: "--font-exo",
});
