import React from "react";
import s from "./Post.module.css";

const Post = ({ message, likesCount }) => {
  return (
    <div className={s.item}>
      <img src="https://www.w3schools.com/howto/img_avatar.png" />
      {message}
      <div>
        <span>like</span> {likesCount}
      </div>
    </div>
  );
};

export default Post;
