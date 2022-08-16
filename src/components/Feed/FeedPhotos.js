import React from "react";
import styles from "./FeedPhotos.module.css";
import useFetch from "../../Hooks/useFetch";
import FeedPhotosItem from "./FeedPhotosItem";
import Loading from "../Utilitarios/Loading";
import { PHOTOS_GET } from "../../api";

const FeedPhotos = ({ user, pageNumber, setInfinite }) => {
  const { data, loading, request, error } = useFetch();

  React.useEffect(() => {
    const getPhotos = async () => {
      const { url, options } = PHOTOS_GET({ page: pageNumber, total: 6, user });

      const { response, json } = await request(url, options);

      if (response && response.ok && json.length < 3) setInfinite(false);
    };

    getPhotos();
  }, [request, user, pageNumber, setInfinite]);

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
