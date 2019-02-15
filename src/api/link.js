// @flow
import axios from 'axios';
import queryString from 'query-string';
import { type LinkCreate } from '../types';
import { API_END_POINT } from '../constants/api';

export const getAllLinks = async (search: string) => {
  const { page, items, tag } = queryString.parse(search);
  const url = `${API_END_POINT}/link?${queryString.stringify({ page, items, tag })}`;
  const response = await axios.get(url);
  return response.data;
};

export const getMyLinks = async (search: string) => {
  const { page, items, tag } = queryString.parse(search);
  const url = `${API_END_POINT}/link/my?${queryString.stringify({ page, items, tag })}`;
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
