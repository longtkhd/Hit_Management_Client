/**
 *
 * PrivateRoute
 *
 */

import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

/* eslint-disable react/prefer-stateless-function */
class PrivateRoute extends React.Component {
  render() {
    const { component: Component, layout: Layout, ...rest } = this.props;
    const { location } = this.props;
    return (
      <Route
        {...rest}
        render={matchProps => {
          if (this.isLoginSystem()) {
            return (
              <Layout title={this.props.title}>
                <Component {...matchProps} />
              </Layout>
            );
          }
          return (
            <Redirect
              to={{ pathname: 'admin/login', state: { from: location } }}
            />
          );
        }}
      />
    );
  }

  isLoginSystem() {
    return localStorage.getItem('isAuthenticated');
  }
}

PrivateRoute.propTypes = {
  component: PropTypes.any,
  location: PropTypes.any,
};

export default withRouter(PrivateRoute);
