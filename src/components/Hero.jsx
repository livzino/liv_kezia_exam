import Image from "next/image";

export default function Hero() {
  return (
    <div>
      <Image src="/./img/heroimg.jpeg" width={700} height={700} alt="logo" className="logo" />{" "}
    </div>
  );
}
