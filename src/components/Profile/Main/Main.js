import React from 'react';
import mainStyle from "./main.module.css"
import Posts from './Posts/Posts';
import UserItems from './UserItems/UserItems';
import PostsContainer from './Posts/PostsContainer';

const Main = (props) => {
    return (
        <main className={mainStyle.main}>

            <UserItems />
            <PostsContainer /*appState={props.appState}*/ dispatch={props.dispatch} />

        </main>
    );
}

export default Main;