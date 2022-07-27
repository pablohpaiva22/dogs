import React from "react";
import { UserContext } from "../../UserContext";
import styles from "./FeedPhotosItem.module.css";

const FeedPhotosItem = ({ photo }) => {
  const { setModal, setPhotoId } = React.useContext(UserContext);

  const handleClick = () => {
    setModal(true);
    setPhotoId(photo.id);
  };

  return (
    <>
      <li onClick={handleClick} className={`${styles.photo}`}>
        <img src={photo.src} alt={photo.title} />
        <span className={styles.visualizacao}>{photo.acessos}</span>
      </li>
    </>
  );
};

export default FeedPhotosItem;
