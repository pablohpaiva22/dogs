import React from "react";
import styles from "./ModalComments.module.css";

const ModalComments = ({ comments }) => {
  const commentSection = React.useRef(null);

  React.useEffect(() => {
    if (comments) {
      commentSection.current.scrollTop = 10000;
    }
  }, [comments]);

  return (
    <div ref={commentSection} className={styles.comments}>
      {comments.map((item, index) => {
        return (
          <ul key={index}>
            <li>
              <span
                style={{ fontWeight: "bold" }}
              >{`${item.comment_author}: `}</span>
              <span>{item.comment_content}</span>
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default ModalComments;
