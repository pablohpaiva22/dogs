import React from "react";
import { useLocation } from "react-router-dom";
import styles from "../Utilitarios/AccountTitle.module.css";

const AccountTitle = () => {
  const [title, setTitle] = React.useState();
  const { pathname } = useLocation();

  React.useEffect(() => {
    const getPath = () => {
      switch (pathname) {
        case "/conta/postar":
          setTitle("Poste Sua Foto");
          break;
        case "/conta/estatistica":
          setTitle("Estatística");
          break;
        default:
          setTitle("Minha conta");
      }
    };

    getPath();
  }, [pathname]);

  return <h1 className={styles.title}>{title}</h1>;
};

export default AccountTitle;
