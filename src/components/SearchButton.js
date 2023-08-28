import React from "react";
import styles from "../styles/SearchButton.module.css";

export default function SearchButton() {
  return <input className={styles.search} value="Search" type="submit" />;
}
