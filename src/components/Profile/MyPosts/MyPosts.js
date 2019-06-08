import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = ({ posts, addPost }) => {
  let postsElements = posts.map(el => {
    const { message, likesCount } = el;
    return <Post message={message} likesCount={likesCount} />;
  });

  let newPostElement = React.createRef();

  let addPostt = () => {
    let text = newPostElement.current.value;
    addPost(text);
  };

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement} />
        </div>
        <div>
          <button onClick={addPostt}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
