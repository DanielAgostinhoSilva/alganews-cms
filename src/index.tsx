import React from 'react';
import ReactDOM from 'react-dom';
import './core/imports.css';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from "./core/globalStyles";
import App from "./app";

ReactDOM.render(
    <React.StrictMode>
        <App />
        <GlobalStyles/>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
