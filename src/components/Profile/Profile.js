import React from 'react';
import Main from './Main/Main.js';
import profileStyle from "./profile.module.css";

const Profile = (props) => {
  return (
    <div className={profileStyle.profile}>
        <Main appState={props.appState} dispatch={props.dispatch} />
    </div>
  );
}

export default Profile;