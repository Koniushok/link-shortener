// @flow
export const API_END_POINT = process.env.NODE_ENV === 'production' ? 'http://localhost:8080/api' : 'http://localhost:8080/api';
export const URL_REDIRECT = process.env.NODE_ENV === 'production' ? 'http://localhost:8080' : 'http://localhost:8080';
export default API_END_POINT;
