"use client";

import { useEffect, useState } from "react";

import styles from "./MeowArticle.module.css";

function MeowArticle() {
  const [text, setText] = useState("loading....");

  useEffect(() => {
    fetch("https://meowfacts.herokuapp.com")
      .then((res) => res.json())
      .then((data) => setText(data.data[0]));
  }, []);
  return <div className={styles.article}>{text}</div>;
}

export default MeowArticle;
