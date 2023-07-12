import React from 'react';
import headerStyle from "./header.module.css";
import { NavLink } from 'react-router-dom';

const Header = (props) => {


  return (
    <header className={headerStyle.header}>
      <div className={headerStyle.loginInfo}>
        <NavLink to={props.urlPath} >

            {() => {
              if(props.isAuth)
              {
                props.setUrlPathAC();
                return <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
              }
              else
              {
                return <button className={headerStyle.loginButton}>Login</button>
              }
            }}

        </NavLink>

        {(
          () => {
          if(props.isAuth){
            return <button onClick={props.logoutThunkCreator} className={headerStyle.logoutButton}>Logout</button>
          }
        }
        )()}

      </div>
    </header>
  );
}

export default Header;