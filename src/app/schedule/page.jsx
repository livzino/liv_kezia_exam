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
  const [selectedDay, showSelectedDay] = useState("All stages");

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

  const filteredBands = dataBands?.filter((band) => band.name.toLowerCase().includes(searchTerm.toLowerCase()));

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
  const dayNames = {
    mon: "Monday",
    tue: "Tuesday",
    wed: "Wednesday",
    thu: "Thursday",
    fri: "Friday",
    sat: "Saturday",
    sun: "Sunday",
  };

  return (
    <>
      <div className="container mx-auto max-w-6xl px-4 mt-10 flex flex-col gap-4">
        <Title title="SCHEDULE" />

        <div className="grid grid-cols content-evenly gap-6 lg:flex lg:justify-between">
          <div className="grid grid-cols-2 lg:flex flex-row lg:flex-row gap-2">
            <button
              style={{ backgroundColor: selectedDay === "mon" ? "#ff78b5" : "rgb(17 24 39)" }}
              className={`btn btn-block px-2 py-2 bg-pink-500 text-indigo-900 text-xs lg:text-base w-fit rounded border ${selectedDay === "mon" ? "border-pink-500 " : "border-gray-500"} hover:bg-pink-500 hover:border-pink-500 hover:scale-105`}
              onClick={() => {
                showSelectedDay("mon");
                setSelectedButton("mon");
              }}
            >
              <div key={dayNames} className="flex flex-col items-start">
                <h2 className="text-xl font-bold mb-3 text-center">{dayNames["mon"].toUpperCase()}</h2>
              </div>
            </button>

            <button
              style={{ backgroundColor: selectedButton === "tue" ? "#ff78b5" : "rgb(17 24 39)" }}
              className={`btn btn-block px-2 py-2 bg-pink-500 text-indigo-900 text-xs lg:text-base w-fit rounded border ${selectedButton === "Midgard" ? "border-pink-500 " : "border-gray-500"} hover:bg-pink-500 hover:border-pink-500 hover:scale-105`}
              onClick={() => {
                showSelectedDay("tue");
                setSelectedButton(`tue`);
              }}
            >
              <div key={dayNames} className="flex flex-col items-start">
                <h2 className="text-xl font-bold mb-3 text-center">{dayNames["tue"].toUpperCase()}</h2>
              </div>
            </button>
            <button
              style={{ backgroundColor: selectedButton === "tue" ? "#ff78b5" : "rgb(17 24 39)" }}
              className={`btn btn-block px-2 py-2 bg-pink-500 text-indigo-900 text-xs lg:text-base w-fit rounded border ${selectedButton === "Midgard" ? "border-pink-500 " : "border-gray-500"} hover:bg-pink-500 hover:border-pink-500 hover:scale-105`}
              onClick={() => {
                showSelectedDay("wed");
                setSelectedButton(`wed`);
              }}
            >
              <div key={dayNames} className="flex flex-col items-start">
                <h2 className="text-xl font-bold mb-3 text-center">{dayNames["wed"].toUpperCase()}</h2>
              </div>
            </button>
            <button
              style={{ backgroundColor: selectedButton === "tue" ? "#ff78b5" : "rgb(17 24 39)" }}
              className={`btn btn-block px-2 py-2 bg-pink-500 text-indigo-900 text-xs lg:text-base w-fit rounded border ${selectedButton === "Midgard" ? "border-pink-500 " : "border-gray-500"} hover:bg-pink-500 hover:border-pink-500 hover:scale-105`}
              onClick={() => {
                showSelectedDay("thu");
                setSelectedButton(`thu`);
              }}
            >
              <div key={dayNames} className="flex flex-col items-start">
                <h2 className="text-xl font-bold mb-3 text-center">{dayNames["thu"].toUpperCase()}</h2>
              </div>
            </button>
            <button
              style={{ backgroundColor: selectedButton === "tue" ? "#ff78b5" : "rgb(17 24 39)" }}
              className={`btn btn-block px-2 py-2 bg-pink-500 text-indigo-900 text-xs lg:text-base w-fit rounded border ${selectedButton === "Midgard" ? "border-pink-500 " : "border-gray-500"} hover:bg-pink-500 hover:border-pink-500 hover:scale-105`}
              onClick={() => {
                showSelectedDay("fri");
                setSelectedButton(`fri`);
              }}
            >
              <div key={dayNames} className="flex flex-col items-start">
                <h2 className="text-xl font-bold mb-3 text-center">{dayNames["fri"].toUpperCase()}</h2>
              </div>
            </button>
            <button
              style={{ backgroundColor: selectedButton === "tue" ? "#ff78b5" : "rgb(17 24 39)" }}
              className={`btn btn-block px-2 py-2 bg-pink-500 text-indigo-900 text-xs lg:text-base w-fit rounded border ${selectedButton === "Midgard" ? "border-pink-500 " : "border-gray-500"} hover:bg-pink-500 hover:border-pink-500 hover:scale-105`}
              onClick={() => {
                showSelectedDay("sat");
                setSelectedButton(`sat`);
              }}
            >
              <div key={dayNames} className="flex flex-col items-start">
                <h2 className="text-xl font-bold mb-3 text-center">{dayNames["sat"].toUpperCase()}</h2>
              </div>
            </button>
            <button
              style={{ backgroundColor: selectedButton === "tue" ? "#ff78b5" : "rgb(17 24 39)" }}
              className={`btn btn-block px-2 py-2 bg-pink-500 text-indigo-900 text-xs lg:text-base w-fit rounded border ${selectedButton === "Midgard" ? "border-pink-500 " : "border-gray-500"} hover:bg-pink-500 hover:border-pink-500 hover:scale-105`}
              onClick={() => {
                showSelectedDay("sun");
                setSelectedButton(`sun`);
              }}
            >
              <div key={dayNames} className="flex flex-col items-start">
                <h2 className="text-xl font-bold mb-3 text-center">{dayNames["sun"].toUpperCase()}</h2>
              </div>
            </button>
            {/* Her er vores knapper som er dynamisk genereret baseret på hver scene og */}
            {/*    <button
              style={{ backgroundColor: selectedButton === "Midgard" ? "#ff78b5" : "rgb(17 24 39)" }}
              className={`btn btn-block px-8 py-2 bg-pink-500 text-indigo-900 text-xs lg:text-base w-fit rounded border ${selectedButton === "Midgard" ? "border-pink-500 " : "border-gray-500"} hover:bg-pink-500 hover:border-pink-500 hover:scale-105`}
              onClick={() => {
                showSelectedScene(`Midgard`);
                setSelectedButton(`Midgard`);
              }}
            >
              Midgard
            </button>
            <button
              style={{ backgroundColor: selectedButton === "Vanaheim" ? "#882dc8" : "rgb(17 24 39)" }}
              className={`btn btn-block px-8 py-2 bg-purple-500 text-indigo-900 text-xs lg:text-base w-fit rounded border ${selectedButton === "Midgard" ? "border-purple-500 " : "border-gray-500"} hover:bg-purple-500 hover:border-purple-500 hover:scale-105`}
              onClick={() => {
                showSelectedScene(`Vanaheim`);
                setSelectedButton(`Vanaheim`);
              }}
            >
              Vanaheim
            </button>
            <button
              style={{ backgroundColor: selectedButton === "Jotunheim" ? "#f6dc19" : "rgb(17 24 39)" }}
              className={`btn px-8 py-2 bg-yellow-400 text-indigo-900 text-xs lg:text-base w-fit rounded border ${selectedButton === "Jotunheim" ? "border-yellow-400" : "border-gray-500"} hover:bg-yellow-400 hover:border-yellow-400 hover:scale-105`}
              onClick={() => {
                showSelectedScene(`Jotunheim`);
                setSelectedButton(`Jotunheim`);
              }}
            >
              Jotunheim
            </button> */}
            {/*     <button
              style={{ backgroundColor: selectedButton === "All stages" ? "rgb(17 24 39)" : "rgb(17 24 39)" }}
              className="btn px-8 py-2 bg-gray-900 text-gray-100 text-xs lg:text-base w-fit rounded border border-gray-500 hover:bg-gray-900 hover:border-gray-300 hover:scale-105"
              onClick={() => {
                showSelectedScene(`All stages`);
                setSelectedButton(`All stages`);
              }}
            >
              All stages
            </button> */}
          </div>
          <div className="flex items-center">{/* Render the rest of the component, using filteredBands instead of dataBands */}</div>

          {/* Her vises tidsplanen for hver ugedag */}
          <div className="mb-20 ring-4 ring-purple-950 ring-offset-4 ring-offset-slate-50 dark:ring-offset-cyan-300 rounded-3xl p-10 bg-fuchsia-950 opacity-90" style={{ fontFamily: "Syncopate, sans-serif", fontWeight: 400 }}>
            <button
              style={{ backgroundColor: selectedButton === "Midgard" ? "rgb(245, 158, 11)" : "rgb(17 24 39)" }}
              className={`btn btn-block px-8 py-2 bg-gray-900 text-gray-100 text-xs lg:text-base w-fit rounded border ${selectedButton === "Midgard" ? "border-amber-500" : "border-gray-500"} hover:bg-gray-900 hover:border-amber-500`}
              onClick={() => {
                showSelectedScene(`Midgard`);
                setSelectedButton(`Midgard`);
              }}
            >
              Midgard
            </button>
            <button
              style={{ backgroundColor: selectedButton === "Vanaheim" ? "rgb(16, 185, 129)" : "rgb(17 24 39)" }}
              className={`btn px-8 py-2 bg-gray-900 text-gray-100 text-xs lg:text-base w-fit rounded border ${selectedButton === "Vanaheim" ? "border-emerald-500" : "border-gray-500"} hover:bg-gray-900 hover:border-emerald-500`}
              onClick={() => {
                showSelectedScene(`Vanaheim`);
                setSelectedButton(`Vanaheim`);
              }}
            >
              Vanaheim
            </button>
            <button
              style={{ backgroundColor: selectedButton === "Jotunheim" ? "rgb(219, 39, 119)" : "rgb(17 24 39)" }}
              className={`btn px-8 py-2 bg-gray-900 text-gray-100 text-xs lg:text-base w-fit rounded border ${selectedButton === "Jotunheim" ? "border-pink-600" : "border-gray-500"} hover:bg-gray-900 hover:border-pink-600`}
              onClick={() => {
                showSelectedScene(`Jotunheim`);
                setSelectedButton(`Jotunheim`);
              }}
            >
              Jotunheim
            </button>

            {/* Her mappes hen over hver dag og scene for at generere en tidsplan */}
            <div className="flex flex-row items-center lg:grid lg:grid-cols-3  overflow-x-scroll overflow-y-hidden snap-mandatory scrollbar-hide scrollbar-hide">
              {/* Her mappes over hver handling udfra dag og scene */}
              {Object.keys(dataSchedule).map((scene) => {
                const schedule = dataSchedule[scene][dayName];
                const filteredSchedule = schedule.filter((slot) => slot.act.toLowerCase().includes(searchTerm.toLowerCase()));
                return filteredSchedule.map((slot, index) => {
                  // Condition for at filtrere handlinger udfra en valgt scene, så hvis der er valgt en scene, så vises kun handlinger fra den scene og hvis der ikke er valgt en scene, så vises alle handlinger fra alle scener.
                  if (selectedDay !== "All stages" && dayName !== selectedDay) {
                    return null;
                  }

                  // Her finder vi den nuværende handling og deres link og sender det med til ScheduleCard
                  const bandName = slot.act;
                  if (bandName === "break") return null;
                  // Her henter vi information om bandet og deres logo/billede
                  const bandInfo = getBandInfo(bandName);
                  const bandLogo = getBandLogo(bandInfo);
                  // Her finder vi næste handling og deres link og sender det med til ScheduleCard
                  const nextAct = schedule[index + 1];
                  4;
                  const nextActLink = getnextActlink(nextAct, schedule);

                  // Her returneres ScheduleCard med information om bandet, deres logo/billede, deres næste handling og deres link
                  if (bandName) {
                    return <ScheduleCard key={index} slug={bandName === "break" ? "/schedule" : `/artist/${bandInfo.slug}`} scene={scene} artist={slot.act} time={slot.start} src={bandLogo} logoCredits={bandInfo.logoCredits} nextTime={nextAct ? nextAct.start : "tomorrow"} nextBand={nextAct ? nextAct.act : "check schedule"} nextSlug={nextActLink} />;
                  }

                  return null;
                });
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
