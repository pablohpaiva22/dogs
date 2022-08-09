import React from "react";
import styles from "./FeedModal.module.css";
import { useRef } from "react";
import { UserContext } from "../../../UserContext";
import { PHOTO_GET } from "../../../api";
import useFetch from "../../../Hooks/useFetch";
import Title from "../../Utilitarios/Title";
import ModalTopInfo from "./ModalTopInfo";
import ModalComments from "./ModalComments";
import ModalForm from "./ModalForm";

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

    async function modalFetch() {
      await request(url, options);
    }

    modalFetch();
  }, [photoId, request]);

  React.useEffect(() => {
    if (data) {
      setComments(data.comments);
    }
  }, [data]);

  return (
    <section ref={modalRef} onClick={handleClick} className={styles.modal}>
      {error && <p style={{ color: "white" }}>Error.</p>}

      {loading && <p style={{ color: "#fff" }}>Carregando...</p>}

      {data && (
        <div className={styles.modalBox}>
          <div className={styles.photo}>
            <img
              src={data.photo.src}
              alt={`foto de um cachorro chamado ${data.photo.title}`}
            />
          </div>

          <div className={styles.social}>
            <div className={styles.info}>
              <ModalTopInfo data={data} />

              <Title>{data.photo.title}</Title>

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
