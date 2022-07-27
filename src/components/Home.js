import React from "react";
import FeedPhotos from "./Feed/FeedPhotos";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <FeedPhotos />
    </div>
  );
};

export default Home;
