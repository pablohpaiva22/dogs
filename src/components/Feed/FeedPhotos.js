import React from "react";
import styles from "./FeedPhotos.module.css";
import useFetch from "../../Hooks/useFetch";
import FeedPhotosItem from "./FeedPhotosItem";
import Loading from "../Utilitarios/Loading";
import { PHOTOS_GET } from "../../api";

const FeedPhotos = ({ user }) => {
  const { data, loading, request, error } = useFetch();

  React.useEffect(() => {
    const getPhotos = async () => {
      const { url, options } = PHOTOS_GET({ page: 0, total: 6, user });
      await request(url, options);
    };

    getPhotos();
  }, [request, user]);

  if (error) return <p className="container">error</p>;
  if (loading) return <Loading />;
  if (data)
    return (
      <ul className={`container ${styles.photos}`}>
        {data.map((item) => {
          return <FeedPhotosItem key={item.id} photo={item} />;
        })}
      </ul>
    );
};

export default FeedPhotos;
