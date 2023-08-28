import React from "react";
import Tracklist from "./Tracklist";
import styles from "../styles/SearchResults.module.css";

export default function SearchResults(props) {
  return (
    <div className={styles.searchResults}>
      <Tracklist tracks={props.results} addToPlaylist={props.addToPlaylist} />
    </div>
  );
}
