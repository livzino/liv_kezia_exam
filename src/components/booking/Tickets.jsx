// Importerer nødvendige ikoner fra Tabler Icons biblioteket
import { IconMinus, IconPlus, IconTicket } from "@tabler/icons-react";

// TicketOption komponentet bruges til at vise en billettype og dens pris samt muligheden for at øge eller mindske antallet af billetter
const TicketOption = ({ ticketType, ticketPrice, ticketCount, updateTickets, totalTickets, info }) => (
  // Flex container der indeholder billetinformation og knapper til at justere antallet af billetter
  <div className="flex items-center gap-6 w-fit justify-between ">
    {/* Container til billettype og pris med en tooltip for yderligere information */}
    <div className="font-medium text-end  w-24 tooltip tooltip-top" data-tip={info}>
      <h2 className="text-rose-500">{ticketType}</h2>
      <p className="text-white">{ticketPrice}</p>
    </div>

    {/* Container med knapper til at øge eller mindske antallet af billetter */}
    <div className="flex items-center w-32 justify-between font-medium ">
      {/* Knappen til at mindske antallet af billetter */}
      <button aria-label="Decrease ticket count" className="bg-neutral text-gray-100 font-medium text-base p-2 rounded-full w-fit  border-lime-500 border-2 hover:scale-105 hover:bg-indigo-900 hover:border-lime-500 transition-colors" onClick={() => updateTickets(ticketType.toLowerCase(), "decrease")}>
        <IconMinus color="#BBEE68" alt="plus one ticket" />
      </button>
      {/* Viser det aktuelle antal af billetter */}
      <p>{ticketCount}</p>
      {/* Knappen til at øge antallet af billetter */}
      <button aria-label="Increase ticket count" className={`font-medium text-base p-2 rounded-full w-fit border transition-colors ${totalTickets >= 8 ? "btn-disabled bg-indigo-900 border-gray-800 stroke-indigo-800" : " text-lime-500 border-lime-500 border-2  hover:scale-105 hover:bg-cyan-400 hover:border-lime-500 "}`} onClick={() => totalTickets < 8 && updateTickets(ticketType.toLowerCase(), "increase")}>
        <IconPlus color="#BBEE68" alt="minus one ticket" />
      </button>
    </div>
  </div>
);

// Tickets komponentet viser billetinformation, inklusive billettyper, priser og muligheden for at vælge antal billetter
function Tickets({ regularTickets, vipTickets, totalTickets, updateTickets }) {
  return (
    // Flex container til at indeholde billetinformation
    <div className="h-full flex flex-col ">
      {/* Overskrift og ikon til at repræsentere billetter */}
      <div className="flex gap-2 items-center mt-4 md:mt-0">
        <IconTicket color="#FD1995" size="60" alt="ticket icon" />
        <h1 className="font-medium text-5xl ">TICKETS</h1>
      </div>
      {/* Container til billetinformation og antal billetter */}
      <div className="flex flex-col justify-evenly flex-grow">
        <div className="place-self-center flex flex-col gap-4">
          {/* Viser billettyper og priser */}
          <div className="space-y-12 font-medium text-1xl text-white">
            <TicketOption ticketType="REGULAR" ticketPrice="799 DKK" ticketCount={regularTickets} updateTickets={updateTickets} totalTickets={totalTickets} />
            <TicketOption ticketType="VIP" ticketPrice="1299 DKK" ticketCount={vipTickets} updateTickets={updateTickets} totalTickets={totalTickets} />
          </div>
          {/* Viser det totale antal af billetter */}
          <div className="font-medium text-sm text-white place-self-end flex flex-col items-end">
            <p>TOTAL TICKETS</p>
            <p>{totalTickets}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Eksporterer Tickets komponentet som standard eksport
export default Tickets;
