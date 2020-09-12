import React, { Component } from "react";
import Profile from "./Profile";
import Axios from "axios";
import { connect } from "react-redux";
import {setUserProfile} from '../../redux/profileReducer';
import { withRouter } from "react-router-dom";

class ProfileContainer extends Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId){
      userId = 2;
    }
    Axios.get(
      `https://social-network.samuraijs.com/api/1.0/profile/${userId}`
    ).then((Response) => {
      this.props.setUserProfile(Response.data)
    });
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
})

let withUrlDataContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(withUrlDataContainer);
