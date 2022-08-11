import React from "react";
import { UserContext } from "../../UserContext";
import styles from "./FeedPhotosItem.module.css";
import Image from "../Utilitarios/Image";

const FeedPhotosItem = ({ photo }) => {
  const { setModal, setPhotoId } = React.useContext(UserContext);

  const handleClick = () => {
    setModal(true);
    setPhotoId(photo.id);
  };

  return (
    <>
      <li onClick={handleClick} className={`${styles.photo}`}>
        <Image src={photo.src} alt={photo.title} />
        <span className={styles.visualizacao}>{photo.acessos}</span>
      </li>
    </>
  );
};

export default FeedPhotosItem;
