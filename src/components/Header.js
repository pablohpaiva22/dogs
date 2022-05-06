import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { ReactComponent as Dogs } from "../Assets/dogs.svg";
import { ReactComponent as Usuario } from "../Assets/usuario.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link to="/" aria-label="Dogs - Home">
          <Dogs />
        </Link>

        <Link className={styles.loginButton} to="login">
          Login / Criar
          <span>
            <Usuario />
          </span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
