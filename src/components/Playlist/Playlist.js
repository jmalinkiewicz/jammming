import React from "react";
import styles from "./Playlist.module.css";
import Track from "../Track/Track";

export default function Playlist(props) {
  function handleChange(e) {
    props.renamePlaylist(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.setPlaylist([]);
  }

  return (
    <form onSubmit={handleSubmit} className={styles.playlistContainer}>
      <input
        className={styles.saveToSpotify}
        type="text"
        placeholder="Set title for new playlist"
        value={props.playlistTitle}
        onChange={handleChange}
      />
      {props.playlist.map((track) => (
        <Track
          title={track.title}
          artist={track.artist}
          album={track.album}
          symbol="-"
          action={props.removeFromPlaylist}
          key={track.uri}
          uri={track.uri}
        />
      ))}
      <input
        className={styles.saveToSpotify}
        type="submit"
        value="Save to Spotify"
      />
    </form>
  );
}
