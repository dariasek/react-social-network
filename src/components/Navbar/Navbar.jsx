import React, { Component } from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";


const Navbar = (props) => {
  return(
    <nav className={styles.nav}>
        <div className={styles.item}>
          <NavLink to="/profile" activeClassName={styles.active}>
            Profile
          </NavLink>
        </div>
        <div className={styles.item}>
          <NavLink to="/dialogs" activeClassName={styles.active}>
            Messages
          </NavLink>
        </div>
        <div className={styles.item}>
          <NavLink to="/users" activeClassName={styles.active}>
            Users
          </NavLink>
        </div>
        <div className={styles.item}>
          <NavLink to="/news" activeClassName={styles.active}>
            News
          </NavLink>
        </div>
        <div className={styles.item}>
          <NavLink to="/music" activeClassName={styles.active}>
            Music
          </NavLink>
        </div>
        <div className={styles.item}>
          <NavLink to="/settings" activeClassName={styles.active}>
            Settings
          </NavLink>
        </div><br />
        

        <div>
          <div>Friends</div>
          <div className={styles.friendsSidebar}>
            {/* {friendsSidebar} */}
          </div>
        </div>
      </nav>
  )
}


    // let friendsSidebar = this.props.state.friends.map((el) => {
    //   return <div className={styles.friendsItem}>{el}</div>;
    // });


export default Navbar;
