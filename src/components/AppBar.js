import React from 'react';
import { connect } from 'react-redux';
import { authSelectors } from '../redux/auth';
import Navigation from './Navigation';
import Logo from './Logo';
import UserMenu from './UserMenu';
import ButtonThemeChanger from './ButtonThemeChanger';

const AppBar = ({ isAuthenticated }) => (
  <header className="header">
    <div className={'appBarContainer'}>
      <Logo />
      <Navigation />
      <ButtonThemeChanger />
    </div>
    {isAuthenticated && <UserMenu />}
  </header>
);

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);
