import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = ({ posts }) => {
  let postsElements = posts.map(el => {
    const { message, likesCount } = el;
    return <Post message={message} likesCount={likesCount} />;
  });

  let addPost = () => alert("Hey hey hey!!!");

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
