import axios from 'axios';
const BASE_URL = 'http://10.58.0.250:3000';

const client = axios.create({ baseURL: BASE_URL });

export default function request({ ...options }) {
  //만약 header Auth Key가 필요하다면
  // client.defaults.headers.common.Authorization = authKey
  const onSuccess = response => response;
  const onError = error => error;

  return client(options).then(onSuccess).catch(onError);
}
