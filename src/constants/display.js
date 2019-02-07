// @flow
export const displayType = {
  TABLE: 'TABLE',
  LIST: 'LIST',
};

export const typeLinksLoad = {
  ALL: 'TABLE',
  MY: 'MY',
};

export type DisplayType = $Keys<typeof displayType>;
export type TypeLinksLoad = $Keys<typeof typeLinksLoad>;
