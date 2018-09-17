import axios from 'axios';
import { API } from '../../../utilities/APIConfig';

API.defaults.headers.post['Content-Type'] = 'application/json';

export const getTokenToServer = (email, password, newUser) => {
  const data = JSON.stringify({
    email,
    password
  });
  if (newUser) return API.post('users/', data).then(response => response.data.token);
  return API.post('users/login', data).then(response => response.data.token);
};

export const getProfileUserSocial = (token) => {
  const url = `https://graph.facebook.com/v3.1/me${token}`;
  return axios.get(url)
    .then(response => response);
};
