import BandBbl from "../../components/BandBbl";
import Title from "../../components/Title";
import Artist from "../../components/Artist";
import Head from "next/head";

export default function Lineup() {
  return (
    <>
      <Head>
        <title>FooFest Lineup - Top Kpop Stars and Acts</title>
        <meta name="description" content="Check out the FooFest 2024 lineup! From chart-topping headliners to rising stars, explore the incredible Kpop acts set to perform" />
      </Head>

      <main>
        <h1 className="visually-hidden">FooFest Lineup - Top Kpop Stars and Acts</h1>
        <Title title="HEADLINERS" />
        <BandBbl />
        <Title title="LINEUP" />
        <br />
        <Artist />
      </main>
    </>
  );
}
