const BASE_URL = 'http://10.58.0.234:3000';
const BASE_URL2 = 'http://10.58.0.250:3000';

export const API = {
  MAIN: `${BASE_URL2}`,
  SIGNUP: `${BASE_URL2}/users/signup`,
  LOGIN: `${BASE_URL2}/users/login`,
  NEW: `${BASE_URL2}/products/new/list`,
  RECOMMEND: `${BASE_URL2}/products/recommend/list`,
  RECOMMEND_RANDOM: `${BASE_URL2}/products/random/list`,
  PRODUCTS: `${BASE_URL}/categories/1/type/1`,
};
