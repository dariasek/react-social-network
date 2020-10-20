import React from "react";
import styles from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {

  if (!props.profile){
    return <Preloader />
  }

  return (
    <div>
      {/* <div>
        <img src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg" />
      </div> */}
      <div className={styles.descriptionBlock}>
        {/* ava + description */}
        <img src={props.profile.photos.large} />
        <ProfileStatusWithHooks updateUserStatus={props.updateUserStatus} status={props.status} />
      </div>
    </div>
  );
}


export default ProfileInfo;
