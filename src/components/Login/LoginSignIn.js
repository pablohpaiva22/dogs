import React from "react";
import Title from "../Utilities/Title.js";
import Input from "../Utilities/Form/Input.js";
import Button from "../Utilities/Form/Button.js";
import useForm from "../../Hooks/useForm.js";
import { UserContext } from "../../UserContext.js";
import styles from "./LoginSignIn.module.css";
import { Link, useNavigate } from "react-router-dom";

function LoginSignIn() {
  const username = useForm();
  const password = useForm();
  const { userLogin, error, btnDisable, login } = React.useContext(UserContext);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (login) {
      navigate("/conta");
    }
  }, [login, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  };

  return (
    <div className={`${styles.formContent} animeLeft`}>
      <Title>Login</Title>

      <form onSubmit={handleSubmit}>
        <Input type="text" id="user" label={"Usuário"} {...username} />

        <Input type="password" id="senha" label={"Senha"} {...password} />

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

export default LoginSignIn;
