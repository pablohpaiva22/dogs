import React from "react";

const PhotoGet = () => {
  const [id, setId] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const fetchPhoto = async () => {
      const fetchApi = await fetch(
        `https://dogsapi.origamid.dev/json/api/photo/${id}`
      );
      const json = await fetchApi.json();

      console.log(json);
    };

    fetchPhoto();
  };

  return (
    <>
      <h2>PHOTO GET</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="">FOTO ID</label>
        <input
          type="text"
          value={id}
          onChange={({ target }) => setId(target.value)}
        />

        <button>PEGAR FOTO</button>
      </form>
    </>
  );
};

export default PhotoGet;
