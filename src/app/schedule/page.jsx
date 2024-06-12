"use client";

import ScheduleCard from "../../components/ScheduleCard";
import { url } from "/config";
import Title from "../../components/Title";
import { useEffect, useState } from "react";

// Funktionel komponent for tidsplan-siden
export default function Schedule() {
  // Her sættes state-variablerne og deres funktioner
  const [dataSchedule, setDataSchedule] = useState(null);
  const [dataBands, setDataBands] = useState(null);
  const [selectedScene, showSelectedScene] = useState("All stages");
  const [selectedButton, setSelectedButton] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDay, setSelectedDay] = useState("mon");
  const [dayIndex, setDayIndex] = useState(0);
  // Her bruges useEffect hook til at hente data fra API'et og sætte det i state-variablerne
  useEffect(() => {
    const fetchData = async () => {
      // Her hentes data fra API'et og sættes i state-variablerne
      const resSchedule = await fetch(`${url}/schedule`);
      const dataSchedule = await resSchedule.json();
      setDataSchedule(dataSchedule);

      // Her hentes data fra API'et og sættes i state-variablerne
      const resBands = await fetch(`${url}/bands`);
      const dataBandsInfo = await resBands.json();
      setDataBands(dataBandsInfo);
    };

    fetchData();
  }, []);

  const filteredBands = dataBands?.filter((band) => {
    const daySchedule = dataSchedule?.[selectedScene]?.[selectedDay];
    if (!daySchedule) return false;
    return daySchedule.some((slot) => slot.act === band.name);
  });
  // Hvis der ikke er data, så vises der en loading-besked
  if (!dataSchedule || !dataBands) {
    return (
      <>
        <h2 className="text-rose-500" style={{ fontFamily: "Syncopate, sans-serif", fontWeight: 700 }}>
          Loading...
        </h2>
        <div className="flex flex-wrap justify-center"></div>
      </>
    );
  }

  // Her hentes dagens navn og tidspunktet og sættes i variabler
  const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
  const date = new Date();
  const dayName = days[date.getDay()];
  const currentHour = date.getHours();

  // Manual override for testing, comment out when done:
  // const dayName = "fri";
  //   const currentHour = 23;

  // Funktion til at finde aktuel handling udfra dag og tidspunkt
  const getCurrentAct = (schedule) => {
    return schedule.find((act) => {
      const startHour = parseInt(act.start.split(":")[0]);
      const endHour = parseInt(act.end.split(":")[0]);
      return currentHour >= startHour && currentHour < endHour;
    });
  };

  // Funktion er henter information om bandet udfra navn
  const getBandInfo = (bandName) => {
    if (bandName === "break") {
      return { name: "break", logo: "break.jpg" };
    }
    return dataBands.find((band) => band.name === bandName);
  };

  // Funktion der henter information om bandets logo/billede udfra information om bandet
  const getBandLogo = (bandInfo) => {
    if (bandInfo.logo && bandInfo.logo.startsWith("https")) {
      return bandInfo.logo;
    } else if (bandInfo.name === "break") {
      return `/img/${bandInfo.logo}`;
    } else {
      return `${url}/logos/${bandInfo.logo}`;
    }
  };

  // Funktion der finder næste link udfra næste handling og tidsplanen
  const getnextActlink = (nextAct, schedule) => {
    if (nextAct) {
      if (nextAct.act === "break") {
        return "/schedule";
      } else {
        return `/artist/${getBandInfo(nextAct.act).slug}`;
      }
    } else {
      return "/schedule";
    }
  };

  const handleDayChange = (direction) => {
    setDayIndex((dayIndex + direction) % 7);
    setSelectedDay(days[(dayIndex + direction) % 7]);
  };

  return (
    <>
      <div className="container mx-auto max-w-6xl px-4 mt-10 flex flex-col gap-4">
        <Title title="SCHEDULE" />

        <div className="grid grid-cols content-evenly gap-6 lg:flex lg:justify-between">
          <div className="grid grid-cols-2 lg:flex flex-row lg:flex-row gap-2">
            <button
              className="btn btn-block px-2 py-2 bg-pink-500 text-indigo-900 text-xs lg:text-base w-fit rounded border hover:bg-pink-500 hover:border-pink-500 hover:scale-105"
              onClick={() => {
                handleDayChange(-1);
                if (dayIndex === 0) {
                  setDayIndex(days.length - 1);
                }
              }}>
              &#8592; {/* Left arrow */}
            </button>
            <span className="text-lg font-bold">{days[dayIndex].toUpperCase()}</span>
            <button
              className="btn btn-block px-2 py-2 bg-pink-500 text-indigo-900 text-xs lg:text-base w-fit rounded border hover:bg-pink-500 hover:border-pink-500 hover:scale-105"
              onClick={() => {
                handleDayChange(1);
                if (dayIndex === days.length - 1) {
                  setDayIndex(0);
                }
              }}>
              &#8594; {/* Right arrow */}
            </button>
          </div>
          <div className="flex items-center">
            <input className="input input-bordered input-sm lg:input-md w-full max-w-xs text-xs px-8 py-2 bg-indigo-900 text-gray-100  lg:text-base  rounded border border-lime-500 hover:scale-105" type="text" placeholder="Search artist..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} /> {/* Search input field */}
            {/* Render the rest of the component, using filteredBands instead of dataBands */}
          </div>
        </div>
      </div>

      <div className="flex flex-row lg:grid lg:grid-cols-3 lg:gap-4 overflow-x-scroll overflow-y-hidden snap-mandatory scrollbar-hide gap-x-6 scrollbar-hide mb-20 ring-4 ring-purple-950 ring-offset-4 ring-offset-slate-50 dark:ring-offset-cyan-300 rounded-3xl p-10 bg-fuchsia-950 opacity-90" style={{ fontFamily: "Syncopate, sans-serif", fontWeight: 400 }}>
        {/* Her mappes hen over hver scene for at generere en tidsplan */}
        {["Midgard", "Vanaheim", "Jotunheim"].map((scene) => (
          <div key={scene} className="flex flex-col items-start">
            <h2 className="text-xl font-bold mb-3 text-center">{scene}</h2>

            {/* Her mappes over hver handling udfra dag og scene */}
            {dataSchedule[scene][selectedDay]
              .filter((slot) => slot.act.toLowerCase().includes(searchTerm.toLowerCase()))
              .map((slot, index) => {
                const bandName = slot.act;
                if (bandName === "break") return null;
                const bandInfo = getBandInfo(bandName);
                const bandLogo = getBandLogo(bandInfo);
                const nextAct = dataSchedule[scene][selectedDay][index + 1];
                const nextActLink = getnextActlink(nextAct, dataSchedule[scene][selectedDay]);

                return <ScheduleCard key={index} slug={bandName === "break" ? "/schedule" : `/artist/${bandInfo.slug}`} scene={scene} artist={slot.act} time={slot.start} src={bandLogo} logoCredits={bandInfo.logoCredits} nextTime={nextAct ? nextAct.start : "tomorrow"} nextBand={nextAct ? nextAct.act : "check schedule"} nextSlug={nextActLink} />;
              })}
          </div>
        ))}
      </div>
    </>
  );
}
