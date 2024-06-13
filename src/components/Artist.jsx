// Angiver at denne fil skal behandles som en klient-side modul
"use client";

// Importerer useState og useEffect hooks fra React biblioteket
import { useState, useEffect } from "react";
// Importerer url-konstanten fra konfigurationsfilen
import { url } from "/config";
// Importerer Link komponentet fra Next.js til navigation mellem sider
import Link from "next/link";
// Importerer React fra React biblioteket (ikke nødvendig hvis React versionen er nyere end 17)
import React from "react";

// Definerer og eksporterer Hero komponentet som standard
export default function Hero() {
  // Definerer state variabler til siderne med initiale tomme arrays
  const [pages1, setPages1] = useState([]);
  const [pages2, setPages2] = useState([]);

  // useEffect hook til at hente data når komponentet mountes
  useEffect(() => {
    // Asynkron funktion til at hente data fra API
    const fetchData = async () => {
      const res = await fetch(`${url}/bands`);
      const data = await res.json();
      // Opdeler data i to sider
      const bands1 = data.slice(0, 10);
      const bands2 = data.slice(11, 100);

      // Opdaterer state med de hentede data
      setPages1(bands1);
      setPages2(bands2);
    };

    // Kalder fetchData funktionen
    fetchData();
  }, []); // Tom array som dependency for at sikre, at denne useEffect kun kører én gang ved komponent mount

  // Hvis der ikke er indlæst data, vises en loading skærm
  if (pages1.length === 0 || pages2.length === 0)
    return (
      <div className="flex mx-auto flex-col gap-6 items-center justify-center w-full lg:h-[460px]">
        <div className="loading loading-ring text-slate-100 w-16"></div>
      </div>
    );

  // Returnerer Hero komponentens UI
  return (
    <div className="hero flex flex-col lg:h-full bg-violet-950 py-10 px-5">
      <div className="hero-content text-center">
        {/* Viser de første 10 bands som links */}
        <ul className="flex flex-wrap justify-center gap-2 md:gap-4 text-3xl md:text-6xl w-fit font-extrabold tracking-tight lg:tracking-normal">
          {pages1.map((band, index, array) => {
            return (
              <React.Fragment key={band.slug}>
                <li>
                  <Link prefetch={false} href={`/artist/${band.slug}`} className=" text-pink-500 hover:text-pink-800 transition text-stroke-1 hover:text-stroke-0">
                    {band.name}
                  </Link>
                </li>
                {index !== array.length - 1 && <li className=" text-fuchsia-300 font-extralight"> / </li>}
              </React.Fragment>
            );
          })}
        </ul>
      </div>
      <div className="hero-content px-2 mt-2">
        {/* Viser resten af bands som links */}
        <nav className="">
          <ul className="flex grow flex-wrap justify-center gap-2 text-xs lg:text-xl ">
            {pages2.map((band, index, array) => {
              return (
                <React.Fragment key={band.slug}>
                  <li className="text-lime-400 hover:text-emerald-900 transition-colors" key={band.slug}>
                    <Link prefetch={false} href={`/artist/${band.slug}`} key={band.slug}>
                      {band.name}
                    </Link>
                  </li>
                  {index !== array.length - 1 && <li className="text-sky-600"> / </li>}
                </React.Fragment>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}
