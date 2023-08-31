import React from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import styles from "./Main.module.css";
import SearchButton from "../../components/SearchButton/SearchButton";
import SearchResults from "../../components/SearchResults/SearchResults";
import Playlist from "../../components/Playlist/Playlist";

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
