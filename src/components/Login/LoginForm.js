import React from "react";
import Title from "../Utilitarios/Title.js";
import Input from "../Utilitarios/Form/Input.js";
import Button from "../Utilitarios/Form/Button.js";
import useForm from "../../Hooks/useForm.js";
import { UserContext } from "../../UserContext.js";
import styles from "./LoginForm.module.css";
import { Link } from "react-router-dom";

function LoginForm() {
  const username = useForm();
  const password = useForm();
  const { userLogin, error, btnDisable } = React.useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  };

  return (
    <div className={styles.formContent} onSubmit={handleSubmit}>
      <Title>Login</Title>

      <form>
        <Input type="text" id="user" label={"Usuário"} {...username} />

        <Input type="text" id="senha" label={"Usuário"} {...password} />

        {btnDisable ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}

        {error && <p className={styles.error}>Dados incorretos.</p>}
      </form>

      <Link className={styles.passLost} to="/login/perdeu">
        Perdeu a senha?
      </Link>

      <h2 className={styles.subtitle}>Cadastre-se</h2>

      <p className={styles.text}>
        Ainda não possui conta? Cadastre-se no site.
      </p>

      <Link to="criar">
        <Button style={{ width: "110px" }}>Cadastro</Button>
      </Link>
    </div>
  );
}

export default LoginForm;
