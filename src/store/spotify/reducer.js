import { createReducer } from '../../utilities/utility';
import * as TYPES from './types';

export const initState = {
  token: '',
  profile: {},
  deviceID: '',
  track: '',
  idTrack: '',
  timeStop: 0,
  modal: false,
  artistsTrack: [],
  durationTrack: 0,
  nameTrack: '',
  imageTrack: {}
};

const getAccessTokenSpotify = (state, { token }) => ({ ...state, token });
const successGetUserProfileSpotify = (state, { profile, token }) => ({ ...state, profile, token });
const successGetDeviceID = (state, { deviceID }) => ({ ...state, deviceID });

const playTrack = (state, { track }) => ({ ...state, track, modal: true });
const pauseTrack = state => ({ ...state });
const dataStopTrackFromSpotifySDK = (state, { idTrack, timeStop }) => ({ ...state, idTrack, timeStop });
const dataTrackFromSpotifySDK = (state, {
  artistsTrack,
  durationTrack,
  nameTrack,
  imageTrack
}) => ({
  ...state,
  artistsTrack,
  durationTrack,
  nameTrack,
  imageTrack
});

const handlers = {
  [TYPES.GET_ACCESS_TOKEN_SPOTIFY]: getAccessTokenSpotify,
  [TYPES.SUCCESS_GET_USER_PROFILE_SPOTIFY]: successGetUserProfileSpotify,
  [TYPES.SUCCESS_GET_DEVICE_ID]: successGetDeviceID,
  [TYPES.PLAY_TRACK]: playTrack,
  [TYPES.PAUSE_TRACK]: pauseTrack,
  [TYPES.DATA_STOP_TRACK_FROM_SPOTIFY_SDK]: dataStopTrackFromSpotifySDK,
  [TYPES.DATA_TRACK_FROM_SPOTIFY_SDK]: dataTrackFromSpotifySDK
};

export const reducerSpotify = createReducer(initState, handlers);
