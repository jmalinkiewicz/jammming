import React from "react";
import styles from "./Track.module.css";

export default function Track(props) {
  function handleClick() {
    if (props.symbol === "+") {
      props.action(props.title, props.artist, props.album, props.uri);
    } else {
      props.action(props.uri);
    }
  }

  return (
    <div className={styles.track}>
      <div className={styles.info}>
        <p>
          {props.title} - {props.artist}
        </p>
        <p>{props.album}</p>
      </div>
      <div className={styles.button}>
        <span onClick={handleClick}>{props.symbol}</span>
      </div>
    </div>
  );
}
