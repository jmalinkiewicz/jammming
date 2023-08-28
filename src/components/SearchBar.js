import React from "react";
import styles from "../styles/SearchBar.module.css";

export default function SearchBar() {
  return (
    <>
      <label htmlFor="songName" className={styles.searchSongLabel}>
        Search a song:
      </label>
      <input
        id="songName"
        className={styles.textField}
        type="text"
        placeholder="title, artist or album"
      />
    </>
  );
}
