// @flow
import axios from 'axios';
import { logout } from '../actions/auth';
import store from '../store';
import { setCookie, deleteCookie, getCookie } from './cookie';

axios.interceptors.response.use(null, (error) => {
  if (error.response && error.response.status === 401) {
    store.dispatch(logout());
  }
  return Promise.reject(error);
});

export const storeToken = async (token: string) => {
  setCookie('token', token);
  axios.defaults.headers.common.token = token;
};

export const removeToken = async () => {
  deleteCookie('token');
  delete axios.defaults.headers.common.token;
};

export const checkToken = async () => {
  const token = getCookie('token');
  if (token) {
    axios.defaults.headers.common.token = token;
    return true;
  }
  return false;
};
