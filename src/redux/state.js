
import { Route } from "react-router-dom";
import Messages from "../components/Messages/Messages";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './../App';
import profileReduser from "./profile_reduser";
import messagesReduser from "./messages_reduser";

let store = {
  
    rerenderEntireTree(store) {

        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(
          <React.StrictMode>
            <App appState={store.getState()} dispatch={store.dispatch.bind(store)} />
          </React.StrictMode>
        );
    },


    _state: {
        messages_page: {
            usersData: [
                { id: 1, name: 'Oliver', lastName: 'Elsher' },
                { id: 2, name: 'Charlotte', lastName: 'Solace' },
                { id: 3, name: 'Declan', lastName: 'Levine' },
                { id: 4, name: 'Aurora', lastName: 'Thatcher' },
                { id: 5, name: 'Theodore', lastName: 'Raven' },
                { id: 6, name: 'Violet', lastName: 'Bardot' },
                { id: 7, name: 'Jasper', lastName: 'Hansley' },
                { id: 8, name: 'Hazel', lastName: 'Cromwell' },
                { id: 9, name: 'Silas', lastName: 'Ashley' },
                { id: 10, name: 'Luna', lastName: 'Namiel' }],

            userDialogsData: [ // isMyMessage ? id = 1 : id = 0;
                { id: 0, iserId: 1, iserId: 1, message: 'Hello!' },
                { id: 1, iserId: 1, message: 'Hi! How are you? =)' },
                { id: 0, iserId: 1, message: 'Good, thank\'s!' },
                { id: 0, iserId: 1, message: 'You?' },
                { id: 1, iserId: 1, message: 'Me too!' }],

            newMessageBody: '',
        },

        profile_page: {
            postsData: [
                { id: 1, img: 'https://images.unsplash.com/photo-1618614944895-fc409a83ad80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8MSUzQTF8ZW58MHx8MHx8&w=1000&q=80', name: 'James', secondname: 'Lee', likecount: 0, dislikecount: 0, repostcount: 3, text: 'ASDasdasdasd' },
                { id: 2, img: 'https://images.unsplash.com/photo-1618614944895-fc409a83ad80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8MSUzQTF8ZW58MHx8MHx8&w=1000&q=80', name: 'Jerry', secondname: 'Hary', likecount: 21, dislikecount: 0, repostcount: 0, text: ';aslkdkalks;dfjasdlkf;jsadlkfj' },
                { id: 3, img: 'https://images.unsplash.com/photo-1618614944895-fc409a83ad80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8MSUzQTF8ZW58MHx8MHx8&w=1000&q=80', name: 'Bob', secondname: 'Mcwood', likecount: 0, dislikecount: 5, repostcount: 2, text: 'BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB' }
            ],

            postsData_count: 3,
        },
    },

    getState() {
        return this._state;
    },

    _callSubscriber() { 
        console.log('asd');
    },

    

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        debugger;
        this._state.messages_page = messagesReduser(this._state.messages_page, action);
        this._state.profile_page = profileReduser(this._state.profile_page, action);
        
        this.rerenderEntireTree(store);
    },

};


export default store;