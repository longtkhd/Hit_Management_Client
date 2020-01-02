/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from '../../components/PrivateRoute';
import Dashboard from '../Dashboard/index';


import LoginPage from '../LoginPage';
import MemberPage from '../MemberPage';
import DashboardPage from '../DashboardPage/index'

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Switch>
        <Route exact path="/admin/login" component={LoginPage} />
        {/* <Route exact path="/member" component={MemberPage} /> */}
        <PrivateRoute
          path="/admin/user"
          layout={Dashboard}
          component={MemberPage}
          title="Dashboard Page"
        />
        <PrivateRoute
          path="/admin/dashboard"
          layout={Dashboard}
          component={DashboardPage}
          title="Dashboard Page"
        />
      </Switch>

      <GlobalStyle />
    </AppWrapper>
  );
}
