import React from "react";
import SearchBar from "../components/SearchBar";
import styles from "../styles/Main.module.css";
import SearchButton from "../components/SearchButton";
import SearchResults from "../components/SearchResults";
import Playlist from "../components/Playlist";

export default function Main(props) {
  return (
    <>
      <div className={styles.headContainer}>
        <form>
          <SearchBar />
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
          setTracksUri={props.setTracksUri}
          setPlaylist={props.setPlaylist}
        />
      </div>
    </>
  );
}
