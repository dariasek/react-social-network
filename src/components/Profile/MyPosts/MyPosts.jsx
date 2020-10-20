import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.posts.map((el) => (
    <Post likeCounter={el.likesCount} message={el.post} />
  ));

  let onPostAdd = (values) => {
    props.addPost(values.newPost);
  };

  return (
    <div className={styles.postsBlock}>
      <h3>My posts</h3>
      <AddNewPostFormRedux onSubmit={onPostAdd} />
      <div className={styles.posts}>{postsElements}</div>
    </div>
  );
}

let maxLength10 = maxLengthCreator(10)

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field 
        name="newPost"
        component={Textarea}
        validate={[required, maxLength10 ]}
        placeholder="Post a message"
      />
      <br />
      <button>Add post</button>
    </form>
  )
}

const AddNewPostFormRedux = reduxForm({form:"AddNewPost"})(AddNewPostForm)

export default MyPosts;
