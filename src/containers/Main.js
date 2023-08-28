import React from "react";
import SearchBar from "../components/SearchBar";
import styles from "../styles/Main.module.css";
import SearchButton from "../components/SearchButton";
import SearchResults from "../components/SearchResults";
import Playlist from "../components/Playlist";

export default function Main() {
  return (
    <>
      <div className={styles.headContainer}>
        <form>
          <SearchBar />
          <SearchButton />
        </form>
      </div>
      <div className={styles.tracksContainer}>
        <SearchResults />
        <Playlist />
      </div>
    </>
  );
}
