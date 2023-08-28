import React from "react";
import Track from "./Track";
import styles from "../styles/Tracklist.module.css";

export default function Tracklist(props) {
  return (
    <div className={styles.tracklistContainer}>
      {props.tracks.map((track) => (
        <Track
          title={track.title}
          author={track.author}
          album={track.album}
          id={track.id}
          uri={track.uri}
          action={props.addToPlaylist}
          symbol="+"
        />
      ))}
    </div>
  );
}
