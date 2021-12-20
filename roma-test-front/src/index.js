import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from "react-router-dom";

import App from './App';
import SignIn from "./Pages/authorization/authorization";
import Home from "./Pages/Home";
import Maps from "./Pages/Maps";
import Map from "./components/Map";
import Error from "./Pages/Error";

ReactDOM.render((
  <BrowserRouter>
      <App>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/maps' component={Maps}/>
          <Route path='/maps/:id' component={Map}/>
          <Route path='/authorization' component={SignIn}/>
          <Route path='*' component={Error} />
        </Switch>
      </App>
  </BrowserRouter>

),document.getElementById('root'));

