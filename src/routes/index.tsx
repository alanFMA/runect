import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home/index';
import Termos from '../pages/Termos';
import Info from '../pages/Info';

const RoutesApp: React.FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/home" element={<Home />} />
    <Route path="/info" element={<Info />} />
    <Route path="/politicas-de-privacidade" element={<Termos />} />
  </Routes>
);

export default RoutesApp;
