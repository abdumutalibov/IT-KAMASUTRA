import React from "react";
import MyPostsContainer from "../MyPosts/MyPostsContainer";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import style from "./Profile.module.css";
const Profile = (props) => {
  return (
    <div className={style.content}>
      <ProfileInfo />

      <MyPostsContainer />
    </div>
  );
};

export default Profile;
