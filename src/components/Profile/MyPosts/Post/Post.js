import React from 'react';
import p from './Post.module.css';

const Post = (props) => {

  return (
    <div className={p.item}>
      <img src="https://www.w3schools.com/howto/img_avatar.png" />
      {props.message}
      <div>
        <span>like</span> {props.likesCount}
      </div>
    </div>
  );
}

export default Post;
