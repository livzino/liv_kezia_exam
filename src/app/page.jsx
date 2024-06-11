"use client"; // Bruger klientindstillingen for dette modul
import Hero from "../components/Hero"; // Importér Hero-komponenten
import CountDown from "../components/CountDown"; // Importér CountDown-komponenten
import CampMap from "../components/CampMap"; // Importér CampMap-komponenten
import Title from "../components/Title"; // Importér Title-komponenten
import Ticket from "../components/Ticket"; // Importér Ticket-komponenten
import Vip from "../components/Vip"; // Importér Vip-komponenten
import Image from "next/image"; // Importér Image-komponenten fra Next.js

// Funktionen Home repræsenterer hovedsiden for webstedet
export default function Home() {
  const targetDate = new Date("Jun 26, 2024").getTime(); // Definer måldatoen for nedtællingen
  return (
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
      <div className="ticketflex flex flex-col md:flex-row md:justify-center md:items-center">
        {" "}
        {/* Div til billetkomponenter */}
        <div>
          <h2 className="ticketh" style={{ fontFamily: "Syncopate, sans-serif", fontWeight: 700 }}>
            {" "}
            {/* Overskrift for almindelige billetter */}
            REGULAR
          </h2>
          <Ticket /> {/* Vis Ticket-komponenten for almindelige billetter */}
        </div>
        <div>
          <h2 className="tickethv" style={{ fontFamily: "Syncopate, sans-serif", fontWeight: 700 }}>
            {" "}
            {/* Overskrift for VIP-billetter */}
            VIP
          </h2>
          <Vip /> {/* Vis Vip-komponenten for VIP-billetter */}
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <Title title="FESTIVAL OVERVIEW" /> {/* Vis titlen "FESTIVAL OVERVIEW" */}
      <br />
      <CampMap /> {/* Vis CampMap-komponenten for festivaloversigten */}
      <br />
      <br />
      <br />
      <br />
    </main>
  );
}
