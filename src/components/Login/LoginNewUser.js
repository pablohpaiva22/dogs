import React from "react";
import Title from "../Utilitarios/Title";
import Input from "../Utilitarios/Form/Input";
import Button from "../Utilitarios/Form/Button";
import styles from "./LoginNewUser.module.css";
import useForm from "../../Hooks/useForm";
import { USER_POST } from "../../api";
import { UserContext } from "../../UserContext";
import useFetch from "../../Hooks/useFetch";

const LoginNewUser = () => {
  const username = useForm();
  const email = useForm("email");
  const password = useForm("");
  const { userLogin } = React.useContext(UserContext);
  const { error, loading, request } = useFetch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });

    const { response } = await request(url, options);
    if (response.ok) userLogin(username.value, password.value);
  };

  return (
    <div className={`${styles.formContent} animeLeft`}>
      <Title>Cadastre-se</Title>

      <form onSubmit={handleSubmit}>
        <Input label={"Usuário"} id={"username"} type={"text"} {...username} />
        <Input label={"E-mail"} id={"email"} type={"email"} {...email} />
        <Input label={"Senha"} id={"pass"} type={"password"} {...password} />

        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}

        {error && <p className={styles.error}>{error}</p>}
      </form>
    </div>
  );
};

export default LoginNewUser;
