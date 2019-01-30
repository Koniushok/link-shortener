// @flow
export type Link = {
  id: string,
  url: string,
  shortLink: string,
  passage: number,
  tags: Array<string>,
  description: string
};

export type LinkCreate = {
  url: string,
  description: string,
  tags: Array<string>
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
