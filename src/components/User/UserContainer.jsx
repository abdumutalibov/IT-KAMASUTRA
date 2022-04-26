import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import style from "./User.module.css";
import { followAC, setUsersAC, unfollowAC } from "../redux/users-reducer";
const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
