import React from "react";
import { UserContext } from "../../UserContext";
import styles from "./Button.module.css";

const Button = ({ children, ...props }) => {
  return (
    <>
      <button {...props} className={styles.btn}>
        {children}
      </button>
    </>
  );
};

export default Button;
