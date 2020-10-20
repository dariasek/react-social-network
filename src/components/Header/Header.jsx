import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <img src="https://static.rfstat.com/renderforest/images/v2/logo-homepage/gradient_2.png" />

      <div className={styles.loginBlock}>
        {props.isAuth ? 
        <div>
          {props.login} <button onClick={props.logout}>Log Out</button>
        </div>
        : <NavLink to="/login">Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
