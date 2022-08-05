import React from "react";
import styles from "./Home.module.css";
import Feed from "./Feed/Feed";

const Home = () => {
  return (
    <div className={styles.home}>
      <Feed />
    </div>
  );
};

export default Home;
