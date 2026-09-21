import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap"
});

export const metadata: Metadata = {
  title: "JTCodex | Diseño y Desarrollo de Páginas Web",
  description:
    "Diseño y desarrollo de páginas web modernas, rápidas y adaptables para negocios, emprendedores y profesionales en México.",
  applicationName: "JTCodex",
  authors: [{ name: "JTCodex" }],
  keywords: [
    "diseño web en México",
    "desarrollo de páginas web",
    "landing pages",
    "sitios para negocios",
    "JTCodex"
  ],
  metadataBase: new URL("https://jtcodex.com"),
  openGraph: {
    title: "JTCodex | Diseño y Desarrollo de Páginas Web",
    description:
      "Páginas web modernas, rápidas y funcionales para negocios, emprendedores y profesionales en México.",
    url: "https://jtcodex.com",
    siteName: "JTCodex",
    locale: "es_MX",
    type: "website"
  },
  icons: {
    icon: "/favicon.svg"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#06111B"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-MX" className="scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>{children}</body>
    </html>
  );
}
