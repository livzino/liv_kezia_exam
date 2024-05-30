// Importer Button komponentet fra en overordnet komponent mappe
import Button from "../components/Button";
// Importer AreaOverview komponentet fra en undermappe
import AreaOverview from "./area-overview/AreaOverview";

// Definerer og eksporterer Map komponentet som standard
export default function Map() {
  return (
    // Definerer en sektion med klassen "map_container"
    <section className="map_container">
      <div>
        {/* Paragraf med beskrivelse af FooFest */}
        <p>Welcome to FooFest, the dream destination for K-pop lovers! Immerse yourself in a vibrant world filled with the beats and vibes of your favorite idols. Camp in areas themed after top groups like BTS, BLACKPINK, and TWICE, each offering its own unique atmosphere. Enjoy spectacular performances on stages inspired by legends like BIGBANG and SHINee. Celebrate, connect with fellow fans, and make unforgettable memories at FooFest, where K-pop comes to life in the most magical way!</p>
        {/* Inkluderer en Button komponent med teksten "BOOK NOW" */}
        <Button text="BOOK NOW" />
      </div>
      {/* Div med klassen "img_container" til at holde AreaOverview komponentet */}
      <div className="img_container">
        {/* Inkluderer AreaOverview komponentet */}
        <AreaOverview />
      </div>
    </section>
  );
}
