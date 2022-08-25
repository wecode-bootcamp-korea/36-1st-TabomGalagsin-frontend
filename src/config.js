const BASE_URL = 'http://10.58.0.234:3000';

export const API = {
  MAIN: `${BASE_URL}`,
  SIGNUP: `${BASE_URL}/users/signup`,
  LOGIN: `${BASE_URL}/users/login`,
  NEW: `${BASE_URL}/products/new/list`,
  RECOMMEND: `${BASE_URL}/products/recommend/list`,
  RECOMMEND_RANDOM: `${BASE_URL}/products/random/list`,
  CART: `${BASE_URL}/cart`,
  PAYMENT: `${BASE_URL}/orders/payment`,
  POINTS: `${BASE_URL}/orders/point`,
};
