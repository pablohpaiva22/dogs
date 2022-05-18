import React from "react";
import { UserContext } from "../../UserContext";
import styles from "./Button.module.css";

const Button = ({ children, ...props }) => {
  const { btnDisable } = React.useContext(UserContext);

  return (
    <>
      {btnDisable ? (
        <button disabled={btnDisable} {...props} className={styles.btn}>
          Carregando...
        </button>
      ) : (
        <button disabled={btnDisable} {...props} className={styles.btn}>
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
