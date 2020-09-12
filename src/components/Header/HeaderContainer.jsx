import React, { Component } from "react";
import styles from "./Header.module.css";
import Header from "./Header";
import Axios from 'axios';
import { connect } from "react-redux";
import { setAuthUserData } from '../../redux/authReducer';

class HeaderContainer extends Component {
  componentDidMount() {
    Axios.get(
      `https://social-network.samuraijs.com/api/1.0/auth/me`,
      {withCredentials:true}
    ).then((Response) => {
      if(Response.data.resultCode === 0){
        let {id, login, email} = Response.data.data;
        this.props.setAuthUserData(id,email,login)
      }
    });
  }

  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
})

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);
