import React, { Component } from "react";
import styles from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {

  if (!props.profile){
    return <Preloader />
  }

  return (
    <div>
      <div>
        {/* background picture */}
        <img src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg" />
      </div>
      <div className={styles.descriptionBlock}>
        {/* ava + description */}
        <img src={props.profile.photos.large} />
      </div>
    </div>
  );
}


export default ProfileInfo;
