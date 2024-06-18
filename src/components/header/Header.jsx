import React, { useState } from "react";
import styles from "../header/Navbar.module.css";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  const removeActive = () => {
    setIsActive(false);
  };

  return (
    <div className="App">
      <header className="App-header" role="banner">
        <nav className={`${styles.navbar}`} role="navigation">
          <Link href="/">
            <Image src="/img/logo.webp" width={100} height={100} alt="logo shaped like flower with foo-fest inside" className="logo hover:scale-105" />
          </Link>

          <ul className={`${styles.navMenu} ${isActive ? styles.active : ""}`}>
            <li onClick={removeActive}>
              <Link href="/lineup" className={`${styles.navLink}`}>
                LINEUP
              </Link>
            </li>
            <li onClick={removeActive}>
              <Link href="/schedule" className={`${styles.navLink}`}>
                SCHEDULE
              </Link>
            </li>
            <li onClick={removeActive}>
              <Link href="/booking" className={`${styles.navLink}`}>
                BOOK NOW
              </Link>
            </li>
          </ul>

          <div
            className={`${styles.hamburger} ${isActive ? styles.active : ""}`}
            onClick={toggleActiveClass}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                toggleActiveClass();
              }
            }}
            role="button"
            tabIndex={0}
            aria-label="Toggle Menu">
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
