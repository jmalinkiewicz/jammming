import React, { useState } from "react";
import styles from "./Playlist.module.css";
import Track from "../Track/Track";

export default function Playlist(props) {
  const [title, setTitle] = useState("");
  let URIs = props.playlist.map((track) => track.uri);

  function handleChange(e) {
    setTitle(e.target.value);
  }

  function handleSubmit(e) {
    if (URIs.count > 0 && title) {
      e.preventDefault();
      props.createNewPlaylist(title, URIs);
      props.setPlaylist([]);
      URIs = [];
    } else {
      window.alert("Please populate the playlist before submitting.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.playlistContainer}>
      <input
        className={styles.saveToSpotify}
        type="text"
        placeholder="Set title for new playlist"
        value={title}
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
      <input className={styles.saveToSpotify} type="submit" />
    </form>
  );
}
