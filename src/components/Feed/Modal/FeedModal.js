import React from "react";
import styles from "./FeedModal.module.css";
import { useRef } from "react";
import { UserContext } from "../../../UserContext";
import { PHOTO_GET } from "../../../api";
import useFetch from "../../../Hooks/useFetch";
import ModalTopInfo from "./ModalTopInfo";
import ModalComments from "./ModalComments";
import ModalForm from "./ModalForm";
import Image from "../../Utilities/Image";
import Loading from "../../Utilities/Loading";
import { Link } from "react-router-dom";

const FeedModal = () => {
  const { data, loading, error, request } = useFetch();
  const [comments, setComments] = React.useState("");
  const { setModal, photoId, login } = React.useContext(UserContext);
  const modalRef = useRef();

  const handleClick = (e) => {
    if (e.target === modalRef.current) setModal(false);
  };

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(photoId);

    async function getPhoto() {
      await request(url, options);
    }

    getPhoto();
  }, [photoId, request]);

  React.useEffect(() => {
    if (data) {
      setComments(data.comments);
    }
  }, [data]);

  return (
    <section ref={modalRef} onClick={handleClick} className={styles.modal}>
      {error && <p style={{ color: "white" }}>Error.</p>}
      {loading && <Loading />}

      {data && (
        <div className={styles.modalBox}>
          <div className={styles.photo}>
            <Image
              src={data.photo.src}
              alt={`foto de um cachorro chamado ${data.photo.title}`}
            />
          </div>

          <div className={styles.social}>
            <div className={styles.info}>
              <ModalTopInfo data={data} photoId={photoId} />

              <Link className={styles.title} to={`/foto/${data.photo.id}`}>
                {data.photo.title}
              </Link>

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
    </section>
  );
};

export default FeedModal;
