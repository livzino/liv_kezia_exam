// Importerer React og nødvendige komponenter
import React from "react";
import PlayingTime from "@/components/PlayingTime";
import BackBtn from "@/components/BackBtn";
import Spotify from "@/components/Spotify";
import Title from "@/components/Title";
import { url } from "/config";
import Image from "next/image";

// Funktion til at generere statiske stier for hver band
export async function generateStaticParams() {
  const bands = await fetch(`${url}/bands`).then((res) => res.json());
  return bands.map((band) => ({
    slug: band.slug,
  }));
}

// Funktion til at generere metadata for hvert band, der skal bruges i <head> på siden
export async function generateMetadata({ params }) {
  const bands = await fetch(`${url}/bands`).then((res) => res.json());

  const { slug } = params;
  const band = bands.find((band) => band.slug === slug);

  return {
    title: band ? band.name : "Band not found",
    description: band ? band.bio : "No description available",
  };
}

// Funktion til at rendere selve siden
export default async function Page({ params }) {
  const bands = await fetch(`${url}/bands`).then((res) => res.json());
  const { slug } = params;
  const band = bands.find((band) => band.slug === slug);

  // Funktion til at hente bandets logo
  const getBandLogo = (band) => {
    if (band.logo?.startsWith("https")) {
      return band.logo;
    }
    return `${url}/logos/${band.logo}`;
  };

  // Henter bandets logo
  band.logo = getBandLogo(band);

  return (
    <>
      <main>
        {/* Hovedsektionen af siden */}
        <div key={band.slug} className="container mx-auto px-4">
          {/* Titlen på bandet */}
          <Title title={band.name} />
          {/* Knapper tilbage og spilletid */}
          <div className="flex justify-between m-4 gap-4">
            <BackBtn />
            <PlayingTime band={band} />
          </div>
          {/* Sektionen om bandet */}
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="relative z-10">
              <Image src={band.logo} width={700} height={700} alt="kpop band logo" class="h-full w-full object-cover rounded-3xl" />
            </div>
            <div class="relative z-20 md:-ml-12 bg-violet-400 border-lime-300 border-4 border-solid p-6 rounded-3xl text-white font-montserrat">
              <h2 class="uppercase tracking-tight text-3xl text-lime-300 font-bold">OM:</h2>
              <p class="mt-2">{band.bio}</p>
            </div>
          </div>

          {/* Spotify-afspilleren */}
          <div className="mt-6  mb-8 lg:mt-12">
            <Spotify band={band} />
          </div>
        </div>
      </main>
    </>
  );
}
