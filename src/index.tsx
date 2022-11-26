import React from 'react';
import ReactDOM from 'react-dom';
import './core/imports.css';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from "./core/globalStyles";
import App from "./app";
import {Provider} from "react-redux";
import store from './core/store'

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
        <GlobalStyles/>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
