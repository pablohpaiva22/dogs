import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginSignIn from "./LoginSignIn";
import LoginNewUser from "./LoginNewUser";
import LoginPasswordLost from "./LoginPasswordLost";
import LoginPasswordReset from "./LoginPasswordReset";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <section className={styles.login}>
      <div className={`${styles.imagem}`}></div>

      <div>
        <Routes>
          <Route path="/" element={<LoginSignIn />} />
          <Route path="/criar" element={<LoginNewUser />} />
          <Route path="/perdeu" element={<LoginPasswordLost />} />
          <Route path="/resetar" element={<LoginPasswordReset />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
