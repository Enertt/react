import React from 'react';
import './app.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import MessagesContainer from './components/Messages/MessagesContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Users from './components/Users/Users';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

let state = window.store.getState();

const App = (props) => {
  debugger;
  let roureConstructorOfMessages = state.messagesReduser.usersData.map((arrElement) => {
      return (
        <Route path={`/messages/dialogs/${arrElement.id}`} element={<MessagesContainer appState={state} dispatch={state.dispatch} />} />
      )
    });
// last mark
  return (
      <div className="app-wrapper">
        <Header className='header' />
        <div className='nav-and-mainBlock'>
          <Nav />
          <div className='mainContent'>
            <Routes>
              <Route path="/" element={<Profile appState={state.profileReduser} dispatch={state.dispatch} />} />
              <Route path="/profile" element={<Profile appState={state.profileReduser} dispatch={state.dispatch} />} />
              <Route path="/messages" element={<MessagesContainer appState={state} dispatch={state.dispatch} />} />
              <Route path="/news" element={<News />} />
              <Route path="/music" element={<Music />} />
              <Route path="/users" element={<Users />} />
              <Route path="/settings" element={<Settings />} />
              
              {roureConstructorOfMessages}

            </Routes>

          </div>
        </div>
      </div>
  );
}

export default App;
