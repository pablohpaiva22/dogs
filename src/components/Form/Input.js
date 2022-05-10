import React from "react";
import styles from "./Input.module.css";

const Input = ({ type, id, children, placeholder }) => {
  const [value, setValue] = React.useState("");

  return (
    <div className={styles.input}>
      <label htmlFor={id}>{children}</label>
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        value={value}
        onChange={({ target }) => setValue(target.value)}
      />
    </div>
  );
};

export default Input;
