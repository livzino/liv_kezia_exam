import BandBbl from "../../components/BandBbl";
import Title from "../../components/Title";

import Artist from "../../components/Artist";

export default function Lineup() {
  return (
    <>
      <head>
        <title>Lineup</title>
        <meta name="description" content="Lineup of the headliners and other acts"></meta>
      </head>

      <main>
        <Title title="HEADLINERS" />
        <BandBbl />
        <Title title="LINEUP" />
        <br />
        <Artist />
      </main>
    </>
  );
}
