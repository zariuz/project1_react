import React from 'react';
import p from './Post.module.css';

const Post = () => {
  return (
    <div className={p.item}>
      <img src="https://www.w3schools.com/howto/img_avatar.png" />
      post 1
      <div>
        <span>like</span>
      </div>
    </div>
  );
}

export default Post;
