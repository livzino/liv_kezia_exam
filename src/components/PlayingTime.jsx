"use client";
import { url } from "/config";
import Link from "next/link";
import { useEffect, useState } from "react";

function PlayingTime({ band }) {
  const [schedule, setSchedule] = useState("");
  const [stage, setStage] = useState("");

  useEffect(() => {
    fetch(`${url}/schedule`)
      .then((res) => res.json())
      .then((data) => {
        // Iterate over each stage
        for (let stage in data) {
          // Iterate over each day in the current stage
          for (let day in data[stage]) {
            // Find the time slot where the band is playing
            const timeSlot = data[stage][day].find((slot) => slot.act === band.name);
            // Convert day from "thu" etc, to "Thursday" etc.
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

            if (timeSlot) {
              setSchedule(
                `Playing on ${stage}, ${fullDay} at ${timeSlot.start}`
                //    to ${timeSlot.end}
              );
              setStage(stage);
            }
          }
        }
      });
  }, [band]);

  return (
    <Link href={`/schedule`}>
      <div className={`badge ${stage === "Midgard" ? "bg-pink-400 border-rose-700 text-indigo-950" : stage === "Vanaheim" ? "bg-purple-500 border-purple-500 text-indigo-950" : stage === "Jotunheim" ? "bg-yellow-400 border-yellow-400 text-indigo-950" : "bg-gray-600 border-gray-500 text-gray-100"}  rounded-lg h-fit py-1 md:whitespace-nowrap`}>{schedule ? <p>{schedule}</p> : <p>Loading...</p>}</div>
    </Link>
  );
}

export default PlayingTime;
