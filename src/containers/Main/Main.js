import React, { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import styles from "./Main.module.css";
import SearchButton from "../../components/SearchButton/SearchButton";
import SearchResults from "../../components/SearchResults/SearchResults";
import Playlist from "../../components/Playlist/Playlist";
import Spotify from "../../util/spotifyApi";

export default function Main(props) {
  const [term, setTerm] = useState("");

  function handleSubmit(event) {
    props.search(term);
    event.preventDefault();
  }

  return (
    <>
      <div className={styles.headContainer}>
        <form onSubmit={handleSubmit}>
          <SearchBar term={term} setTerm={setTerm} />
          <SearchButton />
        </form>
      </div>
      <div className={styles.tracksContainer}>
        <SearchResults
          results={props.tracks}
          addToPlaylist={props.addToPlaylist}
        />
        <Playlist
          playlist={props.playlist}
          removeFromPlaylist={props.removeFromPlaylist}
          playlistTitle={props.playlistTitle}
          renamePlaylist={props.renamePlaylist}
          setPlaylist={props.setPlaylist}
        />
      </div>
    </>
  );
}
