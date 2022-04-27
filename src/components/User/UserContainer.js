import { connect } from "react-redux";
import { followAC, setCurrentPageAC, setUsersAC, setUsersTotalCountAC, toggleIsFetchingAC, unfollowAC } from "../redux/users-reducer";
import React from "react";
import loading from '../../assets/images/loading.gif'
import axios from "axios";
import Users from "./Users";
class UsersContainer extends React.Component {

componentDidMount(){
this.props.toggleIsFetching(true)
  axios
  .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}& count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
      
    };
      
      onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber);
        axios
        .get(
          `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}& count=${this.props.pageSize}`
          )
          .then((response) => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items);
          });
        }
  render() {
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
    return (
      <>
      {this.props.isFeatching ? <img src={loading}/> : null}
      <Users 
      totalUsersCount={this.props.totalUsersCount}
      pageSize={this.props.pageSize}
      currentPage={this.props.currentPage}
      onPageChanged={this.onPageChanged}
      users={this.props.users}
      follow={this.props.follow}
      unfollow={this.props.unfollow}
      />
     
        </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount : state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFeatching: state.usersPage.isFeatching,
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
    setCurrentPage: (pageNumber)=>{
      dispatch(setCurrentPageAC(pageNumber))
    },
    setTotalUsersCount: (totalCount)=>{
      dispatch(setUsersTotalCountAC(totalCount))
    },
    toggleIsFetching:(isFeatching) => {
      dispatch(toggleIsFetchingAC(isFeatching))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
// export default UsersAPIComponent;