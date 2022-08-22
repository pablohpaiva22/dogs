import React from "react";
import styles from "./Photo.module.css";
import { useParams } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import { PHOTO_GET } from "../../api";
import ModalTopInfo from "../Feed/Modal/ModalTopInfo";
import ModalComments from "../Feed/Modal/ModalComments";
import ModalForm from "../Feed/Modal/ModalForm";
import { UserContext } from "../../UserContext";
import Loading from "../Utilities/Loading";

const Photo = () => {
  const { id } = useParams();
  const { data, loading, error, request } = useFetch();
  const [comments, setComments] = React.useState("");
  const { login } = React.useContext(UserContext);

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(id);
    request(url, options);
  }, [request, id]);

  React.useEffect(() => {
    if (data) {
      setComments(data.comments);
    }
  }, [data]);

  return (
    <div className={`${styles.container} container`}>
      {loading && <Loading />}
      {error && <p>Error.</p>}
      {data && (
        <div>
          <div className={styles.image}>
            <img src={data.photo.src} alt="dog" />
          </div>

          <div className={styles.social}>
            <div className={styles.info}>
              <ModalTopInfo data={data} photoId={id} />

              <h1 className="title">{data.photo.title}</h1>

              <div className={styles.animalInfo}>
                <span>{`${data.photo.peso} Kg`}</span>
                <span>{`${data.photo.idade} anos`}</span>
              </div>

              {comments && <ModalComments comments={comments} />}
            </div>

            {login && <ModalForm setComments={setComments} />}
          </div>
        </div>
      )}
    </div>
  );
};

export default Photo;
