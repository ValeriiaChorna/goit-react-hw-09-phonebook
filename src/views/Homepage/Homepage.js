import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';

const RegisterPage = () => {
  return (
    <div>
      <h2>Hi! Welcome to your Phonebook!</h2>
      <p>Lets add your contacts! Click</p>
      <ul>
        <li>
          <NavLink
            to={routes.LOGIN}
            className="link"
            activeClassName="active-link"
          >
            LogIn
          </NavLink>
          , if you already have account, or
        </li>
        <li>
          <NavLink
            to={routes.REGISTER}
            className="link"
            activeClassName="active-link"
          >
            Register
          </NavLink>
          , if you don't
        </li>
      </ul>
    </div>
  );
};

export default RegisterPage;
