import {
  CREATE_NEW_USER, LOGIN_USER, SUCCESS_GET_TOKEN,
  SUCCESS_GET_PROFILE_SOCIAL, LOG_OUT_USER, ERROR_AUTH_USER
} from './types';

export const createNewUser = (email, password, name) => ({
  type: CREATE_NEW_USER,
  payload: { email, password, name }
});

export const loginUser = (email, password) => ({
  type: LOGIN_USER,
  payload: { email, password }
});

export const successGetToken = token => ({
  type: SUCCESS_GET_TOKEN,
  payload: { token }
});

export const successGetProfileSocial = profile => ({
  type: SUCCESS_GET_PROFILE_SOCIAL,
  payload: { profile }
});

export const logOutUser = () => ({
  type: LOG_OUT_USER
});

export const errorAuthUser = message => ({
  type: ERROR_AUTH_USER,
  payload: { message }
});
