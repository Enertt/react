import React from 'react';
import navStyle from "./nav.module.css"
import { NavLink } from 'react-router-dom';

const Nav = (props) => {
    return (
        <nav className={navStyle.nav}>
            <div className={navStyle.item}>
                <NavLink to={`/profile/userProfile/${props.myId}`} className = { navData => navData.isActive ? navStyle.active : navStyle.item }>
                    <span>Profile</span>
                </NavLink>
            </div>

            <div className={navStyle.item}>
                <NavLink to='/messages' className = { navData => navData.isActive ? navStyle.active : navStyle.item }>
                    <span>Messages</span>
                </NavLink>
            </div>

            <div className={navStyle.item}>
                {/* <NavLink to='/news' className = { navData => navData.isActive ? navStyle.active : navStyle.item }> */}
                    <span className={navStyle.itemDisabled}>News</span>
                {/* </NavLink> */}
            </div>

            <div className={navStyle.item}>
                {/* <NavLink to='/music' className = { navData => navData.isActive ? navStyle.active : navStyle.item }> */}
                    <span className={navStyle.itemDisabled}>Music</span>
                {/* </NavLink> */}
            </div>

            <div className={navStyle.item}>
                <NavLink to='/users' className = { navData => navData.isActive ? navStyle.active : navStyle.item }>
                    <span>Users</span>
                </NavLink>
            </div>

            {/* <div className={navStyle.item}>
                <NavLink to='/friends' className = { navData => navData.isActive ? navStyle.active : navStyle.item }>
                    <span>Friends</span>
                </NavLink>
            </div> */}

            <div className={navStyle.item}>
                {/* <NavLink to='/settings' className = { navData => navData.isActive ? navStyle.active : navStyle.item }> */}
                    <span className={navStyle.itemDisabled}>Settings</span>
                {/* </NavLink> */}
            </div>

            {/* <NavLink to='/login' >L</NavLink> */}

        </nav>
    );
}

export default Nav;