import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import { Route, BrowserRouter } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar
        //  state={props.state.sidebar}
          />
        <div className="app-wrapper-content">
          <Route
            path="/dialogs"
            render={() => <DialogsContainer 
              // store={props.store} 
              />}
          />
          <Route
            path="/profile/:userId?"
            render={() => <ProfileContainer 
              //store={props.store}
               />}
          />
          <Route path="/users" render={() => <UsersContainer /> } />
          <Route path="/music" render={() => <Music />} />
          <Route path="/settings" render={() => <Settings />} />
          <Route path="/news" render={() => <News />} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
