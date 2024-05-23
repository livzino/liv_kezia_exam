// Importerer nødvendige moduler og stilarter
import styles from "./camping.css";
import React from "react";
import CampingArea from "./CampingArea";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid"; // Importerer uuid biblioteket for at generere unikke id'er

// Definerer hovedkomponenten Camping
export default function Camping(props) {
  // Definerer state for at holde styr på det valgte campingområde
  const [selectedCamping, setSelectedCamping] = useState({
    name: "",
    type: "Camping",
    id: "",
  });

  // Definerer state for at holde campingdata, der hentes fra API
  const [campingData, setCampingData] = useState([]); // Sørger for at initialisere som en tom array

  // useEffect hook for at hente data fra API når komponenten mountes
  useEffect(() => {
    async function fetchData() {
      try {
        // Henter data fra API
        const response = await fetch("https://tan-chipped-baboon.glitch.me/available-spots");
        const json = await response.json();
        // Opdaterer campingData state med den hentede data
        setCampingData(json);
      } catch (error) {
        console.error("Fejl ved hentning af data: ", error);
      }
    }
    // Kalder fetchData funktionen
    fetchData();
  }, []); // Tom array som afhængighed betyder, at denne effekt kun kører én gang efter den første render

  // Tilføjer unikke id'er til hver campingdata element ved hjælp af uuidv4
  const areas = Array.isArray(campingData)
    ? campingData.map((data) => {
        return { ...data, id: uuidv4() };
      })
    : [];

  // Logger areas til konsollen for debugging formål
  console.log(areas);

  // Returnerer JSX til at rendere camping områder
  return (
    <div className={styles.Camping}>
      {areas.map((area) => {
        return (
          // Render hver CampingArea komponent med nødvendige props
          <CampingArea
            key={area.id} // Nøgleattribut for at hjælpe React med at identificere elementer
            id={area.id} // Id for campingområdet
            area={area.area} // Navn på campingområdet
            spots={area.spots} // Antal pladser i campingområdet
            available={area.available} // Antal tilgængelige pladser
            selectedCamping={selectedCamping} // Nuværende valgte campingområde
            setSelectedCamping={setSelectedCamping} // Funktion til at opdatere det valgte campingområde
            products={props.products} // Produkter relateret til camping
            setProducts={props.setProducts} // Funktion til at opdatere produkter
          />
        );
      })}
    </div>
  );
}
