import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import './Navigation.css';

const Navigation = () => (
  <ul className="navigationList">
    <li>
      <NavLink
        to={routes.HOMEPAGE}
        className="link"
        activeClassName="active-link"
      >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        to={routes.CONTACTS}
        className="link"
        activeClassName="active-link"
      >
        Contacts
      </NavLink>
    </li>
    <li>
      <NavLink to={routes.LOGIN} className="link" activeClassName="active-link">
        LogIn
      </NavLink>
    </li>
    <li>
      <NavLink
        to={routes.REGISTER}
        className="link"
        activeClassName="active-link"
      >
        Register
      </NavLink>
    </li>
  </ul>
);

export default Navigation;
