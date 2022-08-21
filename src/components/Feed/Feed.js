import React from "react";
import styles from "./Feed.module.css";
import FeedPhotos from "./FeedPhotos";
import FeedModal from "./Modal/FeedModal";
import { UserContext } from "../../UserContext";

const Feed = ({ user }) => {
  const { modal, setModal } = React.useContext(UserContext);
  const [pages, setPages] = React.useState([1]);
  const [infinite, setInfinite] = React.useState(true);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  React.useEffect(() => {
    let wait = false;

    function infiniteScroll() {
      if (infinite) {
        const scroll = window.scrollY;
        const height = document.body.offsetHeight - window.innerHeight;

        if (scroll > height * 0.9 && !wait) {
          setPages((pages) => [...pages, pages.length + 1]);
          wait = true;
          setTimeout(() => {
            wait = false;
          }, [1000]);
        }
      }
    }

    window.addEventListener("scroll", infiniteScroll);
    window.addEventListener("wheel", infiniteScroll);

    return () => {
      window.removeEventListener("scroll", infiniteScroll);
      window.removeEventListener("wheel", infiniteScroll);
    };
  }, [infinite]);

  React.useEffect(() => {
    setModal(false);
  }, [setModal]);

  return (
    <>
      {pages.map((page) => {
        return (
          <FeedPhotos
            user={user}
            key={page}
            page={page}
            setInfinite={setInfinite}
          />
        );
      })}

      {!infinite && <p className={styles.text}>Não existem mais postagens.</p>}

      {modal && <FeedModal />}
    </>
  );
};

export default Feed;
