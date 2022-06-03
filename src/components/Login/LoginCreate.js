import React from "react";
import Title from "../Utilitarios/Title";
import Input from "../Utilitarios/Form/Input";
import Button from "../Utilitarios/Form/Button";
import styles from "./LoginCreate.module.css";
import useForm from "../../Hooks/useForm";
import { UserContext } from "../../UserContext";

const LoginCreate = () => {
  const username = useForm();
  const email = useForm("email");
  const password = useForm();
  const { createUser, error2, loading } = React.useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      username.validate(username.value) === false ||
      email.validate(username.value) === false ||
      password.validate(username.value) === false
    ) {
      return true;
    }

    createUser({
      username: username.value,
      email: email.value,
      password: password.value,
    });
  };

  return (
    <div className={`${styles.formContent} animeLeft`}>
      <Title>Cadastre-se</Title>

      <form onSubmit={handleSubmit}>
        <Input label={"Usuário"} {...username} id={"username"} type={"text"} />
        <Input label={"E-mail"} {...email} id={"email"} type={"email"} />
        <Input label={"Senha"} {...password} id={"pass"} type={"password"} />

        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}

        {error2 && <p className={styles.error}>E-mail já cadastrado</p>}
      </form>
    </div>
  );
};

export default LoginCreate;
