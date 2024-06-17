// Importer Image komponentet fra Next.js til håndtering af billeder
import Image from "next/image";
// Importer Link komponentet fra Next.js til navigation mellem sider
import Link from "next/link";
export default function Vip() {
  return (
    <Link href="/booking">
      <div className="flex justify-center">
        {/* Wrapper div for vip klassen med en hover effekt for skalering */}
        <div className="vip bg-indigo-800  text-center h-96 lg:h-[500px] xl:h-[500px]  lg:w-100 xl:w-100 whitespace-nowrap  rounded-3xl p-10 text-lg lg:text-2xl xl:text-3xl text-blue-500 grid grid-cols-1 hover:scale-105">
          {/* Div til at holde billedet */}
          <div className="m-auto">
            {/* Image komponent der viser et SVG billede med specifikke dimensioner */}
            <Image src="/img/starbbl.webp" width={100} height={100} alt="star shaped soapbubble on ticket" className="star" />
          </div>
          {/* En divider, muligvis en horisontal linje */}
          <div className="w-44 h-0.5 lg:w-80 xl:w-100 bg-lime-400 m-auto"></div>
          {/* Overskrift med specifik skrifttype og vægt */}
          <h2 className="mb-5 tracking-wide text-lime-300 lg:text-2xl xl:text-2xl font-bold">
            ADGANG ALLE
            <br /> FESTIVALENS DAGE
          </h2>

          {/* Paragraf med datoer og en tagline, også med specifik skrifttype og vægt */}
          <p className="text-lime-300 lg:text-xl xl:text-2xl font-extralight">
            1.-2.-3.- AUGUST
            <br /> WHATS NOT TO LOVE?
          </p>
          {/* Prisoverskrift med specifik skrifttype og vægt */}
          <h3 className="text-lime-300 lg:text-5xl xl:text-6xl font-extralight">1299 DKK</h3>
        </div>
      </div>
    </Link>
  );
}
