import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Index from './pages/Index';
import About from './pages/About';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Route path="/" component={Index} exact />
    <Route path="/about" component={About} />
  </BrowserRouter>
);

export default Routes;
