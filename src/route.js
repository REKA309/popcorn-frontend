import React from 'react';
import {BrowserRouter as Router, Route,Routes } from 'react-router-dom';

import App from './App';
export default function RouteFunction()
{
    return(
        <div>
            <Router>
            <Routes>
                <Route exact path='/' element={<App/>}/>
                
              
            </Routes>
            </Router>
        
        </div>
    )
}