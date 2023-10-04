import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// ======screens-==========
import DashboardScreen from '../DashboardScreen';
import UsersList from '../UsersList';
import DashboardLogin from '../DashboardLogin';

const WebNavigation = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/"  component={DashboardScreen} />
        <Route path="/DashboardLogin" component={DashboardLogin} />
        <Route path="/UsersList" component={UsersList} />
      </Switch>
    </BrowserRouter>
  );
};

export default WebNavigation;
