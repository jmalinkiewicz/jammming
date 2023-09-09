import React from "react";
import Track from "../Track/Track";
import styles from "./Tracklist.module.css";

export default function Tracklist(props) {
  return (
    <div className={styles.tracklistContainer}>
      {props.tracks.map((track) => (
        <Track
          title={track.name}
          album={track.album}
          artist={track.artist}
          uri={track.uri}
          action={props.addToPlaylist}
          symbol="+"
          key={track.uri}
        />
      ))}
    </div>
  );
}
