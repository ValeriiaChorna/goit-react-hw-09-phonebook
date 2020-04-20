import React from 'react';
import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import './UserMenu.css';

const UserMenu = ({ avatar, name, onLogout }) => (
  <div className="userMenu-container">
    <img src={avatar} alt="" width="32" />
    <span>Welcome, {name}</span>
    <button type="button" onClick={onLogout}>
      Logout
    </button>
  </div>
);

const mapStateToProps = state => ({
  name: authSelectors.getUserName(state),
  avatar:
    'https://img.icons8.com/pastel-glyph/64/000000/gender-neutral-user.png',
});

export default connect(mapStateToProps, { onLogout: authOperations.logOut })(
  UserMenu,
);
