/* eslint-disable prettier/prettier */
/* eslint-disable simple-import-sort/imports */
/* eslint-disable prettier/prettier */
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import ProfessorArea from './pages/ProfessorArea';
import Schedule from './pages/Schedule';
import Retrospective from './pages/Retrospective';
import Backlog from './pages/Backlog';

const Navigation = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/area-professor" element={<ProfessorArea />} />
            <Route path="/cronograma" element={<Schedule />} />
            <Route path='/home' element={<Home />} />
            {/* <Route path='/daily' element={<Daily />} /> */}
            <Route path='/backlog' element={<Backlog />} />
            <Route path='/retrospective' element={<Retrospective />} />
        </Routes>
    </BrowserRouter>
);

export default Navigation;
