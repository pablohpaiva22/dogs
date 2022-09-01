import React from "react";
import styles from "./AccountHeader.module.css";
import { ReactComponent as FeedButton } from "../../Assets/feed.svg";
import { ReactComponent as EstatisticaButton } from "../../Assets/estatisticas.svg";
import { ReactComponent as PostarButton } from "../../Assets/adicionar.svg";
import { ReactComponent as SairButton } from "../../Assets/sair.svg";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext";
import AccountTitle from "./AccountTitle";
import useMedia from "../../Hooks/useMedia";

const AccountHeader = () => {
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const { logOut } = React.useContext(UserContext);
  const { pathname } = useLocation();
  const mobile = useMedia("(max-width: 40rem");
  const navigate = useNavigate();

  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  const handleClick = (e) => {
    logOut();
    navigate("/login");
  };

  return (
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
  );
};

export default AccountHeader;
