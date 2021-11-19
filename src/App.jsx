import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import MainLayout from './components/Layout';
import ExampleEmailView from './views/ExampleEmail';
import MainView from './views/Main';
import { routes } from './views/routes';

const App = () => (
  <Router>
    <MainLayout>
      <Switch>
        {routes.map((route) => (
          <Route key={route.name} path={route.to} component={route.component} />
        ))}

        <Route path="/tests" component={ExampleEmailView} />
        <Route path="/" component={MainView} />
      </Switch>
    </MainLayout>
  </Router>
);

export default App;
