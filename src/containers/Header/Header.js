import React from "react";
import styles from "./Header.module.css";
import Spotify from "../../util/spotifyApi";

export default function Header() {
  function handleClick() {
    Spotify.getAccessToken();
  }

  return (
    <header className={styles.header}>
      <input
        className={styles.button}
        type="button"
        onClick={handleClick}
        value="Obtain token"
      />
      <h1 className={styles.jammmingHeading}>Jammming! 🎧🎶</h1>
      <a
        target="_blank"
        href="https://github.com/jmalinkiewicz"
        className={styles.button}
      >
        Artist
      </a>
    </header>
  );
}
