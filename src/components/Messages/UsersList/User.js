import React from 'react';
import userStyle from './user.module.css';
import { NavLink } from 'react-router-dom';

const User = (props) => {
  debugger
  return (
    <div>
      <div className={userStyle.dialogsItem}>
        
        <img src={props.photo}></img>
        {props.userName}
        
      </div>
    </div>
  );
}

export default User;