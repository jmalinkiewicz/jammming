import React from "react";
import styles from "./Header.module.css";
import Spotify from "../../util/spotifyApi";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.jammmingHeading}>Jammming! 🎧🎶</h1>
      <a
        target="_blank"
        href="https://github.com/jmalinkiewicz"
        className={styles.button}
      >
        Author
      </a>
    </header>
  );
}
