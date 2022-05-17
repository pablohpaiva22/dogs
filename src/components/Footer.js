import React from "react";
import styles from "./Footer.module.css";
import { ReactComponent as Dogs } from "../Assets/dogs.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.img}>
        <Dogs />
      </div>

      <p className={styles.text}>Dogs. Alguns direitos reservados</p>
    </footer>
  );
};

export default Footer;
