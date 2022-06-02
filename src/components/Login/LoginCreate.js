import React from "react";
import Title from "../Utilitarios/Title";
import Input from "../Utilitarios/Form/Input";
import Button from "../Utilitarios/Form/Button";
import styles from "./LoginCreate.module.css";
import useForm from "../../Hooks/useForm";
import { USER_POST } from "../../api";

const LoginCreate = () => {
  const username = useForm();
  const email = useForm("email");
  const password = useForm();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });
    const response = await fetch(url, options);
    console.log(response);
  };

  return (
    <div className={styles.formContent}>
      <Title>Cadastre-se</Title>

      <form onSubmit={handleSubmit}>
        <Input label={"Usuário"} {...username} id={"username"} type={"text"} />
        <Input label={"E-mail"} {...email} id={"email"} type={"email"} />
        <Input label={"Senha"} {...password} id={"pass"} type={"password"} />

        <Button>Cadastrar</Button>
      </form>
    </div>
  );
};

export default LoginCreate;
