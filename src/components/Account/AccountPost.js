import React from "react";
import Input from "../Utilitarios/Form/Input";
import Button from "../Utilitarios/Form/Button";
import styles from "../Account/AccountPost.module.css";

const AccountPost = () => {
  return (
    <div>
      <form className={styles.form}>
        <Input label="Nome" />
        <Input label="Peso" />
        <Input label="Idade" />
        <input className={styles.fileInput} type="file" />

        <Button>Enviar</Button>
      </form>
    </div>
  );
};

export default AccountPost;
