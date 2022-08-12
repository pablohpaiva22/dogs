import React from "react";
import { UserContext } from "../../UserContext";
import FeedPhotos from "../Feed/FeedPhotos";

const AccountProfile = () => {
  const { data } = React.useContext(UserContext);

  return <FeedPhotos user={data.id} />;
};

export default AccountProfile;
