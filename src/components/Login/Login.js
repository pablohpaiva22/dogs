import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginForm from "./LoginForm";
import LoginCreate from "./LoginCreate";
import LoginPasswordLost from "./LoginPasswordLost";
import LoginPasswordReset from "./LoginPasswordReset";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <section className={styles.login}>
      <div className={`${styles.imagem}`}></div>

      <div>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/login/criar" element={<LoginCreate />} />
          <Route path="/login/perdeu" element={<LoginPasswordLost />} />
          <Route path="/login/resetar" element={<LoginPasswordReset />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
