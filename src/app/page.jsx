"use client";
import "./globals.css";
import Hero from "../components/Hero";
import CountDown from "../components/CountDown";
import Ticket from "../components/Ticket";
import Vip from "../components/Vip";

export default function Home() {
  return (
    <main>
      <h1>Hej</h1>
      <div className="heroflex">
        <Hero></Hero>
        <div className="countd">
          <CountDown />
        </div>
      </div>
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
    </main>
  );
}
