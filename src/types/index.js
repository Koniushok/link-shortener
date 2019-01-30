// @flow
export type Link = {
  url: string,
  shortLink: string,
  passage: number,
  tags: Array<string>,
  description: string
};

export type Profile = {
  loginName: string,
  name: string,
  surname: string
};

export type RegistryProfile = {
  loginName: string,
  name: string,
  surname: string,
  password: string
};
