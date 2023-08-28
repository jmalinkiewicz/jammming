import React from "react";
import Tracklist from "./Tracklist";
import styles from "../styles/SearchResults.module.css";

export default function SearchResults() {
  return (
    <div className={styles.searchResults}>
      <Tracklist />
    </div>
  );
}
