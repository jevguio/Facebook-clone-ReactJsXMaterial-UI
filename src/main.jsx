import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './Page/Dashboard.jsx';
import Error from './Page/Error.jsx';
import Login from './Page/Login.jsx';
import '../src/index.css';

import App from './App.jsx';
import ThemeContextProvider from './context/ThemeContext';
import { CssBaseline } from '@mui/material';

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <CssBaseline />
      <Router>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/Login" component={Login} />
          <Route path="/Dashboard" component={Dashboard} />
          <Route path="/PostView" render={() => <Dashboard page='preview' />} />
          <Route path="*" render={() => <Error error={true} />} />
        </Switch>
      </Router>
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
