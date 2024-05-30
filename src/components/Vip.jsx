// Importer Image komponentet fra Next.js til håndtering af billeder
import Image from "next/image";
// Importer Link komponentet fra Next.js til navigation mellem sider
import Link from "next/link";

// Definer og eksporter Vip komponentet som standard
export default function Vip() {
  return (
    // Link komponent, der navigerer til booking siden når brugeren klikker
    <Link href="/booking">
      {/* Wrapper div for vip klassen med en hover effekt for skalering */}
      <div className="vip  hover:scale-105">
        {/* Div til at holde billedet */}
        <div className="imgv">
          {/* Image komponent der viser et SVG billede med specifikke dimensioner */}
          <Image src="./img/starbbl.svg" width={100} height={100} alt="starbbl" className="star" />
        </div>
        {/* En divider, muligvis en horisontal linje */}
        <div className="hrvip"></div>
        {/* Overskrift med specifik skrifttype og vægt */}
        <h2 className="fullweek" style={{ fontFamily: "Syncopate, sans-serif", fontWeight: 700 }}>
          ADGANG ALLE
          <br /> FESTIVALENS DAGE
        </h2>

        {/* Paragraf med datoer og en tagline, også med specifik skrifttype og vægt */}
        <p style={{ fontFamily: "Syncopate, sans-serif", fontWeight: 200 }}>
          1.-2.-3.- AUGUST
          <br /> WHATS NOT TO LOVE?
        </p>
        {/* Prisoverskrift med specifik skrifttype og vægt */}
        <h3 className="price" style={{ fontFamily: "Syncopate, sans-serif", fontWeight: 200 }}>
          1299 DKK
        </h3>
      </div>
    </Link>
  );
}
