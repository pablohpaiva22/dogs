import React from "react";
import Title from "../Geral/Title.js";
import Input from "../Form/Input.js";
import Button from "../Form/Button.js";
import useForm from "../../Hooks/useForm.js";

function LoginForm() {
  const username = useForm();
  const password = useForm();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username.validate() && password.validate()) {
      async function getAPI() {
        const api = await fetch(
          "https://dogsapi.origamid.dev/json/jwt-auth/v1/token",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username: username.value,
              password: password.value,
            }),
          }
        );
        console.log(api);
        const apiJSON = await api.json();
        console.log(apiJSON);
      }

      getAPI();
    }
  };

  return (
    <section onSubmit={handleSubmit}>
      <Title>Login</Title>

      <form>
        <Input type="text" id="user" {...username}>
          Usuário
        </Input>

        <Input type="text" id="user" {...password}>
          Senha
        </Input>

        <Button>Entrar</Button>
      </form>
    </section>
  );
}

export default LoginForm;
