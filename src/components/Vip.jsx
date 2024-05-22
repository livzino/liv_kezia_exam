import Image from "next/image";

export default function Vip() {
  return (
    <div className="vip">
      <div className="imgv">
        <Image src="./img/starbbl.svg" width={100} height={100} alt="starbbl" className="star" />
      </div>
      <div className="hrvip"></div>
      <h2 className="fullweek">
        ADGANG ALLE
        <br /> FESTIVALENS DAGE
      </h2>

      <p>
        1.-2.-3.- AUGUST
        <br /> WHATS NOT TO LOVE?
      </p>
      <h3 className="price">1299 DKK</h3>
    </div>
  );
}
