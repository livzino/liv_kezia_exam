import Link from "next/link";
import React from "react";

// Funktion til at vise tilbageknap
function BackButton({ currentSlide, changeSlide }) {
  // Hvis den aktuelle slide er den første (0), vis tilbageknap med link til forsiden
  if (currentSlide === 0) {
    return (
      <Link href="/">
        <button className="text-m bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600  backdrop-blur-md transition-all hover:scale-105 border-4 border-lime-400 rounded-2xl text-lime-400 cursor-pointer h-14 px-4 py-2 w-40 " style={{ fontFamily: "Syncopate, sans-serif", fontWeight: 700 }}>
          BACK
        </button>
      </Link>
    );
  }
  // Hvis den aktuelle slide er mellem 1 og 4, vis tilbageknap med funktion til at skifte til forrige slide
  if (currentSlide > 0 && currentSlide < 5) {
    return (
      <button className="text-m bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600  backdrop-blur-md transition-all hover:scale-105 border-4 border-lime-400 rounded-2xl text-lime-400 cursor-pointer h-14 px-4 py-2 w-40" style={{ fontFamily: "Syncopate, sans-serif", fontWeight: 700 }} onClick={() => changeSlide("prev")}>
        BACK
      </button>
    );
  }
  // Hvis ingen af ovenstående betingelser er opfyldt, returner null (ingen knap)
  return null;
}

// Funktion til at vise fortsæt-knap
function ContinueButton({ currentSlide, totalTickets, ticketHolders, selectedSpot, fulfillReservation, sendMailToCustomer, dataToSupabase, email, termsAccepted, handleContinue }) {
  // Funktion til at afgøre om fortsæt-knap skal være aktiv eller ej
  const isContinueButtonEnabled = () => {
    const isTicketHolderValid = ticketHolders.regular.filter(Boolean).length + ticketHolders.vip.filter(Boolean).length === totalTickets;
    const isEmailValid = email && email.includes("@");
    const isTermsAccepted = termsAccepted;

    return totalTickets > 0 > selectedSpot && !(currentSlide === 3 && !isTicketHolderValid) && !(currentSlide === 6 && (!isEmailValid || !isTermsAccepted));
  };

  // Funktion til håndtering af klik på fortsæt-knap
  const handleButtonClick = () => {
    if (isContinueButtonEnabled()) {
      if (currentSlide === 5) {
        fulfillReservation();
        sendMailToCustomer();
        dataToSupabase();
      }
      handleContinue();
    }
  };

  // Hvis den aktuelle slide er 5, vis ingen knap (da det er betalingsskærmen)
  if (currentSlide === 5) {
    return null;
  }

  // Returner knap med aktivering afhængigt af om betingelsen for aktivering er opfyldt
  return (
    <button className={` ${isContinueButtonEnabled() ? "bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600  text-lime-400" : "btn-disabled"} backdrop-blur-md transition-all hover:scale-105 border-4 border-lime-400 rounded-2xl text-lime-400 cursor-pointer h-14 w-40 px-4 py-2" `} style={{ fontFamily: "Syncopate, sans-serif", fontWeight: 700 }} onClick={handleButtonClick}>
      {currentSlide === 5 ? "FINISH PAYMENT" : "CONTINUE"}
    </button>
  );
}

// Funktion til at vise både tilbage- og fortsæt-knap
function BackAndContinueButtons(props) {
  return (
    <div className="flex justify-center space-x-6 z-50">
      <BackButton {...props} />
      <ContinueButton {...props} />
    </div>
  );
}

export default BackAndContinueButtons;
