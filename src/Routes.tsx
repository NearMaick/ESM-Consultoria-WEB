import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Index from './pages/Index';
import About from './pages/About';
import Consulting from './pages/Consulting';
import Regulations from './pages/Regulations';
import OneToFive from './pages/Regulations/OneToFive';
import SixToTen from './pages/Regulations/SixToTen';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Route path="/" component={Index} exact />
    <Route path="/about" component={About} />
    <Route path="/consulting" component={Consulting} />
    <Route path="/regulations" component={Regulations} />

    <Route path="/regulations/one-five" component={OneToFive} />
    <Route path="/six-ten" component={SixToTen} />
  </BrowserRouter>
);

export default Routes;
