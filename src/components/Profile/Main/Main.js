import React from 'react';
import mainStyle from "./main.module.css"
import UsersProfileContainer from '../../UsersProfile/UsersProfileContainer';

const Main = (props) => {
    return (
        <main className={mainStyle.main}>

            <UsersProfileContainer />

        </main>
    );
}

export default Main;