import React from "react";
import styles from "./Input.module.css";

const Input = ({ type, id, children, value, setValue, placeholder }) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={id}>
        {children}
      </label>
      <input
        className={styles.input}
        type={type}
        placeholder={placeholder}
        id={id}
        value={value}
        onChange={({ target }) => setValue(target.value)}
      />
      <p className={styles.error}>error</p>
    </div>
  );
};

export default Input;
