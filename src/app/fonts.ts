import { Poppins } from "next/font/google";
import localFont from "next/font/local";

export const recoleta = localFont({
  src: [
    {
      path: "./Recoleta/thin.ttf",
      weight: "300",
      style: "thin",
    },
    {
      path: "./Recoleta/boldone.ttf",
      weight: "500",
      style: "boldone",
    },
    {
      path: "./Recoleta/semibold.ttf",
      weight: "500",
      style: "semibold",
    },
  ],
});
export const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
