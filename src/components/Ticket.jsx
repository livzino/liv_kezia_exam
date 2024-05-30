// Importer Image komponentet fra Next.js til håndtering af billeder
import Image from "next/image";
// Importer Link komponentet fra Next.js til navigation mellem sider
import Link from "next/link";

// Definer og eksporter Ticket komponentet som standard
export default function Ticket() {
  return (
    // Link komponent, der navigerer til booking siden når brugeren klikker
    <Link href="/booking">
      {/* Wrapper div for ticket klassen med en hover effekt for skalering */}
      <div className="ticket hover:scale-105">
        {/* Div til at holde billedet */}
        <div className="imgendag">
          {/* Image komponent der viser et SVG billede med specifikke dimensioner */}
          <Image src="./img/moonbbl.svg" width={100} height={100} alt="starbbl" className="moon" />
        </div>
        {/* En divider, muligvis en horisontal linje */}
        <div className="hrendags"></div>
        {/* Overskrift med specifik skrifttype og vægt */}
        <h2 className="endags" style={{ fontFamily: "Syncopate, sans-serif", fontWeight: 700 }}>
          ENDAGSBILLET
        </h2>

        {/* Paragraf med billetbeskrivelse og dato, også med specifik skrifttype og vægt */}
        <p style={{ fontFamily: "Syncopate, sans-serif", fontWeight: 200 }}>
          BILLETTEN GIVER
          <br /> ADGANG TORSDAG
          <br /> D 1.AUGUST
        </p>
        {/* Prisoverskrift med specifik skrifttype og vægt */}
        <h3 className="pris" style={{ fontFamily: "Syncopate, sans-serif", fontWeight: 200 }}>
          799 DKK
        </h3>
      </div>
    </Link>
  );
}
