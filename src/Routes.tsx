/* eslint-disable prettier/prettier */
/* eslint-disable simple-import-sort/imports */
/* eslint-disable prettier/prettier */
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Schedule from './pages/Schedule';
import Daily from './pages/Daily';
import Retrospective from './pages/Retrospective'
import RetroParticipation from './pages/RetroParticipation'
import Backlog from './pages/Backlog'
import AgileMetrics from './pages/AgileMetrics'
import DailyMetrics from './pages/DailyMetrics'

// import RetroBoard from './components/retro/RetroBoard.js'

const Navigation = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/daily' element={<Daily />} />
            <Route path='/daily/participation' element={<DailyMetrics />} />
            <Route path='/retrospective' element={<Retrospective />} />
            <Route path='/retrospective/participation' element={<RetroParticipation />} />
            <Route path='/backlog' element={<Backlog />} />
            <Route path='/backlog/agile' element={<AgileMetrics />} />
            <Route path="/cronograma" element={<Schedule />} />
        </Routes>
    </BrowserRouter>
);

export default Navigation;
