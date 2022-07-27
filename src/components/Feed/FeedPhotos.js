import React from "react";
import { PHOTOS_GET } from "../../api";
import useFetch from "../../Hooks/useFetch";
import FeedPhotosItem from "./FeedPhotosItem";
import styles from "./FeedPhotos.module.css";

const FeedPhotos = () => {
  const { data, loading, request, error } = useFetch();

  React.useEffect(() => {
    const getphoto = async () => {
      const { url, options } = PHOTOS_GET({ page: 0, total: 6, user: 0 });
      const json = await request(url, options);
    };

    getphoto();
  }, [request]);

  if (error) return <p className="container">error</p>;
  if (loading)
    return <p className={`container ${styles.loading}`}>Carregando...</p>;
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
