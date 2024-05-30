// Importer React biblioteket, som er nødvendigt for at bruge JSX og skabe React komponenter
import React from "react";

// Definer og eksporter Title komponentet som standard
export default function Title(props) {
  return (
    // En div med klassen "titlecontainer" og margin-top (mt) styling for medium skærmstørrelser (md)
    <div className="titlecontainer md:mt-[50px]">
      {/* En div der viser teksten fra props.title med specifik skrifttype og vægt, samt klassen "titletxt" */}
      <div style={{ fontFamily: "Syncopate, sans-serif", fontWeight: 700 }} className="titletxt">
        {props.title} {/* Indsæt titlen fra props */}
      </div>
      {/* En div med klassen "titleline", muligvis en dekorativ linje under titlen */}
      <div className="titleline"></div>
    </div>
  );
}
