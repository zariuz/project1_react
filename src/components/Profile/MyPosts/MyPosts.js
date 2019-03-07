import React from 'react';
import p from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

  let post = [
    {id: 1, message: "Hi Yo", likesCount: 15},
    {id: 2, message: "Hello", likesCount: 25},
  ]

  let postsElements = post
    .map ( p => <Post message={p.message} likesCount={p.likesCount}/>);

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
      </div>
      <div className={p.posts}>
        {postsElements}
      </div>
    </div>
  );
}

export default MyPosts;
