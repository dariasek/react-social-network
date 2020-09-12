import React, { Component } from 'react';
import styles from './Message.module.css';

class Message extends Component {
    render() {

      let messageStyle = this.props.messageStyle;
      
      return (
      <div className={`${styles.message} ${messageStyle}`}>
        {/* <img src={this.props.img} /> */}
        {this.props.message}
        </div>);
    }
  }
  
  export default Message;
  
