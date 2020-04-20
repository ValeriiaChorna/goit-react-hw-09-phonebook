import React, { Component, lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import routes from '../routes';
import ThemeContext from '../context/ThemeContext';
import { authOperations } from '../redux/auth';
import Layout from './Layout';

const Homepage = lazy(() => import('../views/Homepage'));
const RegisterPage = lazy(() => import('../views/RegisterPage'));
const LoginPage = lazy(() => import('../views/LoginPage'));
const Contacts = lazy(() => import('../views/Contacts/ContactsContainer'));
const NotFound = lazy(() => import('../views/NotFound'));

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <ThemeContext>
          <Layout>
            <Switch>
              <Route path={routes.HOMEPAGE} exact component={Homepage} />
              <Route path={routes.REGISTER} exact component={RegisterPage} />
              <Route path={routes.LOGIN} exact component={LoginPage} />
              <Route path={routes.CONTACTS} exact component={Contacts} />
              <Route component={NotFound} />
              {/* <Redirect to={routes.homepage} /> */}
            </Switch>
          </Layout>
        </ThemeContext>
      </Suspense>
    );
  }
}

export default connect(null, {
  onGetCurrentUser: authOperations.getCurrentUser,
})(App);
