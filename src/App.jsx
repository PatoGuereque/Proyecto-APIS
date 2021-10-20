import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import MainLayout from './components/Layout';
import Main from './views/Main';

const App = () => (
  <Router>
    <MainLayout>
      <Switch>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </MainLayout>
  </Router>
);

export default App;
