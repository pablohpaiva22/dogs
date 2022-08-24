import React from "react";
import styles from "./Home.module.css";
import Feed from "./Feed/Feed";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <section className={styles.home}>
      <Helmet>
        <title>Home | Dogs</title>
      </Helmet>

      <Feed />
    </section>
  );
};

export default Home;
