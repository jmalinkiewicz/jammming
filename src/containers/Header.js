import React from "react";
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.jammmingHeading}>Jammming! 🎧🎶</h1>
      <a
        target="_blank"
        href="https://github.com/jmalinkiewicz"
        className={styles.author}
      >
        Author
      </a>
    </header>
  );
}
