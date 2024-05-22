"use client";
import Hero from "../components/Hero";
import CountDown from "../components/CountDown";
import CampMap from "../components/CampMap";
import Title from "../components/Title";
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
      <Title title="FESTIVAL OVERVIEW" />
      <br />
      <CampMap />
    </main>
  );
}
