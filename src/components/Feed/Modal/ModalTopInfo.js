import React from "react";
import { Link } from "react-router-dom";
import { PHOTO_DELETE } from "../../../api";
import useFetch from "../../../Hooks/useFetch";
import { UserContext } from "../../../UserContext";
import styles from "./ModalTopInfo.module.css";

const ModalTopInfo = ({ data, photoId }) => {
  const user = React.useContext(UserContext);
  console.log(user.login);
  const { loading, request } = useFetch();

  const handleClick = async () => {
    const confirm = window.confirm("Deseja deletar esta foto?");

    if (confirm) {
      const { url, options } = PHOTO_DELETE(photoId);
      const { response } = await request(url, options);

      if (response.ok) window.location.reload();
    }
  };

  return (
    <div className={styles.topInfo}>
      {user.login && user.data.username === data.photo.author ? (
        <>
          {loading ? (
            <button disabled className={styles.delete}>
              Deletando...
            </button>
          ) : (
            <button onClick={handleClick} className={styles.delete}>
              Deletar
            </button>
          )}
        </>
      ) : (
        <Link
          className={styles.linkProfile}
          to={`/profile/${data.photo.author}`}
        >
          @{data.photo.author}
        </Link>
      )}

      <div>
        <span className={`${styles.visualization}`}>{data.photo.acessos}</span>
      </div>
    </div>
  );
};

export default ModalTopInfo;
