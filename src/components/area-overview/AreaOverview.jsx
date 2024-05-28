import styles from "./AreaOverview.module.css";
import { useState } from "react";
import Image from "next/image"; // Import Image from next.js

function AreaOverview() {
  const [showStage, setShowStage] = useState("");
  const [toggleLegend, setToggleLegend] = useState("");

  return (
    <div className={styles.componentWrapper}>
      <section className={styles.labelWrapper}>
        <span
          onClick={() => {
            setShowStage("");
          }}
          className={showStage !== "" ? `${styles.show}` : `${styles.hide}`}>
          Hide labels
        </span>
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
        {/* STAGES */}
        <Image src="../../img/Vanaheim.svg" alt="Vanaheim" width={50} height={50} className={`${styles.mapImage} ${styles.vanaheimImg}`} onClick={() => setShowStage("Vanaheim")} />
        <Image src="../../img/Midgard.svg" alt="Midgard" width={150} height={150} className={`${styles.mapImage} ${styles.midgardImg}`} onClick={() => setShowStage("Midgard")} />
        <Image src="../../img/Jotunheim.svg" alt="Jotunheim" width={150} height={150} className={`${styles.mapImage} ${styles.jotunheimImg}`} onClick={() => setShowStage("Jotunheim")} />

        {/* STAGES */}
        <Image src="../../img/Helheim.svg" alt="Helheim" width={150} height={150} className={`${styles.mapImage} ${styles.helheimImg}`} onClick={() => setShowStage("Helheim")} />
        <Image src="../../img/Svartheim.svg" alt="Svartheim" width={150} height={150} className={`${styles.mapImage} ${styles.svartheimImg}`} onClick={() => setShowStage("Svartheim")} />
        <Image src="../../img/Muspelheim.svg" alt="Muspelheim" width={150} height={150} className={`${styles.mapImage} ${styles.muspelheimImg}`} onClick={() => setShowStage("Muspelheim")} />
        <Image src="../../img/Niflheim.svg" alt="Niflheim" width={150} height={150} className={`${styles.mapImage} ${styles.niflheimImg}`} onClick={() => setShowStage("Niflheim")} />
        <Image src="../../img/Alfheim.svg" alt="Alfheim" width={150} height={150} className={`${styles.mapImage} ${styles.alfheimImg}`} onClick={() => setShowStage("Alfheim")} />
      </div>
      <section className={styles.legendWrapper}>
        <div>
          <span
            onClick={() => {
              toggleLegend === "" ? setToggleLegend("toggled") : setToggleLegend("");
            }}>
            {toggleLegend === "" ? "SHOW" : "HIDE"}
          </span>
        </div>
        <div className={toggleLegend === "toggled" ? styles.showLegend : styles.hideLegend}>
          <ul>
            <li>
              <h4>STAGES</h4>
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

export default AreaOverview;
