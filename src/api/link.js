// @flow
import axios from 'axios';
import { type LinkCreate } from '../types';
import { API_END_POINT } from '../constants/api';

export const getAllLinks = async () => {
  const response = await axios.get(`${API_END_POINT}/link`);
  return response.data;
};

export const getMyLinks = async () => {
  const response = await axios.get(`${API_END_POINT}/link/my`);
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
