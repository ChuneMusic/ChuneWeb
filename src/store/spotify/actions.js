import {
  GET_ACCESS_TOKEN_SPOTIFY, SUCCESS_GET_USER_PROFILE_SPOTIFY,
  SUCCESS_GET_DEVICE_ID, PLAY_TRACK, PAUSE_TRACK, DATA_TRACK_FROM_SPOTIFY_SDK
} from './types';

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
export const playTrack = track => ({
  type: PLAY_TRACK,
  payload: { track }
});
export const pauseTrack = () => ({
  type: PAUSE_TRACK
});
export const dataTrackFromSpotifySDK = (idTrack, timeStop) => ({
  type: DATA_TRACK_FROM_SPOTIFY_SDK,
  payload: { idTrack, timeStop }
});
