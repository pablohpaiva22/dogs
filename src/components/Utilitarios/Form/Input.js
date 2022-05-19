import React from "react";
import styles from "./Input.module.css";

const Input = ({ type, id, label, value, onChange, error, onBlur }) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>

      <input
        className={styles.input}
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />

      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Input;
