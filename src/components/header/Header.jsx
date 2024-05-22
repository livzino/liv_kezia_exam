/* import Image from "next/image"; */
import React from "react";
import { useState } from "react";
import styles from "../header/Navbar.module.css";
import Image from "next/image";
function Navbar() {
  // adding the states
  const [isActive, setIsActive] = useState(false);
  //add the active class
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };
  //clean up function to remove the active class
  const removeActive = () => {
    setIsActive(false);
  };
  return (
    <div className="App">
      <header className="App-header">
        <nav className={`${styles.navbar}`}>
          {/* logo */}
          <a href="#home" className={`${styles.logo}`}>
            <Image src="./img/logo.svg" width={100} height={100} alt="logo" className="logo" />
          </a>
          <ul className={`${styles.navMenu} ${isActive ? styles.active : "ul"}`}>
            <li onClick={removeActive}>
              <a href="#home" className={`${styles.navLink}`}>
                LINEUP
              </a>
            </li>
            <li onClick={removeActive}>
              <a href="#home" className={`${styles.navLink}`}>
                SCHEDULE
              </a>
            </li>
            <li onClick={removeActive}>
              <a href="#home" className={`${styles.navLink}`}>
                BOOK NOW
              </a>
            </li>
          </ul>
          <div className={`${styles.hamburger} ${isActive ? styles.active : ""}`} onClick={toggleActiveClass}>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
          </div>
        </nav>
      </header>
    </div>
  );
}
export default Navbar;

/* export default function Header() {
  return (
    <header>
      <div class="head">
        <a href="">
          <Image src="./img/logo.svg" width={100} height={100} alt="logo" className="logo" />
        </a>
        <button id="btn-mobile">☰</button>
      </div>
      <nav>
        <ul>
          <li>
            <a href="">
              <span>LINEUP</span>
            </a>
          </li>
          <li>
            <a href="">
              <span>SCHEDULE</span>
            </a>
          </li>
          <li>
            <a href="">
              <span>BOOK NOW</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
 */
