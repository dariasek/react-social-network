import React, { Component } from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.posts.map((el) => (
    <Post likeCounter={el.likesCount} message={el.post} />
  ));

  let newPostEl = React.createRef();
  let onPostAdd = () => {
    props.addPost();
  };
  let onPostChange = () => {
    let text = newPostEl.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={styles.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            ref={newPostEl}
            onChange={onPostChange}
            value={props.newPostText}
          />
        </div>

        <button onClick={onPostAdd}>Add post</button>
      </div>
      <div className={styles.posts}>{postsElements}</div>
    </div>
  );
}

export default MyPosts;
