const BASE_URL = 'http://10.58.0.192:3000';
const BASE_URL2 = 'http://10.58.0.250:3000';

export const API = {
  SIGNUP: `${BASE_URL}/users/signup`,
  LOGIN: `${BASE_URL}/users/login`,
  NEW: `${BASE_URL}/products/new`,
  RECOMMEND: `${BASE_URL}/products/recommend`,
  PRODUCTS: `${BASE_URL2}/categories/1/type/1`,
};
