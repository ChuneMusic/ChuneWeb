import { createReducer } from '../../utilities/utility';
import * as TYPES from './types';

export const initState = {
  token: '',
  profile: {},
  deviceID: ''
};

const getAccessTokenSpotify = (state, { token }) => ({ ...state, token });
const successGetUserProfileSpotify = (state, { profile, token }) => ({ ...state, profile, token });
const successGetDeviceID = (state, { deviceID }) => ({ ...state, deviceID });

const handlers = {
  [TYPES.GET_ACCESS_TOKEN_SPOTIFY]: getAccessTokenSpotify,
  [TYPES.SUCCESS_GET_USER_PROFILE_SPOTIFY]: successGetUserProfileSpotify,
  [TYPES.SUCCESS_GET_DEVICE_ID]: successGetDeviceID
};

export const reducerSpotify = createReducer(initState, handlers);
