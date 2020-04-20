/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route, Router} from 'react-router-dom';
import PrivateRoute from '../../components/PrivateRoute';
import GlobalStyle from '../../global-styles';
import CircularIndeterminate from '../../components/Loading/loading';
import history from '../../utils/history';



const AppWrapper = styled.div`
  
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

const LoginPage = lazy(() => import("../LoginPage"));
const MemberPage = lazy(() => import("../MemberPage"));
const Dashboard = lazy(() => import("../Dashboard/index"));
const NotFoundPage = lazy(() => import("containers/NotFoundPage/Loadable"));
const DashboardPage = lazy(() => import("../DashboardPage/index"));



export default function App() {
  return (
    <Router history={history}>
    <Suspense fallback={<CircularIndeterminate></CircularIndeterminate>} >
    <AppWrapper>
      
      <Switch>
        
        <Route  path="/login" component={LoginPage} />
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
    </Suspense>
    </Router>
  );
}
