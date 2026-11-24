import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Impulsándote Digitalmente: webs, aplicaciones e invitaciones digitales",
  description:
    "Firma tecnológica que ayuda a empresas y organizadores de eventos con páginas web para captar clientes, software a medida e invitaciones digitales interactivas.",
  openGraph: {
    title: "Impulsándote Digitalmente: webs, aplicaciones e invitaciones digitales",
    description:
      "Planes estratégicos con páginas web de alto impacto, aplicaciones para procesos e invitaciones digitales para eventos.",
    type: "website",
    locale: "es_MX",
    siteName: "Impulsándote Digitalmente",
  },
  twitter: {
    card: "summary_large_image",
    title: "Impulsándote Digitalmente: webs, aplicaciones e invitaciones digitales",
    description:
      "Páginas web para captar clientes, desarrollo de aplicaciones e invitaciones digitales para eventos.",
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
    <html
      lang="es"
      data-type="software"
      data-radius="soft"
      data-ground="sage"
      data-buttons="tonal"
      data-motion=""
      suppressHydrationWarning
    >
      <head>
        <meta name="site-kind" content="software" />
        <meta name="page-type" content="software" />
        <meta name="theme-color" content="#f6f7f6" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Funnel+Display:wght@400..700&family=Funnel+Sans:wght@400..600&family=DM+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        {/* eslint-disable-next-line @next/next/no-css-tags */}
        <link rel="stylesheet" href="/assets/system.css" />
        {/* eslint-disable-next-line @next/next/no-css-tags */}
        <link rel="stylesheet" href="/assets/ui/cards.css" />
        {/* eslint-disable-next-line @next/next/no-css-tags */}
        <link rel="stylesheet" href="/assets/ui/base.css" />
        {/* eslint-disable-next-line @next/next/no-css-tags */}
        <link rel="stylesheet" href="/assets/ui/stat/fragment.css" />
        {/* eslint-disable-next-line @next/next/no-css-tags */}
        <link rel="stylesheet" href="/assets/ui/toggles/fragment.css" />
        {/* eslint-disable-next-line @next/next/no-css-tags */}
        <link rel="stylesheet" href="/assets/ui/notify/fragment.css" />
        {/* eslint-disable-next-line @next/next/no-css-tags */}
        <link rel="stylesheet" href="/assets/ui/window/fragment.css" />
        {/* eslint-disable-next-line @next/next/no-css-tags */}
        <link rel="stylesheet" href="/assets/ui/checklist/fragment.css" />
        {/* eslint-disable-next-line @next/next/no-css-tags */}
        <link rel="stylesheet" href="/assets/diagrams/diagram.css" />
        {/* eslint-disable-next-line @next/next/no-css-tags */}
        <link rel="stylesheet" href="/assets/motion/motion.css" />
        {/* eslint-disable-next-line @next/next/no-css-tags */}
        <link rel="stylesheet" href="/assets/backgrounds/backgrounds.css" />
        {/* eslint-disable-next-line @next/next/no-css-tags */}
        <link rel="stylesheet" href="/assets/layout/layout.css" />
        {/* eslint-disable-next-line @next/next/no-css-tags */}
        <link rel="stylesheet" href="/assets/icons/icon.css" />
        {/* eslint-disable-next-line @next/next/no-css-tags */}
        <link rel="stylesheet" href="/brand.css" />
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('m-enter');setTimeout(function(){document.documentElement.classList.add('m-enter-done')},700);document.documentElement.classList.add('mo-js');setTimeout(function(){document.documentElement.classList.add('mo-safe')},2500);`,
          }}
        />
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src="/assets/backgrounds/backgrounds.js" />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
