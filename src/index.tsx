import React from 'react';
import ReactDOM from 'react-dom';
import './core/imports.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./app/views/Home.view";
import Contact from "./app/views/Contact.view";
import NotFound404 from "./app/views/NotFound404.view";
import UserVeiw from "./app/views/User.veiw";
import Navbar from "./app/components/NavBar/Navbar";

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

reportWebVitals();
