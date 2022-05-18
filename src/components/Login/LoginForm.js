import React from "react";
import Title from "../Geral/Title.js";
import Input from "../Form/Input.js";
import Button from "../Form/Button.js";
import useForm from "../../Hooks/useForm.js";
import { UserContext } from "../../UserContext.js";

function LoginForm() {
  const username = useForm();
  const password = useForm();
  const { userLogin, error } = React.useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  };

  return (
    <section onSubmit={handleSubmit}>
      <Title>Login</Title>

      <form>
        <Input type="text" id="user" {...username}>
          Usuário
        </Input>

        <Input type="text" id="senha" {...password}>
          Senha
        </Input>

        <Button>Entrar</Button>

        {error && (
          <p style={{ margin: "1rem 0", color: "red" }}>Dados incorretos.</p>
        )}
      </form>
    </section>
  );
}

export default LoginForm;
