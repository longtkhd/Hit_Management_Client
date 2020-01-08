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
import NotFoundPage from 'containers/NotFoundPage/Loadable';


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
        <Route  path="/login" component={LoginPage} />
        {/* <Route exact path="/member" component={MemberPage} /> */}
        <PrivateRoute
          path="/user"
          layout={Dashboard}
          component={MemberPage}
          title="Dashboard Page"
        />
        <PrivateRoute
          path="/admin"
          layout={Dashboard}
          component={MemberPage}
          title="Thành Viên"
        />
        <PrivateRoute
          path="/dashboard"
          layout={Dashboard}
          component={DashboardPage}
          title="Dashboard Page"
        />

        <Route path="*" component={NotFoundPage} />
      </Switch>

      <GlobalStyle />
    </AppWrapper>
  );
}
