import React from "react";
import styles from "./NotFound.module.css";
import { Helmet } from "react-helmet";

const NotFound = () => {
  return (
    <div className={`${styles.container} container`}>
      <Helmet>
        <title>Página não encontrada | Dogs</title>
      </Helmet>

      <h1 className="title">Error 404</h1>
      <p>Página não encontrada.</p>
    </div>
  );
};

export default NotFound;
