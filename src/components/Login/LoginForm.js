import React from "react";
import Title from "../Geral/Title.js";
import Input from "../Form/Input.js";
import Button from "../Form/Button.js";
import useForm from "../../Hooks/useForm.js";
import { TOKEN_POST, USER_GET } from "../../api.js";

function LoginForm() {
  const username = useForm();
  const password = useForm();

  React.useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
      getUser(token);
    }
  }, []);

  const getUser = async (token) => {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    console.log(json);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (username.validate() && password.validate()) {
      const { url, options } = TOKEN_POST({
        username: username.value,
        password: password.value,
      });

      const response = await fetch(url, options);
      const json = await response.json();
      console.log(response);
      console.log(json);
      window.localStorage.setItem("token", json.token);
      getUser(json.token);
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
