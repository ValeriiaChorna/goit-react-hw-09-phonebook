import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import authActions from './authActions';

const initialUserState = {
  name: null,
  email: null,
};

const user = createReducer(initialUserState, {
  [authActions.registerSuccess]: (_, { payload }) => payload.user,
  [authActions.logInSuccess]: (_, { payload }) => payload.user,
  [authActions.getCurrentUserSuccess]: (_, { payload }) => payload,
  [authActions.logOutSuccess]: () => initialUserState,
});

const token = createReducer(null, {
  [authActions.registerSuccess]: (_, { payload }) => payload.token,
  [authActions.logInSuccess]: (_, { payload }) => payload.token,
  [authActions.logOutSuccess]: () => null,
});

const error = createReducer(null, {
  [authActions.registerError]: (_, { payload }) => payload.message,
  [authActions.logInError]: (_, { payload }) => payload.message,
  [authActions.getCurrentUserError]: (_, { payload }) => payload.message,
  [authActions.logOutError]: (_, { payload }) => payload.message,
});

export default combineReducers({
  user,
  token,
  error,
});
