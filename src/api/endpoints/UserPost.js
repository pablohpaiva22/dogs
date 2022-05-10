import React from "react";

const UserPost = () => {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = async () => {
      const fetchAPI = await fetch(
        "https://dogsapi.origamid.dev/json/api/user",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, email, password }),
        }
      );
      const json = await fetchAPI.json();
      console.log(fetchAPI);
      console.log(json);
    };

    newUser();
  };

  return (
    <>
      <h2>USER POST</h2>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />

        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />

        <button>CRIAR</button>
      </form>
    </>
  );
};

export default UserPost;
