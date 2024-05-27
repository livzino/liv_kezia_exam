import Button from "../components/Button";
import Image from "next/image";
export default function Map() {
  return (
    <section className="map_container">
      <div>
        <p>Welcome to FooFest, the dream destination for K-pop lovers! Immerse yourself in a vibrant world filled with the beats and vibes of your favorite idols. Camp in areas themed after top groups like BTS, BLACKPINK, and TWICE, each offering its own unique atmosphere. Enjoy spectacular performances on stages inspired by legends like BIGBANG and SHINee. Celebrate, connect with fellow fans, and make unforgettable memories at FooFest, where K-pop comes to life in the most magical way!</p>
        <Button text="BOOK NOW" />
      </div>
      <div className="img_container">
        <Image src="./img/map.svg" width={100} height={100} alt="logo" />
      </div>
    </section>
  );
}
