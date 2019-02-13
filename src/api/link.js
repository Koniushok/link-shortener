// @flow
import axios from 'axios';
import { type LinkCreate } from '../types';
import { API_END_POINT } from '../constants/api';
import { type TypeLinksLoad, typeLinksLoad } from '../constants/display';

export const getAllLinks = async (tag?: string) => {
  let url = '';
  if (tag) {
    url = `${API_END_POINT}/link?tag=${tag}`;
  } else {
    url = `${API_END_POINT}/link`;
  }
  const response = await axios.get(url);
  return response.data;
};

export const getMyLinks = async (tag?: string) => {
  let url = '';
  if (tag) {
    url = `${API_END_POINT}/link/my?tag=${tag}`;
  } else {
    url = `${API_END_POINT}/link/my`;
  }
  const response = await axios.get(url);
  return response.data;
};

export const createLink = async (link: LinkCreate) => {
  const response = await axios.post(`${API_END_POINT}/link`, { ...link });
  return response.data;
};

export const editLink = async (linkID: string, link: LinkCreate) => {
  const response = await axios.put(`${API_END_POINT}/link/${linkID}`, { ...link });
  return response.data;
};

export const getLink = async (id: string) => {
  const response = await axios.get(`${API_END_POINT}/link/${id}`);
  return response.data;
};

export const deleteLink = async (id: string) => {
  const response = await axios.delete(`${API_END_POINT}/link/${id}`);
  return response.data;
};

export const getLinksClicks = async (typeLoad: TypeLinksLoad, tag?: string) => {
  const search = tag ? `?tag=${tag}` : '';
  let url = '';
  if (typeLoad === typeLinksLoad.ALL) {
    url = '/link/my/clicks';
  } else {
    url = '/link/clicks';
  }
  const response = await axios.get(url + search);
  return response.data;
};
