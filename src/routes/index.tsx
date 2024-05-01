import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home/index';
import Ranking from '../pages/Ranking';

const RoutesApp: React.FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/aulas" element={<Home />} />
    <Route path="/ranking" element={<Ranking />} />
  </Routes>
);

export default RoutesApp;
