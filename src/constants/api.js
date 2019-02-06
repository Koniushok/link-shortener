// @flow
export const API_END_POINT = process.env.NODE_ENV === 'production' ? 'http://localhost:8080/api' : 'http://localhost:8080/api';
export default API_END_POINT;
