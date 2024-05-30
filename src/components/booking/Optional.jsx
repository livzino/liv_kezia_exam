import React, { useState } from "react";

// Importerer ikoner fra Tabler Icons biblioteket
import { IconInfoCircle, IconMinus, IconPlus, IconTent, IconRecycle } from "@tabler/icons-react";

// Optional komponenten bruges til at vælge valgfrie tilføjelser som telte og grøn camping
export const Optional = ({ updateTents, twoPersonTents, threePersonTents, totalTickets, greenCamping, setGreenCamping, totalSelectedCapacity, setTotalSelectedCapacity }) => {
  return (
    // Flex container til at indeholde valgfrie tilføjelser
    <div className=" h-full flex flex-col justify-between">
      {/* Overskrift og ikon for valgfrie tilføjelser */}
      <div className="flex gap-2 items-center mt-4 md:mt-0">
        <IconTent color="#FD1995" size="60" />
        <h1 className="font-medium text-5xl " style={{ fontFamily: "Syncopate, sans-serif", fontWeight: 200 }}>
          OPTIONAL ADD-ONS
        </h1>
      </div>
      <div className="flex flex-col justify-evenly flex-grow">
        {/* Container til telte og grøn camping */}
        <div className="place-self-center items-center flex flex-col gap-12">
          {/* Container til telte */}
          <div className="flex flex-col gap-12 ">
            {/* Komponent til at vælge telte for to eller tre personer */}
            <TentOption tentType="two" tentPrice="299 DKK" tentCount={twoPersonTents} updateTents={updateTents} totalTickets={totalTickets} totalSelectedCapacity={totalSelectedCapacity} info="Tent for two ;)" />
            <TentOption tentType="three" tentPrice="399 DKK" tentCount={threePersonTents} updateTents={updateTents} totalTickets={totalTickets} totalSelectedCapacity={totalSelectedCapacity} info="Tent for three, or two if you want more space" />
          </div>
          {/* Komponent til at vælge grøn camping */}
          <GreenCampingOption greenCamping={greenCamping} setGreenCamping={setGreenCamping} />
        </div>
      </div>
    </div>
  );
};

// TentOption komponenten bruges til at vælge antallet af telte
const TentOption = ({ tentType, tentPrice, tentCount, updateTents, totalTickets, totalSelectedCapacity, info }) => (
  // Container til at vise information om telttypen og knapper til at justere antallet af telte
  <div className="flex items-center gap-5 justify-end">
    {/* Container til at vise telttypen og prisen */}
    <div className="font-medium text-end tooltip tooltip-top" data-tip={info}>
      <h2 className="text-rose-500 whitespace-nowrap" style={{ fontFamily: "Syncopate, sans-serif", fontWeight: 700 }}>
        {tentType.charAt(0).toUpperCase() + tentType.slice(1)} PERSON TENT
      </h2>
      <p className="text-white" style={{ fontFamily: "Syncopate, sans-serif", fontWeight: 200 }}>
        {tentPrice}
      </p>
    </div>
    {/* Container med knapper til at justere antallet af telte */}
    <div className="flex items-center w-32 justify-between font-medium">
      {/* Knappen til at mindske antallet af telte */}
      <button className="bg-neutral text-gray-100 font-medium text-base p-2 rounded-full w-fit  border-lime-500 border-2 hover:scale-105 hover:bg-indigo-900 hover:border-lime-500 transition-colors" onClick={() => updateTents(tentType, "decrease")}>
        <IconMinus color="#BBEE68" />
      </button>
      {/* Viser det aktuelle antal af telte */}
      <p>{tentCount}</p>
      {/* Knappen til at øge antallet af telte */}
      <button
        className={`font-medium text-base p-2 rounded-full w-fit border transition-colors ${totalSelectedCapacity + (tentType === "two" ? 2 : 3) > totalTickets ? "btn-disabled bg-indigo-900 border-gray-800 stroke-indigo-800" : " text-lime-500 border-lime-500 border-2  hover:scale-105 hover:bg-cyan-400 hover:border-lime-500 "}`}
        onClick={() => {
          const tentCapacity = tentType === "two" ? 2 : 3;
          if (totalSelectedCapacity + tentCapacity <= totalTickets) {
            updateTents(tentType, "increase");
          }
        }}
        disabled={totalSelectedCapacity + (tentType === "two" ? 2 : 3) > totalTickets}>
        <IconPlus color="#BBEE68" />
      </button>
    </div>
  </div>
);
// GreenCampingOption komponenten bruges til at vælge grøn camping
const GreenCampingOption = ({ greenCamping, setGreenCamping }) => (
  // Container til at vise valget for grøn camping
  <div className="flex flex-col items-center">
    {/* Overskrift og ikon for grøn camping */}
    <div className="font-medium text-center space-y-1 mb-8">
      <div className="flex gap-2 items-center mt-4 md:mt-0">
        <h2 className="text-primary text-xl md:text45xl font-bold" style={{ fontFamily: "Syncopate, sans-serif", fontWeight: 700 }}>
          GREEN CAMPING
        </h2>
        <IconTent color="#B3EE68" size="45" />
      </div>
    </div>
    {/* Container til at vælge grøn camping */}
    <div className="flex gap-2 items-center mb-8">
      {/* Infoikon for grøn camping */}
      <div className="tooltip tooltip-bottom" data-tip="Support the environment by choosing a green camping spot.">
        <IconInfoCircle color="#FD1995" size="30" />
      </div>
      {/* Viser prisen for grøn camping */}
      <p style={{ fontFamily: "Syncopate, sans-serif", fontWeight: 200 }}>249 DKK</p>
      {/* Checkbox til at vælge grøn camping */}
      <label htmlFor="toggle" className="flex items-center cursor-pointer ml-4">
        <input type="checkbox" id="toggle" className="sr-only peer" onChange={() => setGreenCamping(!greenCamping)} checked={greenCamping} />
        {/* Visuel repræsentation af checkbox */}
        <div className="block relative bg-lime-300 w-16 h-9 p-1 rounded-full before:absolute before:bg-indigo-900 before:w-7 before:h-7 before:p-1 before:rounded-full before:transition-all before:duration-500 before:left-1 peer-checked:before:left-8 peer-checked:before:bg-cyan-400 hover:scale-105"></div>
      </label>
    </div>
  </div>
);

export default Optional;
