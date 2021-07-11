const host = process.env.REACT_APP_STRAPI_HOST ? process.env.REACT_APP_STRAPI_HOST : 'http://localhost';
const BASE_URL = `${host}:1337`;

export const ApiConstants = {
  BASE_URL
};
