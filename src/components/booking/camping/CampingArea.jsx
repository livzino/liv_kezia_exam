import { useEffect, useRef, useState } from "react";
import styles from "./camping.css"; // Importér CSS-stilark
import React from "react";

// Funktionen CampingArea repræsenterer et enkelt campingområde i en liste
export default function CampingArea(props) {
  const { camp, selectedCamp } = props; // Destrukturer props for at få adgang til camp og selectedCamp
  const isActive = selectedCamp && camp.area === selectedCamp.area; // Tjek om det nuværende campingområde er det valgte
  const [isClicked, setIsClicked] = useState(false); // Tilstand til at holde styr på områdets klikstatus
  const divRef = useRef(null); // Ref til den ydre div for at muliggøre animation

  // Funktionen, der kaldes, når campingområdet klikkes på
  const handleClick = () => {
    setIsClicked(true); // Opdater klikstatus til true
    props.onClick(); // Kald den onClick-funktion, der er givet som prop
  };

  // Effekt til at lytte efter afslutningen af klikanimationen
  useEffect(() => {
    if (isClicked && divRef.current) {
      divRef.current.addEventListener("animationend", () => {
        setIsClicked(false); // Nulstil klikstatus når animationen er afsluttet
      });
    }
  }, [isClicked]); // Køres, når isClicked ændres

  // Returnerer JSX for det enkelte campingområde
  return (
    <div
      ref={divRef} // Reference til den ydre div
      className={`font-normal flex justify-between w-full border-2 border-lime-500 bg-indigo-900 rounded-lg mb-4 py-2 px-6 bg-opacity-20 hover:bg-opacity-60 hover:text-white hover:scale-105 hover:cursor-pointer transition-all ${isActive ? "active:bg-opacity-100 active:bg-indigo-900 text-white" : "text-white bg-opacity-100 bg-indigo-900"} ${isClicked ? "ani_scale" : ""} ${props.available === 0 ? "text-gray-600 bg-gray-800 border-gray-900" : "bg-gray-700 border-gray-800"}`}
      onClick={handleClick} // Klikhåndteringsfunktionen
    >
      <p style={{ fontFamily: "Syncopate, sans-serif", fontWeight: 700 }}>{props.campName}</p> {/* Vis campingområdets navn */}
      <p style={{ fontFamily: "Syncopate, sans-serif", fontWeight: 200 }}>
        {props.available} / {props.spots} {/* Vis antallet af tilgængelige pladser */}
      </p>
    </div>
  );
}
