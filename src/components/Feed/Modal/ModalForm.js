import React from "react";
import styles from "./ModalForm.module.css";
import { ReactComponent as Enviar } from "../../../Assets/enviar.svg";
import { COMMENT_POST } from "../../../api";
import { UserContext } from "../../../UserContext";
import useForm from "../../../Hooks/useForm";

const ModalForm = ({ setComments }) => {
  const { value, onChange, setValue } = useForm();
  const [error, setError] = React.useState(false);
  const { photoId } = React.useContext(UserContext);
  const [notFound, setNotFound] = React.useState(false);

  async function handleCommentSubmit(e) {
    e.preventDefault();
    setError(false);

    if (value.length === 0) {
      setError(true);
      return false;
    }

    try {
      const { url, options } = COMMENT_POST(photoId, { comment: value });
      const response = await fetch(url, options);
      const json = await response.json();
      if (!response.ok) throw new Error(json.message);
      setComments((comment) => [...comment, json]);
    } catch (err) {
      setNotFound(true);
    } finally {
      setValue("");
    }
  }

  return (
    <div>
      <form className={styles.comment} onSubmit={handleCommentSubmit}>
        <textarea
          onChange={onChange}
          value={value}
          className={styles.commentBox}
          cols="30"
          rows="3"
          placeholder="Comente..."
        ></textarea>

        <button className={styles.commentButton}>
          <Enviar />
        </button>
      </form>

      {error && <p className={styles.error}>Preencha este campo.</p>}

      {notFound && (
        <p className={styles.notfound}>Usuário não encontrado. Relogar</p>
      )}
    </div>
  );
};

export default ModalForm;
