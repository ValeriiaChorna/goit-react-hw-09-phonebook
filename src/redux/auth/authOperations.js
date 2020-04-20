import axios from 'axios';
import authActions from './authActions';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com'; // or 'http://localhost:2000'

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = credentials => dispatch => {
  dispatch(authActions.registerRequest());

  axios
    .post('/users/signup', credentials)
    .then(response => {
      token.set(response.data.token);
      dispatch(authActions.registerSuccess(response.data));
    })
    .catch(error => dispatch(authActions.registerError(error)));
};

const logIn = credentials => dispatch => {
  dispatch(authActions.logInRequest());

  axios
    .post('/users/login', credentials)
    .then(response => {
      token.set(response.data.token);
      dispatch(authActions.logInSuccess(response.data));
    })
    .catch(error => dispatch(authActions.logInError(error)));
};

const logOut = () => dispatch => {
  dispatch(authActions.logOutRequest());

  axios
    .post('/users/logout')
    .then(response => {
      token.unset();
      dispatch(authActions.logOutSuccess(response.data));
    })
    .catch(error => dispatch(authActions.logOutError(error)));
};

const getCurrentUser = () => (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);
  dispatch(authActions.getCurrentUserRequest());

  axios
    .get('/users/current')
    .then(response => {
      dispatch(authActions.logOutSuccess(response.data));
    })
    .catch(error => dispatch(authActions.getCurrentUserError(error)));
};

export default {
  register,
  logIn,
  logOut,
  getCurrentUser,
};
