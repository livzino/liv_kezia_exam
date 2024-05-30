import { IconCreditCard } from "@tabler/icons-react"; // Importerer ikonet for kreditkort fra Tabler Icons
import React, { useEffect, useState } from "react"; // Importerer React og nødvendige hooks fra React
import Cards from "react-credit-cards-2"; // Importerer komponenten Cards fra react-credit-cards-2
import "react-credit-cards-2/dist/es/styles-compiled.css"; // Importerer CSS-styling til Cards-komponenten

const Payment = ({ email, setEmail, termsAccepted, setTermsAccepted }) => {
  // Funktionen Payment er en React-funktionel komponent, som modtager email, setEmail, termsAccepted og setTermsAccepted som props
  const [state, setState] = useState({
    // Bruger useState-hook til at oprette et state-objekt med initialværdier
    number: "", // Kreditkortnummer
    expiry: "", // Udløbsdato
    cvc: "", // CVC-kode
    name: "", // Navn på kortet
    focus: "", // Fokusstatus for inputfelterne
  });

  const handleInputChange = (evt) => {
    // Funktion til at håndtere ændringer i inputfelterne
    const { name, value } = evt.target; // Destrukturerer navn og værdi fra inputfeltet

    let newValue = value; // Opretter en variabel til at gemme den nye værdi

    // Forhindrer ikke-numerisk input for kortnummer, cvc og udløbsdato
    if (name === "number" || name === "cvc" || name === "expiry") {
      newValue = value.replace(/\D/g, ""); // Fjerner alle ikke-numeriske tegn fra værdien
    }

    // Forhindrer ikke-alfabetisk input for navn
    if (name === "name") {
      newValue = value.replace(/[^a-zA-Z ]/g, ""); // Fjerner alle tegn undtagen bogstaver og mellemrum fra værdien
    }

    setState((prev) => ({ ...prev, [name]: newValue })); // Opdaterer state med den nye værdi
  };

  const handleInputFocus = (evt) => {
    // Funktion til at håndtere fokusændringer i inputfelterne
    setState((prev) => ({ ...prev, focus: evt.target.name })); // Opdaterer state med navnet på inputfeltet, der har fokus
  };

  useEffect(() => {
    // Effekt-hook til at logge state-ændringer
    console.log(state); // Logger state-objektet, når det ændres
  }, [state]); // Køres kun når state-objektet ændres

  return (
    <div className=" h-full flex flex-col justify-between w-full">
      {/* Container til betalingskomponenten */}
      <div className="flex gap-2 items-center mt-4 md:mt-0 mb-4 md:mb-0">
        {/* Overskrift til betalingssiden */}
        <IconCreditCard /> {/* Viser ikonet for kreditkort */}
        <h1 className="font-medium text-lg">Payment</h1> {/* Overskrift for betalingssiden */}
      </div>
      <div className="flex flex-col justify-evenly flex-grow">
        {/* Container til kortinformation og betalingsformular */}
        <div className="flex flex-col items-center gap-8 ">
          {/* Container til kortvisning og betalingsformular */}
          <Cards number={state.number} expiry={state.expiry} cvc={state.cvc} name={state.name} focused={state.focus} /> {/* Viser kortvisningen baseret på state-objektet */}
          <form className=" flex flex-col gap-3 justify-center max-w-sm w-full">
            {/* Betalingsformular */}
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered input-sm border-2 border-indigo-900 bg-indigo-900 bg-opacity-50 rounded-lg mb-4 py-0.5 px-4  w-full hover:scale-105 focus:outline-none focus:border-lime-500 focus:ring-1 focus:ring-lime-500 invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-rose-500 focus:invalid:ring-rose-500"
              value={state.name}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              required
            />
            {/* Inputfelt til kortindehaverens navn */}
            <input type="tel" pattern="\d{4} \d{4} \d{4} \d{4}" name="number" placeholder="Card Number" className="input input-bordered input-sm border-2 border-indigo-900 bg-indigo-900 bg-opacity-50 rounded-lg mb-4 py-0.5px-6  w-full hover:scale-105 focus:outline-none focus:border-lime-500 focus:ring-1 focus:ring-lime-500 " value={state.number} onChange={handleInputChange} onFocus={handleInputFocus} maxLength="16" required /> {/* Inputfelt til kortnummer */}
            <div className="grid grid-cols-3 gap-3">
              {/* Grid-container til udløbsdato og CVC */}
              <input type="tel" pattern="\d{2}\/\d{2}" name="expiry" placeholder="MM/YY" className="input input-bordered input-sm border-2 border-indigo-900 bg-indigo-900 bg-opacity-50 rounded-lg py-0.5px-6 hover:scale-105 focus:outline-none focus:border-lime-500 focus:ring-1 focus:ring-lime-500 w-full col-span-2 " value={state.expiry} onChange={handleInputChange} onFocus={handleInputFocus} maxLength="4" required /> {/* Inputfelt til udløbsdato */}
              <input type="tel" pattern="\d{3}" name="cvc" placeholder="CVC" className="input input-bordered input-sm border-2 border-indigo-900 bg-indigo-900 bg-opacity-50 rounded-lg py-0.5 px-6  w-full hover:scale-105 focus:outline-none focus:border-lime-500 focus:ring-1 focus:ring-lime-500" value={state.cvc} onChange={handleInputChange} onFocus={handleInputFocus} maxLength="3" required /> {/* Inputfelt til CVC */}
            </div>
          </form>
          {/* Inputfelt til e-mail */}
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered input-sm border-2 border-indigo-900 bg-indigo-900 bg-opacity-50 rounded-lg  py-0.5 px-6  w-full hover:scale-105 focus:outline-none focus:border-lime-500 focus:ring-1 focus:ring-lime-500 max-w-sm invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-rose-500 focus:invalid:ring-rose-500"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value); // Opdaterer e-mailværdien ved ændringer
            }}
          />
          {/* Checkbox til at acceptere vilkår og betingelser */}
          <div className="flex items-center gap-2 text-gray-400 mb-6">
            <input
              id="checkbox"
              type="checkbox"
              className="checkbox checkbox-primary accent-lime-300 hover:scale-105 outline-none focus:outline-none focus:border-lime-500 focus:ring-1 focus:ring-lime-500 w-6 h-6"
              checked={termsAccepted} // Viser, om vilkår og betingelser er accepteret
              onChange={(e) => {
                setTermsAccepted(e.target.checked); // Opdaterer accepteringsstatus for vilkår og betingelser
              }}
            />
            <label for="checkbox" className="text-sm select-none text-white ">
              {/* Tekst og link til vilkår og betingelser */}I accept
              <a href="/" className="underline underline-offset-4 text-white decoration-primary ml-2 hover:text-lime-300  hover:scale-105 transition-colors">
                Terms & Conditions
              </a>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
