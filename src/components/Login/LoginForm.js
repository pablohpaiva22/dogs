import React from "react";
import Title from "../Geral/Title.js";
import Input from "../Form/Input.js";
import Button from "../Form/Button.js";

function LoginForm() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    async function getAPI() {
      const api = await fetch(
        "https://dogsapi.origamid.dev/json/jwt-auth/v1/token",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }
      );
      console.log(api);
      const apiJSON = await api.json();
      console.log(apiJSON);
    }

    getAPI();
  };

  return (
    <section onSubmit={handleSubmit}>
      <Title>Login</Title>

      <form>
        <Input type="text" id="user" value={username} setValue={setUsername}>
          Usuário
        </Input>

        <Input type="text" id="user" value={password} setValue={setPassword}>
          Senha
        </Input>

        <Button>Entrar</Button>
      </form>
    </section>
  );
}

export default LoginForm;
