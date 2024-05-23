import { IconInfoCircle, IconMinus, IconPlus, IconTicket } from "@tabler/icons-react";

const TicketOption = ({ ticketType, ticketPrice, ticketCount, updateTickets, totalTickets, info }) => (
  <div className="flex items-center gap-6 w-fit justify-between ">
    <div className="font-medium text-end  w-24 tooltip tooltip-top" data-tip={info}>
      <h2 className="text-purple-900">{ticketType}</h2>
      <p>{ticketPrice}</p>
    </div>

    <div className="flex items-center w-32 justify-between font-medium ">
      <button aria-label="Decrease ticket count" className="bg-neutral text-gray-100 font-medium text-base p-2 rounded-full w-fit border border-gray-500 hover:bg-gray-600 hover:border-gray-500 transition-colors" onClick={() => updateTickets(ticketType.toLowerCase(), "decrease")}>
        <IconMinus />
      </button>
      <p>{ticketCount}</p>
      <button aria-label="Increase ticket count" className={`  font-medium text-base p-2 rounded-full w-fit border transition-colors ${totalTickets >= 8 ? "btn-disabled bg-gray-800 border-gray-800 stroke-gray-800" : "bg-primary text-emerald-100 border-emerald-500 hover:bg-emerald-500 hover:border-emerald-400 "}`} onClick={() => totalTickets < 8 && updateTickets(ticketType.toLowerCase(), "increase")}>
        <IconPlus />
      </button>
    </div>
  </div>
);

function TicketAndCamp({ regularTickets, vipTickets, totalTickets, updateTickets }) {
  return (
    <div className="h-full flex flex-col ">
      <div className="flex gap-2 items-center mt-4 md:mt-0">
        <IconTicket />
        <h1 className="font-medium text-2xl">Tickets & Camp</h1>
      </div>
      <div className="flex flex-col justify-evenly flex-grow">
        <div className="place-self-center flex flex-col gap-4">
          <div className="space-y-12">
            <TicketOption ticketType="Regular" ticketPrice="799 DKK" ticketCount={regularTickets} updateTickets={updateTickets} totalTickets={totalTickets} info="Regular tickets are for the regular people" />
            <TicketOption ticketType="VIP" ticketPrice="1299 DKK" ticketCount={vipTickets} updateTickets={updateTickets} totalTickets={totalTickets} info="VIP tickets are for the very important people" />
          </div>
          <div className="font-medium text-sm text-gray-500 place-self-end flex flex-col items-end">
            <p>Total Tickets</p>
            <p>{totalTickets}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TicketAndCamp;
