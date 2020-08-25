import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Index from './pages/Index';
import About from './pages/About';
import Consulting from './pages/Consulting';
import Regulations from './pages/Regulations';

import IndexRegulation from './pages/Regulations/Index';
import Five from './pages/Regulations/Five';
import Six from './pages/Regulations/Six';
import Ten from './pages/Regulations/Ten';
import Eleven from './pages/Regulations/Eleven';
import Twelve from './pages/Regulations/Twelve';
import Seventeen from './pages/Regulations/Seventeen';
import Eighteen from './pages/Regulations/Eighteen';
import TwentyThree from './pages/Regulations/TwentyThree';
import ThirtyThree from './pages/Regulations/ThirtyThree';
import ThirtyFive from './pages/Regulations/ThirtyFive';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Route path="/" component={Index} exact />
    <Route path="/about" component={About} />
    <Route path="/consulting" component={Consulting} />
    <Route path="/regulations" component={Regulations} />

    <Route path="/regulations/index" component={IndexRegulation} />

    <Route path="/regulations/five" component={Five} />
    <Route path="/regulations/six" component={Six} />
    <Route path="/regulations/ten" component={Ten} />
    <Route path="/regulations/eleven" component={Eleven} />
    <Route path="/regulations/twelve" component={Twelve} />
    <Route path="/regulations/seventeen" component={Seventeen} />
    <Route path="/regulations/eighteen" component={Eighteen} />
    <Route path="/regulations/twenty-three" component={TwentyThree} />
    <Route path="/regulations/thirty-three" component={ThirtyThree} />
    <Route path="/regulations/thirty-five" component={ThirtyFive} />
  </BrowserRouter>
);

export default Routes;
