import React from "react"; // Importerer React-biblioteket
import { IconHeartCheck } from "@tabler/icons-react"; // Importerer hjerteikonet fra Tabler Icons
import Link from "next/link"; // Importerer Link-komponenten fra Next.js

const PaymentStatus = (
  { paymentSuccess } // Funktionen PaymentStatus modtager paymentSuccess som en prop
) => (
  <div className="h-full flex flex-col justify-between">
    {" "}
    {/* Container til betalingsstatuskomponenten */}
    <div className="flex flex-col justify-evenly flex-grow">
      {" "}
      {/* Container til indholdet af betalingsstatus */}
      <div className="place-self-center flex flex-col gap-4 items-center text-center">
        {" "}
        {/* Centreret container til indholdet */}
        {paymentSuccess ? ( // Ternær operator til at vise indholdet baseret på betalingsstatus
          <>
            {" "}
            {/* Fragment til at gruppere elementer */}
            <IconHeartCheck color="#BBEE68" className="animate-bounce" size={64} /> {/* Viser hjerteikonet med en hoppeanimation */}
            <h1 className="font-medium text-3xl" style={{ fontFamily: "Syncopate, sans-serif", fontWeight: 200 }}>
              ORDER COMPLETE! {/* Overskrift for afsluttet ordre */}
            </h1>
            <p className="text-lime-400 font-medium max-w-xs" style={{ fontFamily: "Syncopate, sans-serif", fontWeight: 400 }}>
              Your order has been placed and you will receive a confirmation email shortly. {/* Besked om, at ordren er placeret og en bekræftelses-e-mail vil blive sendt */}
            </p>
            <Link href="/">
              {" "}
              {/* Link til startsiden */}
              <button className="text-m bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600  backdrop-blur-md transition-all hover:scale-105 border-4 border-lime-400 rounded-2xl text-lime-400 cursor-pointer h-14 px-12 max-w-s" style={{ fontFamily: "Syncopate, sans-serif", fontWeight: 400 }}>
                RETURN HOME {/* Knappen til at vende tilbage til startsiden */}
              </button>
            </Link>
          </>
        ) : (
          <>
            {" "}
            {/* Hvis betalingen ikke er gennemført */}
            <h1 className="text-rose-500" style={{ fontFamily: "Syncopate, sans-serif", fontWeight: 700 }}>
              LOADING... {/* Viser "LOADING..." mens betalingen behandles */}
            </h1>
            <p className="text-gray-400 font-medium max-w-xs"></p> {/* Tom paragraf */}
            {/* <Link
              href="/booking"
              className="btn btn-primary font-medium text-emerald-100 text-base rounded py-1 px-4 w-fit border border-emerald-500 hover:bg-emerald-500 hover:border-emerald-400"
            >
              Try Again
            </Link> */}
          </>
        )}
      </div>
    </div>
  </div>
);

export default PaymentStatus; // Eksporterer PaymentStatus-komponenten
