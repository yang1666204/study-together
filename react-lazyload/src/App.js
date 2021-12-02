import logo from './logo.svg';
import './App.css';
// import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import React from 'react';
import ComponentA from './a';
import ComponentB from './b';
import { useHistory } from 'react-router'
import { BrowserRouter as Router, Route, Link, Switch, Routes } from "react-router-dom";
import loadable from '@loadable/component'
import ComponentHome from './home';

// const OtherComponent = loadable(() => import('./OtherComponent'))

function App() {

  return (
    <div>
      aaa
      <button > bb</button>
      <Router>
        <Switch>
          <Route exact path="/" component={ComponentHome} />
          <Route  path="/a" component={ComponentA} />
          <Route path="/b" component={ComponentB} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
