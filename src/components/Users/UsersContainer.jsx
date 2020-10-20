import React, { Component } from "react";
import Users from "./Users";
import { connect } from 'react-redux';
import { follow, unfollow, setCurrentPage, requestUsers} from '../../redux/usersReducer';
import Preloader from "../common/Preloader/Preloader";
import { getPageSize, getTotalUsersCount,
 getCurrentPage, getIsFetching, getFollowingInProgress, getUsers } from "../../redux/usersSelectors";

class UsersAPI extends Component {
  componentDidMount() {
    if (this.props.users.length === 0) {
      this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    }
  }

  onPageChange = (page) => {
    this.props.setCurrentPage(page);
    this.props.requestUsers(page, this.props.pageSize);
  }

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          users={this.props.users}
          unfollow={this.props.unfollow}
          follow={this.props.follow}
          onPageChange={this.onPageChange}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  }
}

// let mapStateToProps = (state) => {
//   return {
//     users: state.usersPage.users,
//     pageSize: state.usersPage.pageSize,
//     totalUsersCount: state.usersPage.totalUsersCount,
//     currentPage: state.usersPage.currentPage,
//     isFetching: state.usersPage.isFetching,
//     followingInProgress: state.usersPage.followingInProgress,
//   }
// };

let mapStateToProps = (state) => {
  console.log('mapStatetoProps Users ')

  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state) ,
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  }
};


export default connect(mapStateToProps,
  {
    follow,
    unfollow,
    setCurrentPage,
    requestUsers,
  }
)(UsersAPI);