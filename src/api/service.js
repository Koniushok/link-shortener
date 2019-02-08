// @flow
import axios from 'axios';
import cookies from 'js-cookie';
import { logout } from '../actions/auth';
import store from '../store';

axios.interceptors.response.use(null, (error) => {
  if (error.response && error.response.status === 401) {
    store.dispatch(logout());
  }
  return Promise.reject(error);
});

export const storeToken = async (token: string) => {
  cookies.set('token', token, { expires: 31 });
  axios.defaults.headers.common.token = token;
};

export const removeToken = async () => {
  cookies.remove('token');
  delete axios.defaults.headers.common.token;
};

export const checkToken = async () => {
  const token = cookies.get('token');
  if (token) {
    axios.defaults.headers.common.token = token;
    return true;
  }
  return false;
};
