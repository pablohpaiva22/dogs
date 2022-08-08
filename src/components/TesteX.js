import React from "react";
import styles from "./TesteX.module.css";

const TesteX = () => {
  const [valor, setValor] = React.useState("");
  console.log(valor);
  console.log("renderizou");

  return (
    <div className={`${styles.container} container`}>
      <label htmlFor="text">Testando</label>
      <input
        value={valor}
        name="texto"
        onChange={(e) => setValor(e.target.value)}
        type="text"
      />
    </div>
  );
};

export default TesteX;
