import React from 'react';
import p from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div className={p.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
        <div>
          <button>Remove</button>
        </div>
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
