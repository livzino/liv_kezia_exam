"use client";
// Importer Button komponentet fra en overordnet komponent mappe
import Button from "../components/Button";
import AreaOverview from "./area-overview/AreaOverview";

// Definerer og eksporterer Map komponentet som standard
export default function Map() {
  return (
    // Definerer en sektion med klassen "map_container"
    <section className=" map_container flex flex-wrap justify-between items-center p-8 md:p-4 md:px-2 lg:p-3 lg:px-1 xl:p-2 xl:px-1 mb-4 bg-opacity-55 bg-pink-600 w-full">
      <div className="flex-1 mx-4 md:mx-3 lg:mx-2 xl:mx-1  ">
        {/* Paragraf med beskrivelse af FooFest */}
        <p className="text-lg md:text-base lg:text-xl xl:text-xl mb-4 font-montserrat font-light">Welcome to FooFest, the dream destination for K-pop lovers! Immerse yourself in a vibrant world filled with the beats and vibes of your favorite idols. Camp in areas themed after top groups like BTS, BLACKPINK, and TWICE, each offering its own unique atmosphere. Enjoy spectacular performances on stages inspired by legends like BIGBANG and SHINee. Celebrate, connect with fellow fans, and make unforgettable memories at FooFest, where K-pop comes to life in the most magical way!</p>
        {/* Inkluderer en Button komponent med teksten "BOOK NOW" */}
        <Button text="BOOK NOW" />
      </div>
      {/* Div med klassen "img_container" til at holde AreaOverview komponentet */}
      <div class="bg-indigo-900 border-2 border-lime-400 rounded-3xl flex flex-wrap justify-center w-full mt-8 px-4 md:px-8 md:w-1/2  lg:p-12 lg:w-2/3  ">
        <AreaOverview />
      </div>
    </section>
  );
}
