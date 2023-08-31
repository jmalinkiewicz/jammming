import React from "react";
import styles from "./Playlist.module.css";
import Track from "../Track/Track";

export default function Playlist(props) {
  function handleChange(e) {
    props.renamePlaylist(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const URIs = props.playlist.map((track) => track.uri);
    props.setTracksUri(URIs);
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
          author={track.author}
          album={track.album}
          id={track.id}
          symbol="-"
          action={props.removeFromPlaylist}
          key={track.id}
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
