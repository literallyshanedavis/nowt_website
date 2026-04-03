import localFont from "next/font/local";

export const frama = localFont({
  src: [
    {
      path: "../../public/fonts/Frama/PPFrama-Extralight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/Frama/PPFrama-ExtralightItalic.otf",
      weight: "200",
      style: "italic",
    },
    {
      path: "../../public/fonts/Frama/PPFrama-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Frama/PPFrama-RegularItalic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/Frama/PPFrama-Black.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../public/fonts/Frama/PPFrama-BlackItalic.otf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-sans",
  display: "swap",
});

export const framaText = localFont({
  src: [
    {
      path: "../../public/fonts/Frama/PPFramaText-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Frama/PPFramaText-RegularItalic.otf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-body",
  display: "swap",
});
