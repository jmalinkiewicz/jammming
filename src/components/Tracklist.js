import React from "react";
import Track from "./Track";
import styles from "../styles/Tracklist.module.css";

export default function Tracklist() {
  return (
    <div className={styles.tracklistContainer}>
      <Track />
      <Track />
      <Track />
      <Track />
      <Track />
      <Track />
      <Track />
    </div>
  );
}
