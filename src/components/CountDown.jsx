"use client";
import { useEffect, useState } from "react";

export default function CountDown({ targetDate }) {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      const now = new Date().getTime();
      const distance = (targetDate - now) / 1000;
      if (distance > 0) {
        const days = Math.floor(distance / 60 / 60 / 24);
        const hours = Math.floor((distance / 60 / 60) % 24);
        const minutes = Math.floor((distance / 60) % 60);
        const seconds = Math.floor(distance % 60);
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      } else {
        clearInterval(timerId);
      }
    }, 1000);
    return () => clearInterval(timerId);
  }, [targetDate]);

  return (
    <div className="flex flex-row p-24 justify-center items-center bg-rose-600 h-full flex-grow">
      <div className="text-lg font-thin text-center md:text-1xl lg:text-4xl">
        <div className="bg-violet-950 place-items-center text-white rounded-md p-2 mb-4">{days}</div>
        <p>DAY</p>
      </div>
      <div className="text-lg font-thin text-center mx-4 md:text-1xl lg:text-4xl">
        <div className="bg-violet-950  place-items-center text-white rounded-md p-2 mb-4">{hours}</div>
        <p>HOUR</p>
      </div>
      <div className="text-lg font-thin text-center mx-4 md:text-1xl lg:text-4xl">
        <div className="bg-violet-950  place-items-center text-white rounded-md p-2 mb-4">{minutes}</div>
        <p>MINUTE</p>
      </div>
      <div className="text-lg font-thin text-center mx-4 md:text-1xl lg:text-4xl">
        <div className="bg-violet-950 place-items-center text-white rounded-md p-2 mb-4">{seconds}</div>
        <p>SECOND</p>
      </div>
    </div>
  );
}
