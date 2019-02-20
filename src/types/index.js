// @flow
export type Link = {
  id: string,
  title: string,
  url: string,
  shortLink: string,
  clicks: number,
  tags: Array<string>,
  description: string,
};

export type LinkCreate = {
  title: string,
  url: string,
  description: string,
  tags: Array<string>,
};

export type Profile = {
  totalClinks: number,
  linkCount: number,
  loginName: string,
  name: string,
  surname: string,
};

export type RegistryProfile = {
  loginName: string,
  name: string,
  surname: string,
  password: string,
};

export type Notice = {
  id: string,
  level: 'error' | 'info' | 'warning' | 'success',
  text: string,
};
