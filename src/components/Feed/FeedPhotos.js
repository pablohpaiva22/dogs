import React from "react";
import styles from "./FeedPhotos.module.css";
import useFetch from "../../Hooks/useFetch";
import FeedPhotosItem from "./FeedPhotosItem";
import Loading from "../Utilities/Loading";
import { PHOTOS_GET } from "../../api";

const FeedPhotos = ({ user, page, setInfinite }) => {
  const { data, loading, request, error } = useFetch();
  const photosContent = React.useRef(null);

  React.useEffect(() => {
    if (photosContent.current && data.length === 0) {
      photosContent.current.style.display = "none";
    }
  });

  React.useEffect(() => {
    const getPhotos = async () => {
      const { url, options } = PHOTOS_GET({ page, total: 6, user });
      const { response, json } = await request(url, options);

      if (response && response.ok && json.length < 6) {
        setInfinite(false);
      }
    };

    getPhotos();
  }, [page, request, setInfinite, user]);

  if (error) return <p className="container">Error.</p>;
  if (loading) return <Loading />;
  if (data)
    return (
      <ul ref={photosContent} className={`container ${styles.photos}`}>
        {data.map((photo) => {
          return <FeedPhotosItem key={photo.id} photo={photo} />;
        })}
      </ul>
    );
};

export default FeedPhotos;
