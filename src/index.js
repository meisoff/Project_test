import React from 'react';
import ReactDOM from 'react-dom';
import store from "./writtenRedux/state";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App appState={store.getState()} dispatch={store.dispatch.bind(store)} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());
store.rerenderPage(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
