import React, { Component } from "react";
import axios from "axios";
import style from "./User.module.css";
import userPhoto from "../../assets/images/more.jpg";
class UsersC extends React.Component {
  constructor(props){
    super(props)
    alert('new post')
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then((response) => {
          this.props.setUsers(response.data.items);
        });
  }


  render() {
    return (
      <div className={style.user}>
        <button onClick={this.getUsers}> Get Users</button>
        {this.props.users.map((u) => (
          <div key={u.id}>
            <span>
              <div>
                <img
                  className={style.photo}
                  src={u.photos.small != null ? u.photos.small : userPhoto}
                  alt=""
                />
              </div>
              <div>
                {u.followed ? (
                  <button
                    onClick={() => {
                      this.props.unfollow(u.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      this.props.follow(u.id);
                    }}
                  >
                    Follow
                  </button>
                )}
              </div>
            </span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{"u.location.country"}</div>
              <div>{"u.location.city"}</div>
            </span>
          </div>
        ))}
      </div>
    );
  }
}
export default UsersC;
