import type { Metadata } from "next";
import { geist, geistMono, instrumentSerif } from "@/lib/fonts";
import { ThemeScript } from "@/components/ThemeScript";
import "./globals.css";

export const metadata: Metadata = {
  title: "thirtyseven — Visual AI workflows for iPad",
  description:
    "Wire up AI models on an infinite canvas. Run the whole pipeline with a tap. All on your iPad.",
  openGraph: {
    title: "thirtyseven — Visual AI workflows for iPad",
    description: "Wire up AI models on an infinite canvas. All on your iPad.",
    images: ["/og-image.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "thirtyseven — Visual AI workflows for iPad",
    description: "Wire up AI models on an infinite canvas. All on your iPad.",
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
      <body className="bg-bg text-fg font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
