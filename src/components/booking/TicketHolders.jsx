import { IconUsersGroup } from "@tabler/icons-react";
import React from "react";

// TicketHolders-komponenten håndterer registrering af ticketindehavere
const TicketHolders = ({ regularTickets, vipTickets, ticketHolders, setTicketHolders }) => {
  // Funktionen handleInputChange opdaterer staten for ticketindehavere, når der foretages ændringer i inputfelterne
  const handleInputChange = (type, index, value) => {
    // Kopierer det eksisterende array af ticketindehavere for den givne type
    let newTicketHolders = [...ticketHolders[type]];
    // Opdaterer værdien for den specifikke indehaver ved det angivne index
    newTicketHolders[index] = value;
    // Opdaterer state for ticketindehavere med det nye array
    setTicketHolders({
      ...ticketHolders,
      [type]: newTicketHolders,
    });
  };

  return (
    // Container til at vise indtastning af ticketindehavere
    <div className="h-full flex flex-col justify-between">
      {/* Overskrift og ikon for ticketindehavere */}
      <div className="flex gap-2 items-center mt-4 md:mt-0">
        <IconUsersGroup color="#FD1995" size="60" />
        <h1 className="font-medium text-5xl">TICKET HOLDERS</h1>
      </div>
      {/* Container til at vise inputfelter for ticketindehavere */}
      <div className="flex flex-col justify-evenly flex-grow">
        <div className="place-self-center flex flex-col gap-4">
          {/* Formular til at indtaste ticketindehavere */}
          <form className="w-full space-y-5">
            {/* Seperat input for hver regular ticket holder */}
            {regularTickets > 0 && (
              <div>
                <h2 className="mb-3 font-medium text-lg text-rose-500">REGULAR TICKET HOLDERS</h2>
                <div className="flex flex-col gap-3">
                  {[...Array(regularTickets)].map((_, i) => (
                    <input key={i} type="text" placeholder={`REGULAR TICKET ${i + 1}`} className="input input-bordered input-sm border-2 border-indigo-900 bg-indigo-900 bg-opacity-50 rounded-lg mb-4 py-4 px-6 w-full hover:scale-105 focus:outline-none focus:border-lime-500 focus:ring-1 focus:ring-lime-500" onChange={(e) => handleInputChange("regular", i, e.target.value)} value={ticketHolders.regular[i] || ""} />
                  ))}
                </div>
              </div>
            )}
            {/* Seperat input for hver VIP ticket holder */}
            {vipTickets > 0 && (
              <div>
                <h2 className="mb-3 font-medium text-lg text-rose-500">VIP TICKET HOLDERS</h2>
                <div className="flex flex-col gap-3">
                  {[...Array(vipTickets)].map((_, i) => (
                    <input key={i} type="text" placeholder={`VIP TICKET ${i + 1}`} className="input input-bordered input-sm border-2 border-indigo-900 bg-indigo-900 bg-opacity-50 rounded-lg mb-4 py-4 px-6 w-full hover:scale-105 focus:outline-none focus:border-lime-500 focus:ring-1 focus:ring-lime-500" onChange={(e) => handleInputChange("vip", i, e.target.value)} value={ticketHolders.vip[i] || ""} />
                  ))}
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default TicketHolders;
