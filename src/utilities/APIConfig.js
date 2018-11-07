import axios from 'axios';

export const API = axios.create({
  baseURL: 'https://api-stage.chunesupply.com/api/v1/',
  headers: {
    'Content-Type': 'application/json'
  }
});

export const setUserToken = (token) => {
  API.defaults.headers.common.Authorization = `JWT ${token}`;
};

export const clearUserToken = () => {
  API.defaults.headers.common.Authorization = null;
};

export const spotifyAPI = axios.create({
  baseURL: 'https://accounts.spotify.com',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: 'Basic YTQ4Y2Y3OWUyYjcwNGQ5M2FkZWYxOWQ1YmNkNjc1MzA6YTQ4Y2Y3OWUyYjcwNGQ5M2FkZWYxOWQ1YmNkNjc1MzA='
  }
});
