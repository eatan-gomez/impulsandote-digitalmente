import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Impulsándote Digitalmente | Firma Tecnológica & Soluciones Digitales",
  description:
    "Firma tecnológica que ayuda a empresas y organizadores a destacar en el mundo digital: Páginas web de alto impacto, desarrollo de aplicaciones para optimizar procesos e invitaciones digitales interactivas para eventos.",
  keywords: [
    "Impulsándote digitalmente",
    "desarrollo web profesional",
    "diseño de páginas web",
    "desarrollo de aplicaciones a medida",
    "invitaciones digitales interactivas",
    "tecnología para eventos",
    "transformación digital",
    "software para empresas",
    "RSVP digital eventos",
  ],
  authors: [{ name: "Impulsándote Digitalmente" }],
  openGraph: {
    title: "Impulsándote Digitalmente | Firma Tecnológica",
    description:
      "Potencia tu marca, optimiza tus procesos y crea eventos inolvidables con tecnología de vanguardia y resultados tangibles.",
    url: "https://impulsandotedigitalmente.com",
    siteName: "Impulsándote Digitalmente",
    locale: "es_MX",
    type: "website",
  },
  icons: {
    icon: "/favicon-logo.png",
    shortcut: "/favicon.ico",
    apple: "/favicon-logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}>
      <body className="min-h-screen bg-[#050811] text-slate-100 font-sans selection:bg-cyan-500/20 selection:text-cyan-300 antialiased flex flex-col">
        {children}
      </body>
    </html>
  );
}
