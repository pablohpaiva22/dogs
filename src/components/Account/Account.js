import React from "react";
import Title from "../Utilitarios/Title";
import { ReactComponent as FeedButton } from "../../Assets/feed.svg";
import { ReactComponent as EstatisticaButton } from "../../Assets/estatisticas.svg";
import { ReactComponent as PostarButton } from "../../Assets/adicionar.svg";
import { ReactComponent as SairButton } from "../../Assets/sair.svg";
import styles from "../Account/Account.module.css";
import { NavLink } from "react-router-dom";
// import { UserContext } from "../../UserContext";
import { Routes, Route } from "react-router-dom";
import AccountPost from "./AccountPost";
import AccountStatistics from "./AccountStatistics";
import AccountProfile from "./AccountProfile";

const Account = () => {
  // const { logOut } = React.useContext(UserContext);
  // const navigate = useNavigate();

  // const handleSairClick = (e) => {
  //   logOut();
  //   navigate("/login");
  // };

  return (
    <section className={`container ${styles.containerConta}`}>
      <header className={styles.header}>
        <Routes>
          <Route path="/" element={<Title>Minha Conta</Title>} />
          <Route path="/postar" element={<Title>Poste Sua Foto</Title>} />
          <Route path="/estatistica" element={<Title>Estatísticas</Title>} />
        </Routes>

        <nav className={styles.navigation}>
          <NavLink to="/conta">
            <FeedButton />
          </NavLink>

          <NavLink to="/conta/estatistica">
            <EstatisticaButton />
          </NavLink>

          <NavLink to="/conta/postar">
            <PostarButton />
          </NavLink>

          <NavLink to="/">
            <SairButton />
          </NavLink>
        </nav>
      </header>

      <div>
        <Routes>
          <Route path="/" element={<AccountProfile />} />
          <Route path="/postar" element={<AccountPost />} />
          <Route path="/estatistica" element={<AccountStatistics />} />
        </Routes>
      </div>
    </section>
  );
};

export default Account;
