import React from "react";
import Title from "../Utilitarios/Title";
import Input from "../Utilitarios/Form/Input";
import Button from "../Utilitarios/Form/Button";
import styles from "./LoginCreate.module.css";
import useForm from "../../Hooks/useForm";
import { USER_POST } from "../../api";
import { UserContext } from "../../UserContext";

const LoginCreate = () => {
  const username = useForm();
  const email = useForm("email");
  const password = useForm();

  const { userLogin } = React.useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });

    try {
      const response = await fetch(url, options);
      const json = await response.json();
      if (json.ok) userLogin(username.value, password.value);
    } catch {
    } finally {
    }
  };

  return (
    <div className={`${styles.formContent} animeLeft`}>
      <Title>Cadastre-se</Title>

      <form onSubmit={handleSubmit}>
        <Input label={"Usuário"} {...username} id={"username"} type={"text"} />
        <Input label={"E-mail"} {...email} id={"email"} type={"email"} />
        <Input label={"Senha"} {...password} id={"pass"} type={"password"} />

        {false ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}

        {false && <p className={styles.error}>E-mail já cadastrado</p>}
      </form>
    </div>
  );
};

export default LoginCreate;
