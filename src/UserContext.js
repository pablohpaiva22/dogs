import React from "react";
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from "./api";
import { useNavigate } from "react-router-dom";

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [btnDisable, setBtnDisable] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [login, setLogin] = React.useState(null);

  const navigate = useNavigate();

  React.useEffect(() => {
    const autoLogin = async () => {
      const token = window.localStorage.getItem("token");

      if (token) {
        try {
          setBtnDisable(false);
          setError(null);
          setLoading(true);
          const { url, options } = TOKEN_VALIDATE_POST(token);
          const response = await fetch(url, options);
          if (!response.ok) throw new Error("Token inválido");
          await getUser(token);
        } catch (err) {
          logOut();
        } finally {
          setLoading(false);
          setBtnDisable(false);
        }
      }
    };

    autoLogin();
  }, []);

  const logOut = async () => {
    setData(null);
    setError(null);
    setLoading(false);
    setBtnDisable(false);
    setLogin(false);
    window.localStorage.removeItem("token");
  };

  const getUser = async (token) => {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    setBtnDisable(true);
    setLogin(true);
  };

  const userLogin = async (username, password) => {
    try {
      setError(null);
      setLoading(true);
      setBtnDisable(true);
      const { url, options } = TOKEN_POST({ username, password });
      const tokenRes = await fetch(url, options);
      if (!tokenRes.ok) throw new Error(`Error: Deu ruim`);
      const { token } = await tokenRes.json();
      window.localStorage.setItem("token", token);
      await getUser(token);
      navigate("/conta");
    } catch (erro) {
      setBtnDisable(false);
      setError(true);
    } finally {
      setLoading(false);
      setBtnDisable(false);
      setLogin(true);
    }
  };

  return (
    <UserContext.Provider
      value={{
        userLogin,
        logOut,
        data,
        error,
        loading,
        btnDisable,
        login,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
