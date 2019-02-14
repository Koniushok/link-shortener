// @flow
import axios from 'axios';
import { type RegistryProfile } from '../types';
import { API_END_POINT } from '../constants/api';

export const login = async (password: string, loginName: string) => {
  const response = await axios.post(`${API_END_POINT}/auth`, { password, loginName });
  return response.data;
};

export const createProfile = async (profile: RegistryProfile) => {
  const response = await axios.post(`${API_END_POINT}/user`, { ...profile });
  return response.data;
};

export const getMyProfile = async () => {
  const response = await axios.get(`${API_END_POINT}/user/me`);
  return response.data;
};
