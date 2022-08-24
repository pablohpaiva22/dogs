import React from "react";
import useFetch from "../../Hooks/useFetch";
import useForm from "../../Hooks/useForm";
import styles from "./LoginPasswordReset.module.css";
import Button from "../Utilities/Form/Button";
import Input from "../Utilities/Form/Input";
import { PASSWORD_RESET } from "../../api";
import { useNavigate } from "react-router-dom";

const LoginPasswordReset = () => {
  const { data, loading, error, request } = useFetch();
  const user = useForm();
  const [key, setKey] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const navigate = useNavigate();

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get("key");
    const login = params.get("login");

    if (key) setKey(params.get("key"));
    if (login) setLogin(params.get("login"));
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { url, options } = PASSWORD_RESET({
      login,
      key,
      password: user.value,
    });

    const { response } = await request(url, options);

    if (response.ok) {
      setTimeout(() => {
        navigate("/login");
      }, [2000]);
    }
  };

  return (
    <div className={`${styles.container} animeLeft`}>
      <h1 className="title">Resete a senha</h1>
      {!data ? (
        <form onSubmit={handleSubmit}>
          <Input type="text" name="senha" label="Nova Senha" {...user} />

          {error && <p className={styles.error}>Token inválido.</p>}
          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Resetar</Button>
          )}
        </form>
      ) : (
        <p className={styles.text}>Senha alterada com sucesso.</p>
      )}
    </div>
  );
};

export default LoginPasswordReset;
