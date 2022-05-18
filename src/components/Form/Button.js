import React from "react";
import { UserContext } from "../../UserContext";
import styles from "./Button.module.css";

const Button = ({ children, ...props }) => {
  const { login } = React.useContext(UserContext);

  return (
    <button disabled={login} {...props} className={styles.btn}>
      {children}
    </button>
  );
};

export default Button;
