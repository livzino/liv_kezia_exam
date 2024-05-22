import Image from "next/image";
export default function Ticket() {
  return (
    <div className="ticket">
      <div className="imgendag">
        <Image src="./img/moonbbl.svg" width={100} height={100} alt="starbbl" className="star" />
      </div>
      <div className="hrendags"></div>
      <h2 className="endags">ENDAGSBILLET</h2>
      <p>
        BILLETTEN GIVER
        <br /> ADGANG TORSDAG
        <br /> D 1.AUGUST
      </p>
      <h3 className="pris">799 DKK</h3>
    </div>
  );
}
