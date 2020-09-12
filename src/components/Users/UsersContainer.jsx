import React, { Component } from "react";
import Axios from "axios";
import Users from "./Users";
import { connect } from 'react-redux';
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching } from '../../redux/usersReducer';
import Preloader from "../common/Preloader/Preloader";

class UsersAPI extends Component {
    componentDidMount() {
          if (this.props.users.length === 0) {
            this.props.toggleIsFetching(true)
            Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(
                (Response) => {
                    this.props.toggleIsFetching(false);
                    this.props.setUsers(Response.data.items);
                    this.props.setTotalUsersCount(Response.data.totalCount);
                }
            );
          }
      }
      
      onPageChange = (page) => {
          this.props.setCurrentPage(page);
          this.props.toggleIsFetching(true);
          Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(
                  (Response) => {
                    this.props.toggleIsFetching(false);
                    this.props.setUsers(Response.data.items);
                  }
          );
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
            // isFetching={this.props.isFetching}
          />
        </>
      );
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
};

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId));
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId));
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users));
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber));
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setTotalUsersCountAC(totalCount));
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching));
//         }
//     }
// }

export default connect(mapStateToProps, 
    {
        follow,
        unfollow,
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        toggleIsFetching,
    }
    )(UsersAPI);