"use client";
import React from "react";
import ScheduleCard from "../../components/ScheduleCard";
import { url } from "/config";
import Title from "../../components/Title";
import { useEffect, useState } from "react";
import { IconPlayerPlay } from "@tabler/icons-react";

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
        <h2 className="text-rose-500">Loading...</h2>
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
      <head>
        <title>FooFest Schedule - Plan Your Kpop Experience</title>
        <meta name="description" content="Check out the FooFest 2024 schedule! Find out when and where your favorite Kpop bands are performing, and plan your ultimate festival experience."></meta>
      </head>
      <main>
        <h1 className="visually-hidden">FooFest Schedule - Plan Your Kpop Experience</h1>

        <div className="container mx-auto max-w-6xl px-4 mt-10 flex flex-col gap-4 justify-center">
          <Title title="SCHEDULE" />

          <div className="grid grid-cols content-evenly gap-6 lg:flex lg:justify-between">
            <div className=" flex flex-row w-fit gap-2 bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 border-4 border-lime-400 rounded-2xl text-lime-400 place-items-center ">
              <button
                className="btn btn-block px-2 py-2  text-indigo-900 text-xs lg:text-base w-fit rounded   hover:scale-105"
                onClick={() => {
                  handleDayChange(-1);
                  if (dayIndex === 0) {
                    setDayIndex(days.length - 1);
                  }
                }}>
                <IconPlayerPlay fill="#A5E445" size="48px" stroke={1.5} className="scale-x-[-1]"></IconPlayerPlay> {/* left arrow */}
              </button>
              <span className="text-lg font-bold text-center">{days[dayIndex].toUpperCase()}</span>
              <button
                className="btn btn-block px-2 py-2 text-indigo-900 text-xs lg:text-base w-fit rounded   hover:scale-105"
                onClick={() => {
                  handleDayChange(1);
                  if (dayIndex === days.length - 1) {
                    setDayIndex(0);
                  }
                }}>
                <IconPlayerPlay fill="#A5E445" size="48px" stroke={1.5}></IconPlayerPlay> {/* Right arrow */}
              </button>
            </div>
            <div className="flex items-center">
              <input className="input input-bordered input-sm lg:input-md w-full max-w-xs text-xs px-8 py-2 bg-indigo-900 text-gray-100  lg:text-base  rounded border border-lime-500 hover:scale-105" type="text" placeholder="Search artist..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} /> {/* Search input field */}
              {/* Render the rest of the component, using filteredBands instead of dataBands */}
            </div>
          </div>
        </div>

        <div className="flex flex-row max-md:grid max-md:grid-cols-1 max-lg:grid max-lg:grid-cols-3 lg:grid lg:grid-cols-3 lg:gap-4 md:ml-12 overflow-y-hidden  gap-x-6 mx-32 md:mx-24 mt-16 scrollbar-hide mb-20 ring-4 ring-purple-950 ring-offset-4 ring-offset-slate-50 dark:ring-offset-cyan-300 rounded-3xl p-10  bg-fuchsia-950/60" style={{ fontFamily: "Syncopate, sans-serif", fontWeight: 400 }}>
          {/* Her mappes hen over hver scene for at generere en tidsplan */}
          {["Midgard", "Vanaheim", "Jotunheim"].map((scene) => (
            <div key={scene} className="flex flex-col lg:ml-10 md:ml-6 md:px-6 border-r-2 border-cyan-300">
              <h2 className="lg:text-4xl md:text-2xl sm:text-4xl mb-16 border-b-8 border-double border-cyan-300 pb-8 mt-6 font-synco">{scene}</h2>

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
      </main>
    </>
  );
}
