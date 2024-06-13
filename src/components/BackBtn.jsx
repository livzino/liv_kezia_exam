// Angiver at denne fil skal behandles som en klient-side modul
"use client";

// Eksporterer BackBtn komponentet som standard
export default function BackBtn() {
  // Funktion til at gå tilbage i browserens historik, når knappen klikkes
  const goBack = () => {
    // Tjekker om vinduet er defineret for at undgå fejl i server-side rendering
    if (typeof window !== "undefined") {
      window.history.back(); // Går tilbage i browserens historik
    }
  };

  // Returnerer en knap med en onClick begivenhed for at aktivere goBack funktionen
  return (
    <button onClick={goBack} className="text-m bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600  backdrop-blur-md transition-all hover:scale-105 border-4 border-lime-400 rounded-2xl text-lime-400 cursor-pointer h-14 px-12 max-w-s mb-8">
      &#8592; BACK
    </button>
  );
}
