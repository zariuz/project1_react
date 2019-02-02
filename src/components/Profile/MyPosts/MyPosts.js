import React from 'react';
import p from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
        <button>Remove</button>
      </div>
      <div className={p.posts}>
        <Post message="Hi" like="15"/>
        <Post message="Hello" like="20"/>
        <Post message="I'am fine" like="25"/>
      </div>
    </div>
  );
}

export default MyPosts;
