import React, { Component } from 'react';
import styles from './DialogItem.module.css';
import { NavLink } from "react-router-dom";


class DialogItem extends Component {
    render() {
      return (
        <div className={styles.dialog}>
          <NavLink to={`/dialogs/${this.props.id}`}>
            <img src={this.props.img} className={styles.img} />
            {this.props.name}
            </NavLink>
        </div>
      );
    }
  }
  
  export default DialogItem;