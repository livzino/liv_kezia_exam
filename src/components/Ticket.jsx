// Importer Image komponentet fra Next.js til håndtering af billeder
import Image from "next/image";
// Importer Link komponentet fra Next.js til navigation mellem sider
import Link from "next/link";

export default function Ticket() {
  return (
    <Link href="/booking">
      <div className="flex justify-center">
        {/* Wrapper div for ticket klassen med en hover effekt for skalering */}
        <div className="bg-indigo-800 text-center h-96 lg:h-[500px] xl:h-[500px]  whitespace-nowrap border-4 border-cyan-400 rounded-3xl p-10 text-lg lg:text-2xl xl:text-3xl text-blue-500 grid grid-cols-1 hover:scale-105">
          {/* Div til at holde billedet */}
          <div className="m-auto">
            {/* Image komponent der viser et SVG billede med specifikke dimensioner */}
            <Image src="/./img/moonbbl.webp" width={100} height={100} alt="moonbbl" className="moon" />
          </div>
          {/* En divider, muligvis en horisontal linje */}
          <div className="w-44 h-0.5 lg:w-80 xl:w-100 bg-cyan-400 m-auto "></div>
          {/* Overskrift med specifik skrifttype og vægt */}
          <h2 className="font-bold mb-5 tracking-wide lg:text-3xl xl:text-2xl" style={{ fontFamily: "Syncopate, sans-serif", fontWeight: 700 }}>
            ENDAGSBILLET
          </h2>

          {/* Paragraf med billetbeskrivelse og dato, også med specifik skrifttype og vægt */}
          <p className="lg:text-xl xl:text-2xl" style={{ fontFamily: "Syncopate, sans-serif", fontWeight: 200 }}>
            BILLETTEN GIVER
            <br /> ADGANG TORSDAG
            <br /> D 1.AUGUST
          </p>
          {/* Prisoverskrift med specifik skrifttype og vægt */}
          <h3 className="text-cyan-400 lg:text-5xl xl:text-6xl" style={{ fontFamily: "Syncopate, sans-serif", fontWeight: 200 }}>
            799 DKK
          </h3>
        </div>
      </div>
    </Link>
  );
}
