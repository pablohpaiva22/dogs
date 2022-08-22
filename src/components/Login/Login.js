import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import LoginSignIn from "./LoginSignIn";
import LoginNewUser from "./LoginNewUser";
import LoginPasswordLost from "./LoginPasswordLost";
import LoginPasswordReset from "./LoginPasswordReset";
import NotFound from "../NotFound";
import styles from "./Login.module.css";

const Login = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <section className={styles.login}>
      <div className={`${styles.imagem}`}></div>

      <div>
        <Routes>
          <Route path="/" element={<LoginSignIn />} />
          <Route path="/criar" element={<LoginNewUser />} />
          <Route path="/perdeu" element={<LoginPasswordLost />} />
          <Route path="/resetar" element={<LoginPasswordReset />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
