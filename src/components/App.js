import React, { lazy, Suspense } from 'react';
import Layout from './Layout';
import { Switch, Route } from 'react-router-dom';
import routes from '../routes';
import ThemeContext from '../context/ThemeContext';

const Homepage = lazy(() => import('../views/Homepage'));
const RegisterPage = lazy(() => import('../views/RegisterPage'));
const LoginPage = lazy(() => import('../views/LoginPage'));
const Contacts = lazy(() => import('../views/Contacts/ContactsContainer'));
const NotFound = lazy(() => import('../views/NotFound'));

const App = () => (
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

export default App;
