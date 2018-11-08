import { createReducer } from '../../utilities/utility';
import * as TYPES from './types';

export const initState = {
  token: '',
  profile: {},
  tokenSpotify: '',
  authSuccess: false,
  messageSignUp: '',
  messageSignIn: ''
};

const successGetToken = (state, { token }) => ({
  ...state,
  token,
  authSuccess: true,
  messageSignUp: '',
  messageSignIn: ''
});
const successGetProfileSocial = (state, { profile, tokenSpotify }) => ({ ...state, profile, tokenSpotify });
const logOutUser = state => ({
  ...state,
  token: '',
  profile: {},
  authSuccess: false
});
const errorSignUpUser = (state, { message }) => ({ ...state, messageSignUp: message });
const errorSignInUser = (state, { message }) => ({ ...state, messageSignIn: message });

const handlers = {
  [TYPES.SUCCESS_GET_TOKEN]: successGetToken,
  [TYPES.SUCCESS_GET_PROFILE_SOCIAL]: successGetProfileSocial,
  [TYPES.LOG_OUT_USER]: logOutUser,
  [TYPES.ERROR_SIGN_UP_USER]: errorSignUpUser,
  [TYPES.ERROR_SIGN_IN_USER]: errorSignInUser
};

export const reducerAuthUser = createReducer(initState, handlers);
