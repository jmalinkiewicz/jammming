import React from "react";
import Tracklist from "../Tracklist/Tracklist";
import styles from "./SearchResults.module.css";

export default function SearchResults(props) {
  return (
    <div className={styles.searchResults}>
      <Tracklist tracks={props.results} addToPlaylist={props.addToPlaylist} />
    </div>
  );
}
