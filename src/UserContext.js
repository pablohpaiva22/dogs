import React from "react";
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from "./api";

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const autoLogin = async () => {
      const token = window.localStorage.getItem("token");

      if (token) {
        try {
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
        }
      }
    };

    autoLogin();
  }, []);

  const logOut = async () => {
    setData(null);
    setError(null);
    setLoading(false);
    setLogin(false);
    window.localStorage.removeItem("token");
  };

  const getUser = async (token) => {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    setLogin(true);
  };

  const userLogin = async (username, password) => {
    const { url, options } = TOKEN_POST({ username, password });
    const response = await fetch(url, options);
    const json = await response.json();
    window.localStorage.setItem("token", json.token);
    getUser(json.token);
  };

  return (
    <UserContext.Provider value={{ userLogin, logOut, data }}>
      {children}
    </UserContext.Provider>
  );
};
