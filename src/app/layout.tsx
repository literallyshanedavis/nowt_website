import type { Metadata } from "next";
import { frama, framaText } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "nowt. — iPad-first AI workflows",
  description:
    "Node-based AI creative workflows, built for iPad. Connect models, build pipelines, make something from nothing.",
  openGraph: {
    title: "nowt. — Start from nothing. Make something.",
    description: "Node-based AI creative workflows, built for iPad.",
    images: ["/og-image.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "nowt. — iPad-first AI workflows",
    description: "Node-based AI creative workflows, built for iPad.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${frama.variable} ${framaText.variable} antialiased`}
      style={{
        colorScheme: "light",
        "--font-sans-var": frama.style.fontFamily,
        "--font-body-var": framaText.style.fontFamily,
      } as React.CSSProperties}
    >
      <body className="relative min-h-screen bg-slate-bg text-parchment font-sans">
        {children}
      </body>
    </html>
  );
}
