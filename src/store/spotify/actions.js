import { GET_ACCESS_TOKEN_SPOTIFY, SUCCESS_GET_USER_PROFILE_SPOTIFY, SUCCESS_GET_DEVICE_ID } from './types';

export const getAccessTokenSpotify = token => ({
  type: GET_ACCESS_TOKEN_SPOTIFY,
  payload: { token }
});
export const successGetUserProfileSpotify = (profile, token) => ({
  type: SUCCESS_GET_USER_PROFILE_SPOTIFY,
  payload: { profile, token }
});
export const successGetDeviceID = deviceID => ({
  type: SUCCESS_GET_DEVICE_ID,
  payload: { deviceID }
});
