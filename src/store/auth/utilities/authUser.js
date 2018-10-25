import axios from 'axios';
import { API } from '../../../utilities/APIConfig';

API.defaults.headers.post['Content-Type'] = 'application/json';

export const getTokenToServer = (email, password, name, newUser) => {
  let data = null;
  if (name) {
    data = JSON.stringify({
      email,
      name,
      password
    });
  } else {
    data = JSON.stringify({
      email,
      password
    });
  }
  if (newUser) return API.post('users/', data).then(response => response.data.token);
  return API.post('users/login', data).then(response => response.data.token);
};

export const tokenVerifyCreate = (token) => {
  const data = JSON.stringify({
    token
  });
  return API.post('token/verify', data).then(response => response.data.token);
};

export const refreshToken = (token) => {
  const data = JSON.stringify({
    token
  });
  return API.post('token/refresh', data).then(response => response.data.token);
};

export const getProfileUserSocial = (token) => {
  const url = `https://graph.facebook.com/v3.1/me${token}`;
  return axios.get(url)
    .then(response => response);
};

export const registerNewSocialUser = (code, redirectUri, provider) => {
    let url = '';
    let clientId = '';
    
    console.log('We are here pumpkin');
    
    switch (provider){
        case 'google':
            url = 'users/social/login/google-oauth2';
            clientId = '243198086936-g6h4hfvujnoms1j5i4d76vjqk08pp7gd.apps.googleusercontent.com';
            break;
        case 'twitter':
            url = 'users/social/login/twitter';
            clientId = '';
            break;
        case 'spotify':
            url = 'users/social/login/spotify';
            clientId = 'a48cf79e2b704d93adef19d5bcd67530';
            break;
        case 'facebook':
            url = 'users/social/login/facebook';
            clientId = '177327102945347';
            break;
        default:
            throw 'wrong provider';
    }
    const data = JSON.stringify({
        clientId,
        code,
        redirectUri
    });
    return API.post(url, data).then(response => response.data.token);
    
};
