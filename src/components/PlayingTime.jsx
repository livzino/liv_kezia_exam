// Angiver at denne fil skal behandles som en klient-side modul
"use client";

// Importer url-konstanten fra konfigurationsfilen
import { url } from "/config";
// Importer Link komponentet fra Next.js til navigation mellem sider
import Link from "next/link";
// Importer hooks fra React biblioteket
import { useEffect, useState } from "react";

// Definerer og eksporterer PlayingTime komponentet som standard
function PlayingTime({ band }) {
  // Definerer state variabler til schedule og stage med initiale værdier
  const [schedule, setSchedule] = useState("");
  const [stage, setStage] = useState("");

  // useEffect hook til at hente og behandle schedule data når komponentet mountes eller band ændres
  useEffect(() => {
    fetch(`${url}/schedule`)
      .then((res) => res.json())
      .then((data) => {
        // Itererer over hver scene i schedule data
        for (let stage in data) {
          // Itererer over hver dag i den aktuelle scene
          for (let day in data[stage]) {
            // Finder tidsrummet hvor bandet spiller
            const timeSlot = data[stage][day].find((slot) => slot.act === band.name);
            // Konverterer dag fra "thu" osv. til "Thursday" osv.
            const days = {
              mon: "Monday",
              tue: "Tuesday",
              wed: "Wednesday",
              thu: "Thursday",
              fri: "Friday",
              sat: "Saturday",
              sun: "Sunday",
            };
            const fullDay = days[day];

            // Hvis tidsrummet findes, opdaterer schedule og stage state
            if (timeSlot) {
              setSchedule(`Playing on ${stage}, ${fullDay} at ${timeSlot.start}`);
              setStage(stage);
            }
          }
        }
      });
  }, [band]); // Dependency array inkluderer band for at køre hook når band ændres

  return (
    // Link komponent der navigerer til schedule siden
    <Link href={`/schedule`}>
      {/* Div der viser spilleplanen med dynamisk styling baseret på scenen */}
      <div className={`badge ${stage === "Midgard" ? "bg-pink-400 border-rose-700 text-indigo-950" : stage === "Vanaheim" ? "bg-purple-500 border-purple-500 text-indigo-950" : stage === "Jotunheim" ? "bg-yellow-400 border-yellow-400 text-indigo-950" : "bg-gray-600 border-gray-500 text-gray-100"} rounded-lg h-fit py-1 md:whitespace-nowrap`} style={{ fontFamily: "Syncopate, sans-serif", fontWeight: 700 }}>
        {/* Viser spilleplanen eller en loading tekst afhængig af om schedule er sat */}
        {schedule ? <p>{schedule}</p> : <p>Loading...</p>}
      </div>
    </Link>
  );
}

// Eksporterer PlayingTime komponentet som standard eksport
export default PlayingTime;
