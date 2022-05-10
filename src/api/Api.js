import React from "react";
import UserPost from "./endpoints/UserPost";
import TokenPost from "./endpoints/TokenPost";
import PhotoPost from "./endpoints/PhotoPost";
import PhotoGet from "./endpoints/PhotoGet";

const Api = () => {
  return (
    <div>
      <UserPost />
      <TokenPost />
      <PhotoPost />
      <PhotoGet />
    </div>
  );
};

export default Api;
