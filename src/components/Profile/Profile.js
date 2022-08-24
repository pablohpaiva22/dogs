import React from "react";
import styles from "./Profile.module.css";
import Feed from "../Feed/Feed";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

const Profile = () => {
  const { name } = useParams();

  return (
    <div className={`${styles.container} container`}>
      <Helmet>
        <title>{name} | Dogs</title>
      </Helmet>

      <h1 className={`${styles.title} title`}>{name}</h1>
      <Feed user={name} />
    </div>
  );
};

export default Profile;
