import React from "react";
import styles from "../styles/Playlist.module.css";
import Track from "./Track";

export default function Playlist() {
  return (
    <form className={styles.playlistContainer}>
      <input
        className={styles.saveToSpotify}
        type="text"
        placeholder="Set title for new playlist"
      />
      <Track />
      <input
        className={styles.saveToSpotify}
        type="submit"
        value="Save to Spotify"
      />
    </form>
  );
}
