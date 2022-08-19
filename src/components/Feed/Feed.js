import React from "react";
import styles from "./Feed.module.css";
import FeedPhotos from "./FeedPhotos";
import FeedModal from "./Modal/FeedModal";
import { UserContext } from "../../UserContext";

const Feed = () => {
  const { modal, setModal } = React.useContext(UserContext);
  const [pages, setPages] = React.useState([0]);
  const [infinite, setInfinite] = React.useState(true);

  React.useEffect(() => {
    let wait = false;

    function infiniteScroll() {
      if (infinite) {
        const scroll = window.scrollY;
        const height = document.body.offsetHeight - window.innerHeight;

        if (scroll > height * 0.9 && !wait) {
          setPages((pages) => [...pages, pages.length]);
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
  }, [infinite, pages]);

  React.useEffect(() => {
    setModal(false);
  }, [setModal]);

  return (
    <>
      {pages.map((page) => {
        return (
          <FeedPhotos key={page} pageNumber={page} setInfinite={setInfinite} />
        );
      })}

      {!infinite && <p className={styles.text}>Não existem mais postagens.</p>}

      {modal && <FeedModal />}
    </>
  );
};

export default Feed;
