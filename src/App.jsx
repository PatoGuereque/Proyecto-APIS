import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import MainLayout from './components/Layout';
import MainView from './views/Main';
import { routes } from './views/routes';

const App = () => (
  <Router>
    <MainLayout>
      <Switch>
        {routes.map((route) => (
          <Route path={route.to} component={route.component} />
        ))}

        <Route path="/" component={MainView} />
      </Switch>
    </MainLayout>
  </Router>
);

export default App;
