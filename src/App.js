import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import { Route, BrowserRouter, withRouter } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import { connect } from "react-redux";
import { compose } from "redux";
import { initializeApp } from './redux/appReducer'
import Preloader from "./components/common/Preloader/Preloader";

class App extends React.Component {
  
  componentDidMount() {
    this.props.initializeApp();
  }

  render(){

    if (!this.props.initialized){
      return <Preloader />
    }
    
    return (
        <div className="app-wrapper">
          <HeaderContainer />
          <Navbar />
          <div className="app-wrapper-content">
            <Route
              path="/dialogs"
              render={() => <DialogsContainer />}
            />
            <Route
              path="/profile/:userId?"
              render={() => <ProfileContainer />}
            />
            <Route path="/login" render={() => <Login /> } />
            <Route path="/users" render={() => <UsersContainer /> } />
            <Route path="/music" render={() => <Music />} />
            <Route path="/settings" render={() => <Settings />} />
            <Route path="/news" render={() => <News />} />
          </div>
        </div>
    );
  }
}

let mapStateToProps = (state) => ({
  initialized: state.app.initialized,
})

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);
