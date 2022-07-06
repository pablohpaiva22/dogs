import React from "react";
import Input from "../Utilitarios/Form/Input";
import Button from "../Utilitarios/Form/Button";
import styles from "../Account/AccountPost.module.css";
import useForm from "../../Hooks/useForm";
import useFetch from "../../Hooks/useFetch";
import { PHOTO_POST } from "../../api";
import { useNavigate } from "react-router-dom";

const AccountPost = () => {
  const username = useForm();
  const weight = useForm("number");
  const age = useForm();
  const [img, setImg] = React.useState({});
  const { data, error, loading, request } = useFetch();
  const token = window.localStorage.getItem("token");
  const navigate = useNavigate();

  const handleChange = ({ target }) => {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
    console.log(target.files);
  };

  React.useEffect(() => {
    if (data) navigate("/conta");
  }, [data, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    username.validate();
    weight.validate();
    age.validate();

    const formData = new FormData();
    formData.append("img", img.raw);
    formData.append("nome", username.value);
    formData.append("peso", weight.value);
    formData.append("idade", age.value);

    const { url, options } = PHOTO_POST(formData, token);

    request(url, options);
  };

  return (
    <div className={styles.content}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <Input label="Nome" id="nome" name="nome" {...username} />
        <Input label="Peso" id="peso" name="peso" {...weight} />
        <Input label="Idade" id="idade" name="idade" {...age} />
        <input
          className={styles.fileInput}
          type="file"
          onChange={handleChange}
          name="img"
        />
        {loading ? (
          <Button disabled>Carregando</Button>
        ) : (
          <Button>Enviar</Button>
        )}
        {error && <p className={styles.error}>Dados incorretos.</p>}
      </form>
      <div>
        {img.preview && (
          <div
            className={styles.preview}
            style={{ backgroundImage: `url(${img.preview})` }}
          ></div>
        )}
      </div>
    </div>
  );
};

export default AccountPost;
