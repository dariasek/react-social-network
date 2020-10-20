import React, { Component, useState, useEffect } from "react";
import styles from "./ProfileInfo.module.css";

const ProfileStatusWithHooks = (props) => {

    let [editMode,setEditMode] = useState(false);
    let [status,setStatus] = useState(props.status);

    useEffect(()=>{
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateUserStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {editMode ?
                <div>
                    <input 
                    onChange={onStatusChange} 
                    autoFocus={true} 
                    onBlur={deactivateEditMode} 
                    value={status}
                     />
                </div> :
                <div>
                    <span onDoubleClick={activateEditMode} >
                        {props.status || "No status"}
                    </span>
                </div>
            }
        </div>
    );

}


export default ProfileStatusWithHooks;
