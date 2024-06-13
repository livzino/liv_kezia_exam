import React from "react";
import { IconBuildingCircus, IconCash, IconFlag, IconTicket, IconTrees, IconTent, IconVip, IconShoppingCart } from "@tabler/icons-react";

// OrderSummary-komponenten viser en oversigt over ordren
function OrderSummary({ minutes, seconds, isPulsing, ticketsReserved, totalPrice, regularTickets, vipTickets, selectedCamp, greenCamping, twoPersonTents, threePersonTents, totalTickets }) {
  return (
    // Container til at vise ordreoversigt
    <div className="bg-rose-600 bg-opacity-40 h-24 md:h-full w-full flex flex-row md:flex-col justify-between items-baseline md:items-start gap-5 order-1 md:order-2 md:border-l border-l-rose-500  p-6 md:p-12">
      {/* Viser overskrift og ikon for ordreoversigt */}
      <div className="space-y-5 hidden md:block">
        <div className="flex gap-2 items-center">
          <IconShoppingCart />
          <h1 className="font-medium text-lg whitespace-nowrap">Order Summary</h1>
        </div>
        {/* Viser forskellige elementer i ordren */}
        <div className="space-y-5 font-medium hidden md:block">
          {/* Bookinggebyr */}
          <div className="flex items-center gap-4 tooltip" data-tip="This fee is non-refundable and is used to cover the costs of the festival.">
            <div className="rounded-lg bg-rose-500 border border-rose-700 p-2">
              <IconCash />
            </div>
            <div className="flex flex-col text-start">
              <p className="text-indigo-900">BOOKING FEE</p>
              <p className="text-white">
                <span>99</span> DKK
              </p>
            </div>
          </div>
          {/* Antal regular tickets */}
          {regularTickets > 0 && (
            <div className="flex items-center gap-4">
              <div className="indicator rounded-lg bg-rose-500 border border-rose-700 p-2">
                <span className="indicator-item bg-indigo-900  badge badge-secondary h-5 w-5 rounded-full text-xs">{regularTickets}</span>
                <IconTicket />
              </div>
              <div className="flex flex-col">
                <p className="text-indigo-900">REGULAR TICKETS</p>
                <p className="text-white">
                  <span>799 DKK</span>
                </p>
              </div>
            </div>
          )}
          {/* Antal VIP tickets */}
          {vipTickets > 0 && (
            <div className="flex items-center gap-4">
              <div className="indicator rounded-lg bg-rose-500 border border-rose-700 p-2">
                <span className="indicator-item bg-indigo-900   badge badge-secondary h-5 w-5 rounded-full text-xs">{vipTickets}</span>
                <IconVip />
              </div>
              <div className="flex flex-col">
                <p className="text-indigo-900">VIP TICKETS</p>
                <p className="text-white">
                  <span>1299 DKK</span>
                </p>
              </div>
            </div>
          )}
          {/* Valgt campområde */}
          <div className="flex items-center gap-4">
            <div className="rounded-lg bg-rose-500 border border-rose-700 p-2">
              <IconFlag />
            </div>
            <div className="flex flex-col">
              <p className="text-indigo-900">SELECTED CAMP</p>
              <p className="text-white">
                <span>{selectedCamp ? selectedCamp.area : "No camp selected"}</span>
              </p>
            </div>
          </div>
          {/* Antal 2-personers telte */}
          {twoPersonTents > 0 && ( // Hvis der er to-personers telte i ordren
            <div className="flex items-center gap-4">
              <div className="indicator rounded-lg bg-rose-500 border border-rose-700 p-2">
                <span className="indicator-item bg-indigo-900 badge badge-secondary h-5 w-5 rounded-full text-xs">{twoPersonTents}</span>
                <IconTent />
              </div>
              <div className="flex flex-col">
                <p className="text-indigo-900">2 PERSON TENTS</p>
                <p className="text-white">
                  <span>299 DKK</span>
                </p>
              </div>
            </div>
          )}
          {/* Antal 3-personers telte */}
          {threePersonTents > 0 && ( // Hvis der er tre-personers telte i ordren
            <div className="flex items-center gap-4">
              <div className="indicator rounded-lg bg-rose-500 border border-rose-700 p-2">
                <span className="indicator-item bg-indigo-900 badge badge-secondary h-5 w-5 rounded-full text-xs">{threePersonTents}</span>
                <IconBuildingCircus />
              </div>
              <div className="flex flex-col">
                <p className="text-indigo-900">3 PERSON TENTS</p>
                <p className="text-white">
                  <span>399 DKK</span>
                </p>
              </div>
            </div>
          )}
          {/* Grønt campingområde */}
          {greenCamping && ( // Hvis der er valgt grønt campingområde i ordren
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-rose-500 border border-rose-700 p-2">
                <IconTrees />
              </div>
              <div className="flex flex-col">
                <p className="text-indigo-900">GREEN CAMPING</p>
                <p className="text-white">
                  <span>249 DKK</span>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Viser tid til reservation udløber, hvis billetter er reserveret */}
      <div className="w-full h-fit md:space-y-5">
        <div className="divider mt-0 hidden md:flex"></div>
        {ticketsReserved && ( // Hvis der er billetter reserveret
          <div className={`hidden md:block font-medium ${isPulsing ? "animate-pulse" : ""}`}>
            <p className="text-white">
              {totalTickets > 1 ? "Tickets Reserved" : "Ticket Reserved"} {/* // Besked om antallet af reserverede billetter */}
            </p>
            <div className="flex items-center gap-2">
              <span className="countdown text-indigo-900 border-lime-500 border-4 bg-lime-300 rounded-lg p-2">{minutes < 10 ? `0${minutes}` : minutes} :</span>
              {/* // Antal minutter til reservation udløber */}
              <span className="text-indigo-900">min</span>
              <span className="countdown text-indigo-900 border-lime-500 border-4 bg-lime-300 rounded-lg p-2">{seconds < 10 ? `0${seconds}` : seconds}</span>
              {/* // Antal sekunder til reservation udløber */}
              <span className="text-indigo-900">sec</span>
            </div>
          </div>
        )}
        {/* Totalprisen for ordren */}
        <div className="font-medium flex flex-row md:flex-col gap-2 md:gap-0">
          <p className="text-indigo-900">TOTAL</p>
          <p>{totalPrice} DKK</p>
          {/* // Totalprisen i DKK */}
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;
