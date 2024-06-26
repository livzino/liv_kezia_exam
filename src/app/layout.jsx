"use client"; // Bruger klientindstillingen for dette modul
import "./globals.css"; // Importér global CSS-stilfil

import Header from "../components/header/Header"; // Importér Header-komponenten
import Footer from "../components/Footer"; // Importér Footer-komponenten

/* export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}; */

// Funktionen RootLayout repræsenterer layoutet for rodniveauet af webstedet
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* HTML-racinelement med sprogindstilling */}
      <head>
        {/* Ikoner og manifestfiler til forskellige enheder og platforme */}
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" /> {/* Apple touch-ikon */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" /> {/* Favicon */}
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" /> {/* Favicon */}
        <link rel="manifest" href="/favicon/site.webmanifest" /> {/* Manifestfil for webstedet */}
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" /> {/* Maskikon til Safari */}
        {/* FONTE */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Syncopate:wght@400;700&display=swap" rel="stylesheet" />
        {/* Meta tags for tema farve og flise farve */}
        <meta name="msapplication-TileColor" content="#da532c" /> {/* MS-flis farve */}
        <meta name="theme-color" content="#ffffff" /> {/* Tema farve */}
      </head>
      <body className="font-syncopate">
        <Header aria-label="Site Header" /> {/* Vis Header-komponenten */}
        {children} {/* Vis børnekomponenterne, som er indeholdt i RootLayout */}
        <Footer aria-label="Site Footer" /> {/* Vis Footer-komponenten */}
      </body>
    </html>
  );
}
