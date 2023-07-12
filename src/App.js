import React from 'react';
import './app.css';
import HeaderContainer from './components/Header/HeaderContainer';
import NavContainer from './components/Nav/NavContainer';
import Profile from './components/Profile/Profile';
import MessagesContainer from './components/Messages/MessagesContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import UsersContainer from './components/Users/UsersContainer';
import FriendsContainer from './components/Friends/FriendsContainer';
import UsersProfileContainer from './components/UsersProfile/UsersProfileContainer';
import Settings from './components/Settings/Settings';
import LoginPageContainer from './components/Login/LoginPageContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { withAuthRedirect } from './HOC/withAuthRedirect';

let state = window.store.getState();

const App = (props) => {
  let roureConstructorOfMessages = state.messagesReduser.usersData.map((arrElement) => {
      return (
        <Route path={`/messages/dialogs/${arrElement.id}`} element={ <MessagesContainer /> } />
      )
    });

  return (
      <div className="app-wrapper">
        <HeaderContainer className='header' />
        <div className='nav-and-mainBlock'>
          <NavContainer />
          <div className='mainContent'>
            <Routes>
              <Route path="/" element={ <UsersProfileContainer />} />
              {/* <Route path="/" element={ <Profile appState={state.profileReduser} dispatch={state.dispatch} />} /> */}
              <Route path="/messages" element={ <MessagesContainer />} />
              <Route path="/news" element={ <News />} />
              <Route path="/music" element={ <Music />} />
              <Route path="/users" element={ <UsersContainer />} />
              <Route path="/friends" element={ <FriendsContainer />} />
              <Route path="/settings" element={ <Settings />} />
              <Route path="/profile/userProfile/:userId*" element={ <UsersProfileContainer />} />
              <Route path="/login" element={ <LoginPageContainer />} />
              
              {roureConstructorOfMessages}

            </Routes>

          </div>
        </div>
      </div>
  );
}

export default App;
