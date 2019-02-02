// @flow
import linksList from './fakeLinkList';

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

export const storeItem = async (key: string, value: string) => {
  localStorage.setItem(key, value);
};
export const removeItem = async (key: string) => {
  localStorage.removeItem(key);
};

export const getItem = async (key: string) => localStorage.getItem(key);
