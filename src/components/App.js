import React, { Component, Suspense } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import routes from '../routes';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import ThemeContext from '../context/ThemeContext';
import { authOperations } from '../redux/auth';
import Layout from './Layout';

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <BrowserRouter>
        <ThemeContext>
          <Layout>
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                {routes.map(route =>
                  route.private ? (
                    <PrivateRoute key={route.label} {...route} />
                  ) : (
                    <PublicRoute
                      key={route.label}
                      {...route}
                      restricted={route.restricted}
                    />
                  ),
                )}
              </Switch>
            </Suspense>
          </Layout>
        </ThemeContext>
      </BrowserRouter>
    );
  }
}

export default connect(null, {
  onGetCurrentUser: authOperations.getCurrentUser,
})(App);
