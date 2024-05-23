import CampMap from "../CampMap";

function SelectCamp() {
  {
    spots, setSelectedSpot, setSelectedCamp, selectedCamp, mapHandleModal, reservationId, warningCamp;
  }
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
        <p className="text-center font-medium text-sm text-purple-800">{totalTickets === 0 ? "Select tickets before choosing your camp" : "Choose your camp"}</p>
        <CampMap selectedCamp={selectedCamp} setSelectedCamp={setSelectedCamp} chooseSpot={chooseSpot} totalTickets={totalTickets} className="aspect-[3/2] w-full md:col-start-2 md:col-end-4 md:aspect-[2.25/1] rounded-2xl overflow-hidden border border-gray-800 " mapHandleModal={mapHandleModal} reservationId={reservationId} />
      </div>
    );
  }
}

export default SelectCamp;
