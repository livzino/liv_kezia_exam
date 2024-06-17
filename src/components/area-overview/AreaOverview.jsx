import styles from "./AreaOverview.module.css"; // Importerer CSS-modulet til denne komponent
import { useState } from "react"; // Importerer useState hook fra React
import Image from "next/image"; // Importerer Image komponent fra Next.js til optimeret billedhåndtering

function AreaOverview() {
  // Definerer to state-variabler, showStage og toggleLegend, med initiale værdier som tomme strenge
  const [showStage, setShowStage] = useState("");
  const [toggleLegend, setToggleLegend] = useState("");

  return (
    <div className={styles.componentWrapper}>
      <section className={styles.labelWrapper}>
        <span
          onClick={() => {
            // Sætter showStage til en tom streng, når dette span-element klikkes
            setShowStage("");
          }}
          // Bruger CSS-klasser baseret på, om showStage er en tom streng eller ej
          className={showStage !== "" ? `${styles.show}` : `${styles.hide}`}
        >
          Hide labels
        </span>
        {/* Gentagne div-elementer for hvert område, som vises eller skjules baseret på værdien af showStage */}
        <div className={showStage === "Vanaheim" ? `${styles.show} ${styles.vanaheim}` : `${styles.hide} ${styles.vanaheim}`}>
          <h3>Vanaheim</h3>
          <p>Stage</p>
        </div>
        <div className={showStage === "Midgard" ? `${styles.show} ${styles.midgard}` : `${styles.hide} ${styles.midgard}`}>
          <h3>Midgard</h3>
          <p>Stage</p>
        </div>
        <div className={showStage === "Jotunheim" ? `${styles.show} ${styles.jotunheim}` : `${styles.hide} ${styles.jotunheim}`}>
          <h3>Jotunheim</h3>
          <p>Stage</p>
        </div>
        <div className={showStage === "Svartheim" ? `${styles.show} ${styles.svartheim}` : `${styles.hide} ${styles.svartheim}`}>
          <h3>Svartheim</h3>
          <p>Camping site</p>
        </div>
        <div className={showStage === "Niflheim" ? `${styles.show} ${styles.niflheim}` : `${styles.hide} ${styles.niflheim}`}>
          <h3>Niflheim</h3>
          <p>Camping site</p>
        </div>
        <div className={showStage === "Helheim" ? `${styles.show} ${styles.helheim}` : `${styles.hide} ${styles.helheim}`}>
          <h3>Helheim</h3>
          <p>Camping site</p>
        </div>
        <div className={showStage === "Muspelheim" ? `${styles.show} ${styles.muspelheim}` : `${styles.hide} ${styles.muspelheim}`}>
          <h3>Muspelheim</h3>
          <p>Camping site</p>
        </div>
        <div className={showStage === "Alfheim" ? `${styles.show} ${styles.alfheim}` : `${styles.hide} ${styles.alfheim}`}>
          <h3>Alfheim</h3>
          <p>Camping site</p>
        </div>
      </section>
      <div className={styles.mapWrapper}>
        {/* Billedkomponenter for hvert område, der bruger Next.js's Image komponent til optimering */}
        {/* Når et billede klikkes, sættes showStage til navnet på det relevante område */}
        <Image src="/img/Vanaheim.webp" alt="Vanaheim stage icon" width={50} height={50} className={`${styles.mapImage} ${styles.vanaheimImg}`} onClick={() => setShowStage("Vanaheim")} />
        <Image src="/img/Midgard.webp" alt="Midgard stage icon" width={150} height={150} className={`${styles.mapImage} ${styles.midgardImg}`} onClick={() => setShowStage("Midgard")} />
        <Image src="/img/Jotunheim.webp" alt="Jotunheim stage icon" width={150} height={150} className={`${styles.mapImage} ${styles.jotunheimImg}`} onClick={() => setShowStage("Jotunheim")} />

        <Image src="/img/Helheim.webp" alt="Helheim camp icon" width={150} height={150} className={`${styles.mapImage} ${styles.helheimImg}`} onClick={() => setShowStage("Helheim")} />
        <Image src="/img/Svartheim.webp" alt="Svartheim camp icon" width={150} height={150} className={`${styles.mapImage} ${styles.svartheimImg}`} onClick={() => setShowStage("Svartheim")} />
        <Image src="/img/Muspelheim.webp" alt="Muspelheim camp icon" width={150} height={150} className={`${styles.mapImage} ${styles.muspelheimImg}`} onClick={() => setShowStage("Muspelheim")} />
        <Image src="/img/Niflheim.webp" alt="Niflheim camp icon" width={150} height={150} className={`${styles.mapImage} ${styles.niflheimImg}`} onClick={() => setShowStage("Niflheim")} />
        <Image src="/img/Alfheim.webp" alt="Alfheim camp icon" width={150} height={150} className={`${styles.mapImage} ${styles.alfheimImg}`} onClick={() => setShowStage("Alfheim")} />
      </div>
      <section className={styles.legendWrapper}>
        <div>
          <span
            onClick={() => {
              // Skifter mellem at vise og skjule legend-sektionen
              toggleLegend === "" ? setToggleLegend("toggled") : setToggleLegend("");
            }}
          >
            {toggleLegend === "" ? "SHOW" : "HIDE"}
          </span>
        </div>
        {/* Viser eller skjuler legend baseret på toggleLegend's værdi */}
        <div className={toggleLegend === "toggled" ? styles.showLegend : styles.hideLegend}>
          <ul>
            <li>
              <h4 style={{ fontFamily: "Syncopate, sans-serif", fontWeight: 700 }}>STAGES</h4>
            </li>
            <li>Vanaheim</li>
            <li>Midgard</li>
            <li>Jotunheim</li>
          </ul>
          <ul>
            <li>
              <h4>CAMPING SITES</h4>
            </li>
            <li>Alfheim</li>
            <li>Helheim</li>
            <li>Muspelheim</li>
            <li>Niflheim</li>
            <li>Svartheim</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default AreaOverview; // Eksporterer komponenten til brug andre steder
