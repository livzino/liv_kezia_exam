import styles from "./camping.css";
import React, { useState, useEffect } from "react";
import CampingArea from "./CampingArea";
import { v4 as uuidv4 } from "uuid";
import { url } from "../../../../config";

export default function Camping({ totalTickets, spots, setSelectedSpot, setSelectedCamp, selectedCamp, mapHandleModal, reservationId, setReservationId }) {
  function chooseSpot(selectedCamp) {
    const selectedSpotDetails = spots.find((spot) => spot.area === selectedCamp.area);

    if (reservationId) {
      return;
    } else if (selectedSpotDetails.available === 0 || totalTickets > selectedSpotDetails.available) {
      setSelectedSpot(null);
      setSelectedCamp(null);
    } else {
      setSelectedSpot(selectedCamp.area);
      const newReservationId = uuidv4(); // Generate a new reservation ID
      setReservationId(newReservationId); // Set the new reservation ID
    }
  }

  const [dataCamps, setDataCamps] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resCamps = await fetch(`${url}/available-spots`);
        const dataCamps = await resCamps.json();
        setDataCamps(dataCamps);
      } catch (error) {
        console.error("Error fetching camps:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.Camping}>
      {dataCamps &&
        dataCamps.map((camp) => (
          <CampingArea
            key={camp.area}
            campName={camp.area}
            available={camp.available}
            spots={camp.spots}
            camp={camp}
            selectedCamp={selectedCamp}
            onClick={() => {
              if (reservationId) {
                mapHandleModal();
              } else {
                setSelectedCamp(camp);
                chooseSpot(camp); // Call chooseSpot function here
              }
            }}
            totalTickets={totalTickets}
            className="aspect-[3/2] w-full md:col-start-2 md:col-end-4 md:aspect-[2.25/1] rounded-2xl overflow-hidden border border-gray-800"
            mapHandleModal={mapHandleModal}
            reservationId={reservationId}
          />
        ))}
    </div>
  );
}
