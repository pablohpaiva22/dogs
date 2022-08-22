import React from "react";
import styles from "./LoginPasswordLost.module.css";
import Input from "../Utilities/Form/Input";
import Button from "../Utilities/Form/Button";
import useForm from "../../Hooks/useForm";
import { PASSWORD_LOST } from "../../api";
import useFetch from "../../Hooks/useFetch";

const LoginPasswordLost = () => {
  const user = useForm("email");
  const { data, loading, error, request } = useFetch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (user.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: user.value,
        url: window.location.href,
      });

      await request(url, options);
      user.setValue("");
    }
  };

  return (
    <div className={styles.container}>
      <h1 className="title">Perdeu a senha?</h1>
      {!data ? (
        <form onSubmit={handleSubmit}>
          <Input type="text" name="email" label="E-mail" {...user} />

          {error && <p className={styles.error}>Email invalido</p>}
          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Enviar e-mail</Button>
          )}
        </form>
      ) : (
        <p className={styles.text}>Email enviado.</p>
      )}
    </div>
  );
};

export default LoginPasswordLost;
