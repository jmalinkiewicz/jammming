import React from "react";
import styles from "../styles/Track.module.css";

export default function Track(props) {
  function handleClick() {
    if (props.symbol === "+") {
      props.action(props.title, props.author, props.album, props.id, props.uri);
    } else {
      props.action(props.id);
    }
  }

  return (
    <div className={styles.track}>
      <div className={styles.info}>
        <p>
          {props.title} - {props.author}
        </p>
        <p>{props.album}</p>
      </div>
      <div className={styles.button}>
        <span onClick={handleClick}>{props.symbol}</span>
      </div>
    </div>
  );
}
