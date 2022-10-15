import React from 'react';
import ReactDOM from 'react-dom';
import './core/imports.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomeView from "./app/views/Home.view";
import Contact from "./app/views/Contact.view";
import NotFound404 from "./app/views/NotFound404.view";
import UserVeiw from "./app/views/User.veiw";
import GlobalStyles from "./core/globalStyles";
import EditorsListView from "./app/views/EditorsList.view";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<HomeView/>}/>
                <Route path={'/editores'} element={<EditorsListView/>}/>
                <Route path={'*'} element={<NotFound404/>}/>
            </Routes>
        </BrowserRouter>
        <GlobalStyles/>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
