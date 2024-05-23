"use client";
import Hero from "../components/Hero";
import CountDown from "../components/CountDown";
import CampMap from "../components/CampMap";
import Title from "../components/Title";
import Ticket from "../components/Ticket";
import Vip from "../components/Vip";

export default function Home() {
  const targetDate = new Date("Jun 26, 2024").getTime();
  return (
    <main>
      <div className="heroflex">
        <Hero></Hero>
        <div className="countd">
          <CountDown targetDate={targetDate} />
        </div>
      </div>
      <br />
      <Title title="TICKETS" />

      <div className="ticketflex">
        <div>
          <h2 className="ticketh">REGULAR</h2>
          <Ticket />
        </div>
        <div>
          <h2 className="tickethv">VIP</h2>
          <Vip />
        </div>
      </div>
      <Title title="FESTIVAL OVERVIEW" />
      <br />
      <CampMap />
    </main>
  );
}
