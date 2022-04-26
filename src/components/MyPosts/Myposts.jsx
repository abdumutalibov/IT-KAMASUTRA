import React from "react";
import style from "./MyPosts.module.css";
import Posts from "./Post.jsx/Posts";
const Myposts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Posts message={p.messages} likesCount={p.likesCount} key={p.id} id={p.id}/>
  ));
  let newPostElement = React.createRef();
  let onAddPost = () => {
    props.addPost()
  };
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };
  return (
    <div className={style.content}>
      <h2 className={style.postsBlock}>My post</h2>
      <div>
        <textarea
          onChange={onPostChange}
          ref={newPostElement}
          value={props.newPostText}
          required
        />
      </div>
      <div>
        <button onClick={onAddPost}onChange={onPostChange}>Add post</button>
      </div>
      <div>new post</div>
      <div className={style.posts}>{postsElements}</div>
    </div>
  );
};

export default Myposts;
