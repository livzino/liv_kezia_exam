"use client";

import ScheduleCard from "../../components/ScheduleCard";
import { url } from "/config";
import Title from "../../components/Title";
import { useEffect, useState } from "react";

export default function Schedule() {
  const [dataSchedule, setDataSchedule] = useState("all");
  const [dataBands, setDataBands] = useState("all");
  const [selectedScene, setSelectedScene] = useState("All stages");
  const [selectedDay, setSelectedDay] = useState("All days");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBands, setFilteredBands] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resSchedule = await fetch(`${url}/schedule`);
      const dataSchedule = await resSchedule.json();
      setDataSchedule(dataSchedule);

      const resBands = await fetch(`${url}/bands`);
      const dataBandsInfo = await resBands.json();
      setDataBands(dataBandsInfo);
    };

    fetchData();
  }, []);

  const handleDayChange = (day) => {
    setSelectedDay(day);
    filterBands();
  };

  const handleSceneChange = (scene) => {
    setSelectedScene(scene);
    filterBands();
  };
  const dayNames = {
    mon: "Monday",
    tue: "Tuesday",
    wed: "Wednesday",
    thu: "Thursday",
    fri: "Friday",
    sat: "Saturday",
    sun: "Sunday",
  };

  const filterBands = () => {
    const filteredBands = dataSchedule[selectedDay]
      .filter((band) => {
        if (selectedScene !== "All stages") {
          return band.scene === selectedScene;
        }
        return true;
      })
      .filter((band) => band.name.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilteredBands(filteredBands);
  };

  return (
    <div className="container mx-auto max-w-6xl px-4 mt-10 flex flex-col gap-4">
      <Title title="SCHEDULE" />

      <div className="grid grid-cols content-evenly gap-6 lg:flex lg:justify-between">
        <div className="grid grid-cols-2 lg:flex flex-row lg:flex-row gap-2">
          {["mon", "tue", "wed", "thu", "fri", "sat", "sun"].map((dayName) => (
            <div key={dayName} className="flex flex-col items-start">
              <h2 className="text-xl font-bold mb-3 text-center">{dayNames[dayName].toUpperCase()}</h2>

              {/* Filter the scenes */}
              {Object.keys(dataSchedule).map((scene) => {
                const schedule = dataSchedule[scene][dayName];
                const filteredSchedule = schedule.filter((slot) => slot.act.toLowerCase().includes(searchTerm.toLowerCase()));
                return filteredSchedule.map((slot, index) =>
                  
                     if (selectedScene !== "All stages" && scene !== selectedScene) {
                  return null;
                }
                
                  const bandName = slot.act;
                  if (bandName === "break") return null;
                  // Her henter vi information om bandet og deres logo/billede
                  const bandInfo = getBandInfo(bandName);
                  const bandLogo = getBandLogo(bandInfo);
                  // Her finder vi næste handling og deres link og sender det med til ScheduleCard
                  const nextAct = schedule[index + 1];
                  4;
                  const nextActLink = getnextActlink(nextAct, schedule);
                  if (bandName) {
                    return (
                      <ScheduleCard
                        key={index}
                        slug={bandName === "break" ? "/schedule" : `/artist/${bandInfo.slug}`}
                        scene={scene}
                        artist={slot.act}
                        time={slot.start}
                        src={bandLogo}
                        logoCredits={bandInfo.logoCredits}
                        nextTime={nextAct ? nextAct.start : "tomorrow"}
                        nextBand={nextAct ? nextAct.act : "check schedule"}
                        nextSlug={nextActLink}
                      />
                    );
                  }

                  return null;
                });
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
