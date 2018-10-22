import { createReducer } from '../../utilities/utility';
import * as TYPES from './types';

export const initState = {
  token: '',
  profile: {},
  authSuccess: false,
  message: ''
};

const successGetToken = (state, { token }) => ({
  ...state,
  token,
  authSuccess: true,
  message: ''
});
const successGetProfileSocial = (state, { profile }) => ({ ...state, profile });
const logOutUser = state => ({
  ...state,
  token: '',
  profile: {},
  authSuccess: false
});
const errorAuthUser = (state, { message }) => ({ ...state, message });

const handlers = {
  [TYPES.SUCCESS_GET_TOKEN]: successGetToken,
  [TYPES.SUCCESS_GET_PROFILE_SOCIAL]: successGetProfileSocial,
  [TYPES.LOG_OUT_USER]: logOutUser,
  [TYPES.ERROR_AUTH_USER]: errorAuthUser
};

export const reducerAuthUser = createReducer(initState, handlers);
