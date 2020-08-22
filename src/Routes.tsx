import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Index from './pages/Index';
import About from './pages/About';
import Consulting from './pages/Consulting';
import Regulations from './pages/Regulations';

import Five from './pages/Regulations/Five';
import Six from './pages/Regulations/Six';
import Ten from './pages/Regulations/Ten';
import Eleven from './pages/Regulations/Eleven';
import Twelve from './pages/Regulations/Twelve';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Route path="/" component={Index} exact />
    <Route path="/about" component={About} />
    <Route path="/consulting" component={Consulting} />
    <Route path="/regulations" component={Regulations} />

    <Route path="/regulations/five" component={Five} />
    <Route path="/regulations/six" component={Six} />
    <Route path="/regulations/ten" component={Ten} />
    <Route path="/regulations/eleven" component={Eleven} />
    <Route path="/regulations/twelve" component={Twelve} />
  </BrowserRouter>
);

export default Routes;
