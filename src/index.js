import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

// let state = store.getState();
// let dispatch = store.dispatch.bind(store);

// let rerenderEntireTree = (store) => {

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
        <HashRouter basename={process.env.PUBLIC_URL}>
          <Provider store={store}>
            <App /*appState={state} dispatch={dispatch}*/ />
          </Provider>
        </HashRouter>
      </React.StrictMode>
    );
//}

// rerenderEntireTree();

// store.subscribe( () => {
//     rerenderEntireTree();
// });

// store.subscribe(store.rerenderEntireTree(store));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
