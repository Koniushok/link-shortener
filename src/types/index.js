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
