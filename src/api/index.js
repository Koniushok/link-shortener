// @flow
import linksList from './fakeLinkList';
import { setCookie, deleteCookie, getCookie } from './cookie';

export const getAllLinks = async () => {
  await new Promise(resolve => setTimeout(resolve, 150));
  return linksList;
};

export const getMyLinks = async () => {
  throw new Error('Error getting links');
};

export const login = async (password: string, loginName: string) => {
  console.log('password: ', password, '; loginName: ', loginName);
  return 'grgreh43th54h5h54chgc5hc54';
};

export const createProfile = async () => 'account created successfully';

export const createLink = async () => 'link created successfully';

export const editLink = async () => 'link successfully changed';

export const getLink = async (id: string) => {
  console.log('link id', id);
  return linksList[0];
};

export const storeToken = async (token: string) => {
  setCookie('token', token);
};

export const removeToken = async () => {
  deleteCookie('token');
};

export const getToken = async () => {
  getCookie('token');
};
