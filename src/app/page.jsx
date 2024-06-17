"use client"; // Bruger klientindstillingen for dette modul
import Hero from "../components/Hero"; // Importér Hero-komponenten
import CountDown from "../components/CountDown"; // Importér CountDown-komponenten
import CampMap from "../components/CampMap"; // Importér CampMap-komponenten
import Title from "../components/Title"; // Importér Title-komponenten
import Ticket from "../components/Ticket"; // Importér Ticket-komponenten
import Vip from "../components/Vip"; // Importér Vip-komponenten
import Image from "next/image"; // Importér Image-komponenten fra Next.js
import Link from "next/link";
import { Html, Head, Main, NextScript } from "next/document";

// Funktionen Home repræsenterer hovedsiden for webstedet
export default function Home() {
  const targetDate = new Date("Jun 26, 2024").getTime(); // Definer måldatoen for nedtællingen
  return (
    <div>
      <Head>
        {/* Character, robots, and OG image */}
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta property="og:locale" content="en_US" />
        <meta name="author" content="Alamin Shaikh" />
        <meta property="og:image:width" content="920" />
        <meta property="og:image:height" content="470" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Site name and keywords */}
        <meta property="og:site_name" content="Developing Superior Software for Leading Businesses" />
        <meta name="keywords" content="JavaScript developer, TypeScript developer, Web developer" />
      </Head>
      <main>
        <div className="md:flex md:flex-row mb-8">
          <div className="md:w-1/2 md:h-full md:transition md:duration-300 md:ease-in-out">
            <Hero />
          </div>
          <div className="md:w-1/2  md:transition md:duration-300 md:ease-in-out">
            <CountDown targetDate={targetDate} />
          </div>
        </div>
        <Title title="TICKETS" /> {/* Vis titlen "TICKETS" */}
        <div className=" flex flex-col md:flex-row md:gap-60 md:justify-center md:items-center mx-4 mb-8">
          {/* Div til billetkomponenter */}
          <div>
            <h2 className="text-center text-indigo-800 text-3xl m-8 font-bold">
              {/* Overskrift for almindelige billetter */}
              REGULAR
            </h2>
            <Ticket /> {/* Vis Ticket-komponenten for almindelige billetter */}
          </div>
          <div>
            <h2 className="text-center text-indigo-800 text-3xl m-8 font-bold">
              {/* Overskrift for VIP-billetter */}
              VIP
            </h2>
            <Vip /> {/* Vis Vip-komponenten for VIP-billetter */}
          </div>
        </div>
        <Title title="MAP" /> {/* Vis titlen "MAP" */}
        <br />
        <CampMap /> {/* Vis CampMap-komponenten for festivaloversigten */}
        <br />
        <br />
        <br />
        <br />
      </main>
    </div>
  );
}
