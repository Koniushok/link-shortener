// @flow
import axios from 'axios';
import { setCookie, deleteCookie, getCookie } from './cookie';
import type { RegistryProfile, Link, LinkCreate } from '../types';

const API_END_POINT = 'http://localhost:8080';

export const getAllLinks = async () => {
  const response = await axios.get(`${API_END_POINT}/link`);
  console.log('getAllLinks', response);
  return response.data;
};

export const getMyLinks = async () => {
  const response = await axios.get(`${API_END_POINT}/link/my`);
  console.log('getAllLinks', response);
  return response.data;
};

export const login = async (password: string, loginName: string) => {
  const response = await axios.post(`${API_END_POINT}/auth`, { password, loginName });
  console.log('login', response);
  return response.data;
};

export const createProfile = async (profile: RegistryProfile) => {
  const response = await axios.post(`${API_END_POINT}/user`, { ...profile });
  console.log('createProfile', response);
  return 'response';
};

export const createLink = async (link: LinkCreate) => {
  const response = await axios.post(`${API_END_POINT}/link`, { ...link });
  console.log('createLink', response);
  return 'link created successfully';
};

export const editLink = async (link: Link) => {
  const linkEdit = { ...link };
  delete linkEdit.id;
  delete linkEdit.shortLink;
  delete linkEdit.passage;
  const response = await axios.put(`${API_END_POINT}/link/${link.id}`, { ...linkEdit });
  console.log('editLink', response);
  return 'link successfully changed';
};

export const getLink = async (id: string) => {
  const response = await axios.get(`${API_END_POINT}/link/${id}`);
  console.log('getLink', response);
  return response.data;
};

export const storeToken = async (token: string) => {
  setCookie('token', token);
  axios.defaults.headers.common.token = token;
  console.log('storeToken', axios.defaults.headers.common.token);
};

export const removeToken = async () => {
  deleteCookie('token');
  delete axios.defaults.headers.common.token;
  console.log('removeToken', axios.defaults.headers.common.token);
};

export const checkToken = async () => {
  const token = getCookie('token');
  if (token) {
    axios.defaults.headers.common.token = token;
    return true;
  }
  return false;
};
