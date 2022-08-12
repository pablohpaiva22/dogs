import React from "react";
import { PHOTOS_GET } from "../../api";
import useFetch from "../../Hooks/useFetch";
import FeedPhotosItem from "./FeedPhotosItem";
import styles from "./FeedPhotos.module.css";
import Loading from "../Utilitarios/Loading";

const FeedPhotos = ({ user }) => {
  const { data, loading, request, error } = useFetch();

  React.useEffect(() => {
    const getphoto = async () => {
      const { url, options } = PHOTOS_GET({ page: 0, total: 6, user });
      await request(url, options);
    };

    getphoto();
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
