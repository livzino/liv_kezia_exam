"use client";

import { IconBuildingCircus, IconCash, IconFlag, IconTicket, IconTrees, IconTent, IconVip, IconShoppingCart, IconCaretDown, IconCaretUp } from "@tabler/icons-react";
import { useState } from "react";

export default function MobileOrderSummary({ minutes, seconds, isPulsing, ticketsReserved, totalPrice, regularTickets, vipTickets, selectedCamp, greenCamping, twoPersonTents, threePersonTents, totalTickets }) {
  const [showOrderSummary, setShowOrderSummary] = useState(false);

  return (
    <div className="absolute w-full z-50">
      <div className="flex items-center justify-between px-8 py-4 bg-rose-500 ">
        <div onClick={() => setShowOrderSummary(!showOrderSummary)} className="flex gap-2">
          <IconShoppingCart size={35} alt="shoppingcart icon" />
          {!showOrderSummary && <IconCaretDown size={35} alt="show full order summery" />}
          {showOrderSummary && <IconCaretUp size={35} alt="hide full order summery" />}
        </div>
        <p>{totalPrice} DKK</p>
      </div>
      {showOrderSummary && (
        <div className="bg-rose-500 px-8 py-6 flex flex-col gap-4 ">
          <div className="flex items-center gap-4">
            <div className="rounded-lg bg-rose-500 border border-rose-700 p-2">
              <IconCash />
            </div>
            <div className="flex flex-col">
              <p className="text-indigo-900">BOOKING FEE</p>
              <p className="text-white">
                <span>99</span> DKK
              </p>
            </div>
          </div>
          {regularTickets > 0 && (
            <div className="flex items-center gap-4">
              <div className="indicator rounded-lg bg-rose-500 border border-rose-700 p-2 ">
                <span class="indicator-item bg-indigo-900  badge badge-secondary h-5 w-5 rounded-full text-xs">{regularTickets}</span>
                <IconTicket />
              </div>
              <div className="flex flex-col">
                <p className="text-indigo-900">REGULAR TICKETS</p>
                <p className="text-white">
                  <span>799 DKK </span>
                </p>
              </div>
            </div>
          )}
          {vipTickets > 0 && (
            <div className="flex items-center gap-4">
              <div className="indicator rounded-lg bg-rose-500 border border-rose-700 p-2 ">
                <span class="indicator-item bg-indigo-900  badge badge-secondary h-5 w-5 rounded-full text-xs">{vipTickets}</span>
                <IconVip />
              </div>
              <div className="flex flex-col">
                <p className="text-indigo-900">VIP TICKETS</p>
                <p className="text-white">
                  <span>1299 DKK </span>
                </p>
              </div>
            </div>
          )}
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
          {twoPersonTents > 0 && (
            <div className="flex items-center gap-4">
              <div className="indicator rounded-lg bg-rose-500 border border-rose-700 p-2">
                <span class="indicator-item bg-indigo-900 badge badge-secondary h-5 w-5 rounded-full text-xs">{twoPersonTents}</span>
                <IconTent />
              </div>
              <div className="flex flex-col">
                <p className="text-indigo-900">2 Person Tents</p>
                <p className="text-white">
                  <span>299 DKK </span>
                </p>
              </div>
            </div>
          )}
          {threePersonTents > 0 && (
            <div className="flex items-center gap-4">
              <div className="indicator rounded-lg bg-rose-500 border border-rose-700 p-2">
                <span class="indicator-item bg-indigo-900 badge badge-secondary h-5 w-5 rounded-full text-xs">{threePersonTents}</span>
                <IconBuildingCircus />
              </div>
              <div className="flex flex-col">
                <p className="text-indigo-900">3 Person Tents</p>
                <p className="text-white">
                  <span>399 DKK </span>
                </p>
              </div>
            </div>
          )}
          {greenCamping && (
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-rose-500 border border-rose-700 p-2">
                <IconTrees />
              </div>
              <div className="flex flex-col">
                <p className="text-indigo-900">Green Camping</p>
                <p className="text-white">
                  <span>249 DKK</span>
                </p>
              </div>
            </div>
          )}
          <hr className="border-indigo-900" />
          <div className="flex justify-between">
            <div>
              <p className="text-indigo-900">Total</p>
              <p className="text-white text-sm whitespace-nowrap">Including {Number((totalPrice * 0.2).toFixed(2))} kr in taxes</p>
            </div>
            <p>{totalPrice} DKK</p>
          </div>
        </div>
      )}
      {ticketsReserved && (
        <div className="text-center bg-rose-500 py-2 ">
          <hr className="border-indigo-900" />
          <p className="text-indigo-900 text-sm mb-2">Time remaining to complete your order:</p>
          <div className="flex justify-center items-center">
            <span className="text-indigo-900 border-lime-500 border-4 bg-lime-300 rounded-lg text-xl mr-1">{minutes < 10 ? `0${minutes}` : minutes}</span>
            <span className="text-indigo-900 border-lime-500 border-4 bg-lime-300 rounded-lg text-xl">:</span>
            <span className="text-indigo-900 border-lime-500 border-4 bg-lime-300 rounded-lg text-xl ml-1">{seconds < 10 ? `0${seconds}` : seconds}</span>
          </div>
        </div>
      )}
    </div>
  );
}
