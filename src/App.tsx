import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes/index';
import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Routes />
  </BrowserRouter>
);

export default App;
