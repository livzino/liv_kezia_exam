"use client";
import "./globals.css";
import Hero from "../components/Hero";
import CountDown from "../components/CountDown";

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
    </main>
  );
}
