import React from 'react';
import { NavLink } from 'react-router-dom';
import withAuth from '../hoc/withAuth';
import './Navigation.css';

const Navigation = ({ isAuthenticated }) => (
  <nav>
    <NavLink to="/" exact className="link" activeClassName="activeLink">
      Home
    </NavLink>

    {isAuthenticated && (
      <NavLink
        to="/contacts"
        exact
        className="link"
        activeClassName="activeLink"
      >
        Contacts
      </NavLink>
    )}
  </nav>
);

export default withAuth(Navigation);
