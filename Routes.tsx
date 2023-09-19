/* eslint-disable prettier/prettier */
/* eslint-disable simple-import-sort/imports */
/* eslint-disable prettier/prettier */
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Schedule from './pages/Schedule';
import Daily from './pages/Daily';

const Navigation = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/daily' element={<Daily />} />
            <Route path="/cronograma" element={<Schedule />} />
        </Routes>
    </BrowserRouter>
);

export default Navigation;
