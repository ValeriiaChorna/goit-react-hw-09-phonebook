import React from 'react';
import Navigation from './Navigation';
import Logo from './Logo';
import ButtonThemeChanger from './ButtonThemeChanger';

const Appbar = () => (
  <header className="header">
    <Logo />
    <Navigation />
    <ButtonThemeChanger />
  </header>
);

export default Appbar;
