const BASE_URL = 'http://10.58.0.250:3000';

export const API = {
  SIGNUP: `${BASE_URL}/users/signup`,
  LOGIN: `${BASE_URL}/users/login`,
  NEW: `${BASE_URL}/products/new/list`,
  RECOMMEND: `${BASE_URL}/products/recommend/list`,
  CART: `${BASE_URL}/cart`,
  PAYMENT: `${BASE_URL}/orders/payment`,
  ORDERING: `${BASE_URL}/categories/1/type/1`,
  POINTS: `${BASE_URL}/orders/point`,
};
