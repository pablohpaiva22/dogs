import React from "react";
import FeedPhotos from "./FeedPhotos";
import FeedModal from "./FeedModal";
import { UserContext } from "../../UserContext";

const Feed = () => {
  const { modal, setModal } = React.useContext(UserContext);

  React.useEffect(() => {
    setModal(false);
  }, [setModal]);

  return (
    <section>
      <FeedPhotos />
      {modal && <FeedModal />}
    </section>
  );
};

export default Feed;
