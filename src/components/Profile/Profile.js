import React from "react";
import styles from "./Profile.module.css";
import Feed from "../Feed/Feed";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { name } = useParams();

  return (
    <div className={`${styles.container} container`}>
      <h1 className={`${styles.title} title`}>{name}</h1>
      <Feed user={name} />
    </div>
  );
};

export default Profile;
