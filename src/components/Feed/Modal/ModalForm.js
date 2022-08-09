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

  async function handleCommentSubmit(e) {
    e.preventDefault();
    setError(false);

    if (value.length === 0) {
      setError(true);
      return false;
    }

    const { url, options } = COMMENT_POST(photoId, { comment: value });

    const response = await fetch(url, options);
    const json = await response.json();

    setComments((comment) => [...comment, json]);

    setValue("");
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

      {error && (
        <p className={styles.error} style={{ color: "red" }}>
          Preencha este campo.
        </p>
      )}
    </div>
  );
};

export default ModalForm;
