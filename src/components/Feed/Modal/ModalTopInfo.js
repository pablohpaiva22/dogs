import React from "react";
import { Link } from "react-router-dom";
import styles from "./ModalTopInfo.module.css";

const ModalTopInfo = ({ data }) => {
  return (
    <div className={styles.topInfo}>
      <Link className={styles.linkProfile} to={`/profile/${data.photo.author}`}>
        @{data.photo.author}
      </Link>
      <div>
        <span className={`${styles.visualization}`}>{data.photo.acessos}</span>
      </div>
    </div>
  );
};

export default ModalTopInfo;
