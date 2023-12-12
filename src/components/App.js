import React from 'react';

import Home from '../pages/home';
import Proyects from '../pages/projects';

import Navbar from './navbar';

import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/projects" element={<Proyects />} />
            </Routes>
        </Router>
    );
}

export default App;