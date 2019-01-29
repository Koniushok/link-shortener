// @flow
export type Link = {
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
