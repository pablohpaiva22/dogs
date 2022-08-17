import React from "react";
import { UserContext } from "../../UserContext";
import FeedPhotos from "../Feed/FeedPhotos";

const AccountProfile = () => {
  const { data } = React.useContext(UserContext);

  return (
    <div>
      <FeedPhotos user={data.id} />
    </div>
  );
};

export default AccountProfile;
