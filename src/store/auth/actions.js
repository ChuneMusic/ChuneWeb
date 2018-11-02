import {
  CREATE_NEW_USER, LOGIN_USER, SUCCESS_GET_TOKEN,
  SUCCESS_GET_PROFILE_SOCIAL, LOG_OUT_USER, ERROR_SIGN_UP_USER,
  ERROR_SIGN_IN_USER, CREATE_NEW_SOCIAL_USER, LOGIN_SOCIAL_USER
} from './types';

export const createNewUser = (email, password, name) => ({
  type: CREATE_NEW_USER,
  payload: { email, password, name }
});

export const createNewSocialUser = (code, redirectUri, provider) => ({
  type: CREATE_NEW_SOCIAL_USER,
  payload: { code, redirectUri, provider }
});

export const loginUser = (email, password) => ({
  type: LOGIN_USER,
  payload: { email, password }
});

export const loginSocialUser = (code, redirectUri, provider) => ({
  type: LOGIN_SOCIAL_USER,
  payload: { code, redirectUri, provider }
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

export const errorSignUpUser = message => ({
  type: ERROR_SIGN_UP_USER,
  payload: { message }
});

export const errorSignInUser = message => ({
  type: ERROR_SIGN_IN_USER,
  payload: { message }
});
