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
    <div className=" flex flex-row p-24 pl-7 co bg-rose-600 h-96 w-full sm:w-full md:w-full md:h-full justify-center ">
      <div className="text-lg font-bold text-center ">
        <div className="bg-violet-950 grid place-items-center text-white rounded-md text-3xl p-2">{days}</div>
        <p>DAY</p>
      </div>
      <div className="text-lg font-bold text-center mx-4">
        <div className="bg-violet-950 grid place-items-center text-white rounded-md text-3xl p-2">{hours}</div>
        <p>HOUR</p>
      </div>
      <div className="text-lg font-bold text-center mx-4">
        <div className="bg-violet-950 grid place-items-center text-white rounded-md text-3xl p-2">{minutes}</div>
        <p>MINUTE</p>
      </div>
      <div className="text-lg font-bold text-center mx-4">
        <div className="bg-violet-950 grid place-items-center text-white rounded-md text-3xl p-2">{seconds}</div>
        <p>SECOND</p>
      </div>
    </div>
  );
}
