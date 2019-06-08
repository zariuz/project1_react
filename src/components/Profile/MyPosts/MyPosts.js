import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = ({ posts, addPost, newPostText, updateNewPostText }) => {
  let postsElements = posts.map(el => {
    const { message, likesCount } = el;
    return <Post message={message} likesCount={likesCount} />;
  });

  let newPostElement = React.createRef();

  let addPostt = () => {
    addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    updateNewPostText(text);
  };

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            value={newPostText}
          />
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
