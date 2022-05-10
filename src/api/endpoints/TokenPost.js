import React from "react";

const TokenPost = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [token, setTokem] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newToken = async () => {
      const fetchAPI = await fetch(
        "https://dogsapi.origamid.dev/json/jwt-auth/v1/token",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }
      );
      const json = await fetchAPI.json();
      console.log(fetchAPI);
      console.log(json);
      setTokem(json.token);
    };

    newToken();
  };

  return (
    <>
      <h2>TOKEN POST</h2>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />

        <button>PEGAR TOKEN</button>

        <p style={{ wordBreak: "break-all", margin: "8px" }}>{token}</p>
      </form>
    </>
  );
};

export default TokenPost;
