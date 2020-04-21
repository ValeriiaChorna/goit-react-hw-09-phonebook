import React from 'react';
import { NavLink } from 'react-router-dom';

const RegisterPage = () => {
  return (
    <div>
      <h2>Hi! Welcome to your Phonebook!</h2>
      <p>Lets add your contacts! Click</p>
      <NavLink
        key="Login"
        to="/login"
        className="link"
        activeClassName="active-link"
      >
        Login
      </NavLink>
    </div>
  );
};

export default RegisterPage;
