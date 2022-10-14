import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./views/Home.view";
import Contact from "./views/Contact.view";
import NotFound404 from "./views/NotFound404.view";
import UserVeiw from "./views/User.veiw";
import Navbar from "./components/NavBar/Navbar";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/contato'} element={<Contact/>}/>
                <Route path={'/usuario/:userId'} element={<UserVeiw/>}/>
                <Route path={'*'} element={<NotFound404/>}/>
            </Routes>
        </BrowserRouter>

    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
