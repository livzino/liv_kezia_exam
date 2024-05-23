import CampMap from "../CampMap";
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

function TicketAndCamp({ spots, setSelectedSpot, setSelectedCamp, regularTickets, updateTickets, totalTickets, vipTickets, selectedCamp, mapHandleModal, reservationId, warningCamp }) {
  function chooseSpot(selectedCamp) {
    const selectedSpotDetails = spots.find((spot) => spot.area === selectedCamp);

    if (reservationId) {
      return;
    } else if (selectedSpotDetails.available === 0 || totalTickets > selectedSpotDetails.available) {
      console.log(selectedCamp);
      setSelectedSpot(null);
      setSelectedCamp(null);
    } else {
      setSelectedSpot(selectedCamp);
    }
  }
  {
    warningCamp && (
      <div role="alert" className="alert shadow-lg">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <div>
          <h3 className="font-bold">Not enough available spots!</h3>
          <div className="text-xs">Please choose a new camp area</div>
        </div>
      </div>
    );
  }
  {
    spots.length === 0 ? (
      <div className="w-full flex justify-center items-center h-64">
        <div className="loading loading-ring loading-xl"></div>
      </div>
    ) : (
      <div className="rounded-full">
        <TicketOption ticketType="Regular" ticketPrice="799 DKK" ticketCount={regularTickets} updateTickets={updateTickets} totalTickets={totalTickets} info="Regular tickets are for the regular people" />
        <TicketOption ticketType="VIP" ticketPrice="1299 DKK" ticketCount={vipTickets} updateTickets={updateTickets} totalTickets={totalTickets} info="VIP tickets are for the very important people" />
        <p className="text-center font-medium text-sm text-purple-800">{totalTickets === 0 ? "Select tickets before choosing your camp" : "Choose your camp"}</p>
        <CampMap selectedCamp={selectedCamp} setSelectedCamp={setSelectedCamp} chooseSpot={chooseSpot} totalTickets={totalTickets} className="aspect-[3/2] w-full md:col-start-2 md:col-end-4 md:aspect-[2.25/1] rounded-2xl overflow-hidden border border-gray-800 " mapHandleModal={mapHandleModal} reservationId={reservationId} />
      </div>
    );
  }
}

export default TicketAndCamp;
