import React from "react";
import AccountTitle from "../Utilitarios/AccountTitle";
import { ReactComponent as FeedButton } from "../../Assets/feed.svg";
import { ReactComponent as EstatisticaButton } from "../../Assets/estatisticas.svg";
import { ReactComponent as PostarButton } from "../../Assets/adicionar.svg";
import { ReactComponent as SairButton } from "../../Assets/sair.svg";
import styles from "../Account/Account.module.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext";
import { Routes, Route } from "react-router-dom";
import AccountPost from "./AccountPost";
import AccountStatistics from "./AccountStatistics";
import AccountProfile from "./AccountProfile";
import useMedia from "../../Hooks/useMedia";

const Account = () => {
  const { logOut } = React.useContext(UserContext);
  const navigate = useNavigate();
  const mobile = useMedia("(max-width: 40rem");
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const { pathname } = useLocation();

  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  const handleClick = (e) => {
    logOut();
    navigate("/login");
  };

  return (
    <section className={`${styles.containerConta} container`}>
      <header className={styles.header}>
        <AccountTitle />

        {mobile && (
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className={`${styles.hambBtn} ${
              mobileMenu && styles.mobileButtonActive
            }`}
          ></button>
        )}

        <nav
          className={`${mobile ? styles.navigationMobile : styles.navigation} ${
            mobileMenu && styles.navMobileActive
          }`}
        >
          <NavLink to="/conta" end>
            <FeedButton />
            {mobile && "Minhas Fotos"}
          </NavLink>

          <NavLink to="/conta/estatistica">
            <EstatisticaButton />
            {mobile && "Estatísticas"}
          </NavLink>

          <NavLink to="/conta/postar">
            <PostarButton />
            {mobile && "Adicionar Foto"}
          </NavLink>

          <NavLink onClick={handleClick} to="/">
            <SairButton />
            {mobile && "Sair"}
          </NavLink>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<AccountProfile />} />
        <Route path="/postar" element={<AccountPost />} />
        <Route path="/estatistica" element={<AccountStatistics />} />
      </Routes>
    </section>
  );
};

export default Account;
