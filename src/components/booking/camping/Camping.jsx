import styles from "./camping.css"; // Importér CSS-stilark
import React, { useState, useEffect } from "react"; // Importér React-hooks
import CampingArea from "./CampingArea"; // Importér CampingArea-komponenten
import { IconFlag } from "@tabler/icons-react"; // Importér IconFlag-komponenten fra Tabler Icons

import { v4 as uuidv4 } from "uuid"; // Importér v4-funktionen fra uuid-modulet
import { url } from "../../../../config"; // Importér URL-variablen fra config-modulet

// Funktionen Camping repræsenterer et campingområde og dens pladser
export default function Camping({ totalTickets, spots, setSelectedSpot, setSelectedCamp, selectedCamp, mapHandleModal, reservationId, setReservationId }) {
  // Funktionen til at vælge en campingplads baseret på området
  function chooseSpot(camp) {
    if (!spots) {
      // Hvis spots ikke er tilgængelige, log en fejl og returner
      console.error("Spots data is not available");
      return;
    }

    const selectedSpotDetails = spots.find((spot) => spot.area === camp.area); // Find detaljer om den valgte plads

    // Hvis der allerede er en reservation, skal funktionen afsluttes
    if (reservationId) {
      return;
    }
    // Hvis der ikke er nogen tilgængelige pladser eller antallet af billetter overstiger de tilgængelige pladser, nulstil valgt spot og camp
    else if (!selectedSpotDetails || selectedSpotDetails.available === 0 || totalTickets > selectedSpotDetails.available) {
      setSelectedSpot(null);
      setSelectedCamp(null);
    }
    // Ellers vælg det valgte område som det valgte spot og generer en ny reservations-ID
    else {
      setSelectedSpot(camp.area);
      const newReservationId = uuidv4(); // Generer en ny reservations-ID
      setReservationId(newReservationId); // Indstil den nye reservations-ID
    }
  }

  const [dataCamps, setDataCamps] = useState(null); // Tilstand til at gemme campingområder

  // Effekt til at hente data om campingområder
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resCamps = await fetch(`${url}/available-spots`); // Hent tilgængelige campingområder fra serveren
        const dataCamps = await resCamps.json(); // Konverter svar til JSON-format
        setDataCamps(dataCamps); // Indstil campingområdedata
      } catch (error) {
        console.error("Error fetching camps:", error); // Håndter fejl under hentning af campingområder
      }
    };

    fetchData(); // Kald funktionen til at hente data om campingområder
  }, []); // Køres kun en gang efter den første renderering

  // Effekt til at logge spots-data ved ændring
  useEffect(() => {
    console.log("Spots data: ", spots);
  }, [spots]); // Køres hver gang spots ændres

  // Returnerer JSX for Camping-komponenten
  return (
    <div className="h-full flex flex-col ">
      <div className="flex gap-2 items-center mt-4 md:mt-0 mb-10">
        <IconFlag color="#FD1995" size="60" alt="camp flag icon" /> {/* Vis flag-ikon */}
        <h1 className="font-medium text-5xl ">CAMPS {/* Vis overskrift for campingområder */}</h1>
      </div>

      <div className={styles.Camping}>
        {/* Map gennem campingområdedata og generer CampingArea-komponenter for hvert område */}
        {dataCamps &&
          dataCamps.map((camp) => (
            <CampingArea
              key={camp.area} // Unik nøgle for hvert campingområde
              campName={camp.area} // Navn på campingområde
              available={camp.available} // Antal tilgængelige pladser
              spots={camp.spots} // Samlet antal pladser
              camp={camp} // Data om campingområde
              selectedCamp={selectedCamp} // Det valgte campingområde
              onClick={() => {
                // Klikhåndteringsfunktion for campingområde
                if (reservationId) {
                  // Hvis der allerede er en reservation, vis modal
                  mapHandleModal();
                } else {
                  // Ellers opdater det valgte campingområde og vælg en plads
                  setSelectedCamp(camp);
                  chooseSpot(camp); // Kald chooseSpot-funktionen her
                }
              }}
              totalTickets={totalTickets} // Samlet antal billetter
              className="aspect-[3/2] w-full md:col-start-2 md:col-end-4 md:aspect-[2.25/1] rounded-2xl overflow-hidden border border-gray-800"
              mapHandleModal={mapHandleModal} // Funktion til at håndtere modal i kortet
              reservationId={reservationId} // Den aktuelle reservations-ID
            />
          ))}
      </div>
    </div>
  );
}
