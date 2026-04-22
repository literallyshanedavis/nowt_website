import type { Metadata } from "next";
import { geist, geistMono, instrumentSerif } from "@/lib/fonts";
import { ThemeScript } from "@/components/ThemeScript";
import "./globals.css";

export const metadata: Metadata = {
  title: "thirtyseven — Visual AI workflows on an infinite canvas",
  description:
    "Visual AI workflows on an infinite canvas. Pan a thousand nodes, wire any model to any input, run any branch.",
  openGraph: {
    title: "thirtyseven — Visual AI workflows on an infinite canvas",
    description: "Visual AI workflows on an infinite canvas.",
    images: ["/og-image.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "thirtyseven — Visual AI workflows on an infinite canvas",
    description: "Visual AI workflows on an infinite canvas.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable} ${instrumentSerif.variable}`}
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
      </head>
      <body className="dotfield bg-bg text-fg font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
