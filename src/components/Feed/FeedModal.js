import React from "react";
import { useRef } from "react";
import { UserContext } from "../../UserContext";
import styles from "./FeedModal.module.css";
import useFetch from "../../Hooks/useFetch";
import { COMMENT_POST, PHOTO_GET } from "../../api";
import Title from "../Utilitarios/Title";
import useForm from "../../Hooks/useForm";
import { Link } from "react-router-dom";
import Enviar from "../../Assets/enviar.svg";

const FeedModal = () => {
  const { data, loading, error, request } = useFetch();
  const [comment, setComment] = React.useState("");
  const { setModal, photoId, login } = React.useContext(UserContext);
  const logindata = React.useContext(UserContext);
  const { value, onChange, setValue } = useForm();
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
      setComment(data.comments);
    }
  }, [data]);

  async function handleCommentSubmit(e) {
    e.preventDefault();

    const { url, options } = COMMENT_POST(photoId, { comment: value });

    await fetch(url, options);
    setComment([
      ...comment,
      { comment_content: value, comment_author: logindata.data.nome },
    ]);
    setValue("");
  }

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

          <div className={styles.info}>
            <div>
              <div className={styles.infoFirstInformation}>
                <Link
                  className={styles.linkProfile}
                  to={`/profile/${data.photo.author}`}
                >
                  @{data.photo.author}
                </Link>
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

              {comment && (
                <div className={styles.comments}>
                  {comment.map((item, index) => {
                    return (
                      <div key={index}>
                        <span
                          style={{ fontWeight: "bold" }}
                        >{`${item.comment_author}: `}</span>
                        <span>{item.comment_content}</span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {login && (
              <form
                className={styles.commentsPOST}
                onSubmit={handleCommentSubmit}
              >
                <textarea
                  onChange={onChange}
                  value={value}
                  className={styles.commentBox}
                  cols="30"
                  rows="2"
                  placeholder="Comente..."
                ></textarea>

                <button className={styles.btn}>
                  <img src={Enviar} alt="Enviar Button" />
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default FeedModal;
