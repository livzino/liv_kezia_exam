// Angiver at denne fil skal behandles som en klient-side modul
"use client";

// Importer hooks fra React biblioteket
import { useEffect, useState } from "react";
// Importer url-konstanten fra konfigurationsfilen
import { url } from "/config";

// Definerer og eksporterer Spotify komponentet
function Spotify({ band }) {
  // Definerer state variabler til bands og spotifyId med initiale værdier
  const [bands, setBands] = useState([]);
  const [spotifyId, setSpotifyId] = useState("");

  // useEffect hook til at hente band data når komponentet bliver mountet
  useEffect(() => {
    // Asynkron funktion til at hente bands data fra API
    const fetchBands = async () => {
      const response = await fetch(`${url}/bands`);
      const data = await response.json();
      // Opdaterer state med hentede bands data
      setBands(data);
    };

    // Kalder fetchBands funktionen
    fetchBands();
  }, []); // Tom array som dependency for at sikre, at denne useEffect kun kører én gang ved komponent mount

  // useEffect hook til at finde og sætte Spotify ID når bands data eller band prop ændres
  useEffect(() => {
    // Funktion til at finde band match og sætte Spotify ID
    const getSpotifyId = () => {
      const bandMatch = bands.find((newBand) => newBand.slug === band.slug);
      if (bandMatch) {
        setSpotifyId(bandMatch.id);
      }
    };

    // Hvis bands array ikke er tomt, kalder vi getSpotifyId
    if (bands.length > 0) {
      getSpotifyId();
    }
  }, [bands, band]); // Kører denne useEffect hver gang bands eller band ændres

  // Returner null hvis spotifyId ikke er fundet endnu
  if (!spotifyId) {
    return null;
  }

  // Returner en div der indeholder Spotify embed player hvis spotifyId er fundet
  return (
    <div className="container mx-auto max-w-4xl px-6 mt-6 md:mt-12 flex items-center justify-center min-h-[352px]">
      {spotifyId ? (
        <iframe src={`https://open.spotify.com/embed/artist/${spotifyId}?utm_source=generator`} width="100%" height="352" loading="lazy"></iframe>
      ) : (
        // Viser en loading tekst hvis Spotify Player ikke er klar endnu
        <p className="text-rose-500" style={{ fontFamily: "Syncopate, sans-serif", fontWeight: 700 }}>
          Spotify Player Loading...
        </p>
      )}
    </div>
  );
}

// Eksporterer Spotify komponentet som standard eksport
export default Spotify;
