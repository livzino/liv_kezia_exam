import Hero from "../components/Hero"; // Importér Hero-komponenten
import CountDown from "../components/CountDown"; // Importér CountDown-komponenten
import CampMap from "../components/CampMap"; // Importér CampMap-komponenten
import Title from "../components/Title"; // Importér Title-komponenten
import Ticket from "../components/Ticket"; // Importér Ticket-komponenten
import Vip from "../components/Vip"; // Importér Vip-komponenten

export function generateMetadata() {
  return {
    title: "FooFest - The Ultimate Kpop Festival Experience",
    description: "Welcome to FooFest, the ultimate Kpop festival! Join us for an unforgettable celebration with live performances from top Kpop stars, exciting dance competitions, and immersive cultural experiences ",
  };
}

// Funktionen Home repræsenterer hovedsiden for webstedet
export default function Home() {
  const targetDate = new Date("Jun 26, 2024").getTime(); // Definer måldatoen for nedtællingen
  return (
    <>
      <header>
        <h1 class="visually-hidden">FooFest - The Ultimate Kpop Festival Experience</h1>
      </header>
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
    </>
  );
}
