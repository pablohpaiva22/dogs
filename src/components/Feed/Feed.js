import React from "react";
import FeedPhotos from "./FeedPhotos";
import FeedModal from "./Modal/FeedModal";
import { UserContext } from "../../UserContext";

const Feed = () => {
  const { modal, setModal } = React.useContext(UserContext);
  const [pages, setPages] = React.useState([0]);
  const [inifite, setInfinite] = React.useState(true);

  React.useEffect(() => {
    let wait = false;

    function infiniteScroll() {
      if (inifite) {
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
  }, [inifite]);

  React.useEffect(() => {
    setModal(false);
  }, [setModal]);

  return (
    <>
      {pages.map((item, index) => {
        return (
          <FeedPhotos
            key={index}
            user={0}
            pageNumber={item}
            setInfinite={setInfinite}
          />
        );
      })}

      {modal && <FeedModal />}
    </>
  );
};

export default Feed;
