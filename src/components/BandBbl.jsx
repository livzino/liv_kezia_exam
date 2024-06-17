import Image from "next/image";

export default function BandBbl() {
  return (
    <main className="container mx-auto p-4">
      <section className="flex justify-center gap-10 mb-10 ">
        <Image src="/img/bandbbl1.webp" width={500} height={500} alt="soap bubble with kpop artist inside" className="w-full h-full object-cover rounded-full hover:scale-110" />
        <Image src="/img/bandbbl2.webp" width={500} height={500} alt="soap bubble with kpop artist inside" className="w-full h-full object-cover rounded-full hover:scale-110" />
      </section>

      <section className="flex justify-center gap-20 mb-10">
        <Image src="/img/bandbbl3.webp" width={300} height={300} alt="soap bubble with kpop artist inside" className="w-full h-full object-cover rounded-full hover:scale-110" />
        <Image src="/img/bandbbl4.webp" width={300} height={300} alt="soap bubble with kpop artist inside" className="w-full h-full object-cover rounded-full hover:scale-110" />
        <Image src="/img/bandbbl1.webp" width={300} height={300} alt="soap bubble with kpop artist inside" className="w-full h-full object-cover rounded-full hover:scale-110" />
      </section>
      <section className="flex justify-center gap-24 mb-10">
        <Image src="/img/bandbbl6.webp" width={250} height={250} alt="soap bubble with kpop artist inside" className="w-full h-full object-cover rounded-full hover:scale-110" />
        <Image src="/img/bandbbl7.webp" width={250} height={250} alt="soap bubble with kpop artist inside" className="w-full h-full object-cover rounded-full hover:scale-110" />
      </section>
    </main>
  );
}
