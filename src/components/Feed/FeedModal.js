import React from "react";
import { useRef } from "react";
import { UserContext } from "../../UserContext";
import styles from "./FeedModal.module.css";
import useFetch from "../../Hooks/useFetch";
import { PHOTO_GET } from "../../api";
import Title from "../Utilitarios/Title";

const FeedModal = () => {
  const { data, loading, error, request } = useFetch();
  const { setModal, photoId } = React.useContext(UserContext);
  const modalRef = useRef();

  const handleClick = (e) => {
    if (e.target === modalRef.current) setModal(false);
  };

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(photoId);

    async function modalFetch() {
      const fetchData = await request(url, options);
      console.log(fetchData);
    }

    modalFetch();
  }, [photoId, request]);

  return (
    <section ref={modalRef} onClick={handleClick} className={styles.modal}>
      {error && <p>Error.</p>}

      {loading && <p style={{ color: "#fff" }}>Carregando...</p>}

      {data && (
        <div className={styles.modalBox}>
          <div className={styles.photo}>
            <img
              src={data.photo.src}
              alt={`foto de um cachorro chamado ${data.photo.title}`}
            />
          </div>

          <div className={styles.info}>
            <div className={styles.infoFirstInformation}>
              <span>cat</span>
              <div>
                <span className={`${styles.visualizacao}`}>
                  {data.photo.acessos}
                </span>
              </div>
            </div>

            <Title>{data.photo.title}</Title>

            <div className={styles.infoAnimals}>
              <span>{`${data.photo.peso} Kg`}</span>
              <span>{`${data.photo.idade} anos`}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default FeedModal;
