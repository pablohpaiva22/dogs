import React from "react";
import styles from "./LoginForm.module.css";

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
    <section className={styles.login} onSubmit={handleSubmit}>
      <div className={`${styles.imagem}`}></div>

      <div className={`${styles.form}`}>
        <h2>Login</h2>

        <form action="">
          <label htmlFor="username">Usuário</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={({ target }) => setUsername(target.value)}
          />

          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
          <button>Entrar</button>
        </form>
      </div>
    </section>
  );
}

export default LoginForm;
