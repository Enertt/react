import React from 'react';
import userStyle from './user.module.css';
import { NavLink } from 'react-router-dom';

const User = (props) => {
  return (
    <div>
      <div className={userStyle.dialogsItem}>
          <NavLink to={props.linkTo} className = { userData => userData.isActive ? userStyle.active : userStyle.item }>{props.name} {props.lastName}</NavLink>
        </div>
    </div>
  );
}

export default User;