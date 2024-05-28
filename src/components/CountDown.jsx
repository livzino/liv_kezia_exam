//Link til video: https://www.youtube.com/watch?v=4AiNjV_ef1o

// Importerer nødvendige hooks fra React-biblioteket
import { useEffect, useState } from "react";

// Definerer en funktionel komponent kaldet CountDown, som tager en prop 'targetDate'
export default function CountDown({ targetDate }) {
  // Definerer state-variabler for dage, timer, minutter og sekunder
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  // Brug useEffect hook til at opdatere nedtællingen hvert sekund
  useEffect(() => {
    // Opretter et interval, der kører hver sekund (1000 millisekunder)
    const timerId = setInterval(() => {
      // Henter nuværende tidspunkt
      const now = new Date().getTime();
      // Beregner forskellen mellem targetDate og nuværende tidspunkt i sekunder
      const distance = (targetDate - now) / 1000;
      // Hvis forskellen er positiv (dvs. fremtidig dato)
      if (distance > 0) {
        // Beregner dage, timer, minutter og sekunder fra forskellen
        const days = Math.floor(distance / 60 / 60 / 24);
        const hours = Math.floor((distance / 60 / 60) % 24);
        const minutes = Math.floor((distance / 60) % 60);
        const seconds = Math.floor(distance % 60);
        // Opdaterer state-variablerne med de beregnede værdier
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      } else {
        // Hvis forskellen er 0 eller negativ (dvs. tid er udløbet), stop intervallet
        clearInterval(timerId);
      }
    }, 1000);
    // Rydder op ved at stoppe intervallet, når komponenten unmountes eller targetDate ændres
    return () => clearInterval(timerId);
  }, [targetDate]);

  // Returnerer JSX som viser nedtællingen
  return (
    <div className="countdown">
      <div className="time">
        <div>{days}</div>
        <p>Day</p>
      </div>
      <div className="time">
        <div>{hours}</div>
        <p>Hour</p>
      </div>
      <div className="time">
        <div>{minutes}</div>
        <p>Minute</p>
      </div>
      <div className="time">
        <div>{seconds}</div>
        <p>Second</p>
      </div>
    </div>
  );
}
