import React from "react";

const PhotoPost = () => {
  const [token, setToken] = React.useState("");
  const [nome, setNome] = React.useState("");
  const [peso, setPeso] = React.useState("");
  const [idade, setIdade] = React.useState("");
  const [img, setImg] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("img", img);
    formData.append("nome", nome);
    formData.append("peso", peso);
    formData.append("idade", idade);

    const newPhoto = async () => {
      const fetchAPI = await fetch(
        "https://dogsapi.origamid.dev/json/api/photo",
        {
          method: "POST",
          headers: {
            Authorization: "Bearer " + token,
          },
          body: formData,
        }
      );
      const json = await fetchAPI.json();
      console.log(fetchAPI);
      console.log(json);
    };

    newPhoto();
  };

  return (
    <>
      <h2>PHOTO POST</h2>
      <form onSubmit={handleSubmit}>
        <label>Token</label>
        <input
          type="text"
          value={token}
          onChange={({ target }) => setToken(target.value)}
        />

        <label>Nome</label>
        <input
          type="text"
          value={nome}
          onChange={({ target }) => setNome(target.value)}
        />

        <label>Peso</label>
        <input
          type="text"
          value={peso}
          onChange={({ target }) => setPeso(target.value)}
        />

        <label>Idade</label>
        <input
          type="text"
          value={idade}
          onChange={({ target }) => setIdade(target.value)}
        />

        <input type="file" onChange={({ target }) => setImg(target.files[0])} />

        <button>ENVIAR</button>
      </form>
    </>
  );
};

export default PhotoPost;
