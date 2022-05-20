import React from 'react';
import Main from "./Pages/Main";
import "./app.css";
import { Routes, Route } from "react-router-dom";
import DetailsView from './Pages/Details';

const App = () => {
    return(
        <div className=''>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="details/" element={<DetailsView />} />
            </Routes>
        </div>     
    );
};

export default App;