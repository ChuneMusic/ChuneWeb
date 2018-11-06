import { createReducer } from '../../utilities/utility';
import * as TYPES from './types';

export const initState = {
  token: '',
  profile: '',
  deviceID: '',
  track: '',
  idTrack: '',
  timeStop: 0,
  modal: false,
  artistsTrack: [],
  durationTrack: 0,
  nameTrack: '',
  imageTrack: {},
  pausedTrack: true,
  volume: 50,
  repeat: false,
  shuffle: false,
  playingTracks: [],
  shuffleTracks: false
};

const getAccessTokenSpotify = (state, { token }) => ({ ...state, token });
const successGetUserProfileSpotify = (state, { profile, token }) => ({ ...state, profile, token });
const successGetDeviceID = (state, { deviceID }) => ({ ...state, deviceID });

const playTrack = (state, { track, playingTracks }) => ({
  ...state,
  track,
  modal: true,
  playingTracks
});
const pauseTrack = state => ({ ...state });
const dataStopTrackFromSpotifySDK = (state, { idTrack, timeStop, pausedTrack }) => ({
  ...state,
  idTrack,
  timeStop,
  pausedTrack
});
const dataTrackFromSpotifySDK = (state, {
  artistsTrack,
  durationTrack,
  nameTrack,
  imageTrack,
  pausedTrack,
  timeStop,
  idTrack,
  shuffleTracks
}) => ({
  ...state,
  artistsTrack,
  durationTrack,
  nameTrack,
  imageTrack,
  pausedTrack,
  timeStop,
  idTrack,
  shuffleTracks
});
const seekToPositionInCurrentlyPlayingTrack = (state, { position }) => ({ ...state, position });
const setVolumeForPlayback = (state, { volume }) => ({ ...state, volume });
const toggleShuffleForPlayback = (state, { shuffle }) => ({ ...state, shuffle });
const setRepeatModeOnPlayback = (state, { repeat }) => ({ ...state, repeat });
const skipPlaybackToPreviousTrack = state => ({ ...state });
const skipPlaybackToNextTrack = state => ({ ...state });
const closeThisSDKPlayback = state => ({
  ...state,
  modal: false,
  token: '',
  profile: {}
});

const handlers = {
  [TYPES.GET_ACCESS_TOKEN_SPOTIFY]: getAccessTokenSpotify,
  [TYPES.SUCCESS_GET_USER_PROFILE_SPOTIFY]: successGetUserProfileSpotify,
  [TYPES.SUCCESS_GET_DEVICE_ID]: successGetDeviceID,
  [TYPES.PLAY_TRACK]: playTrack,
  [TYPES.PAUSE_TRACK]: pauseTrack,
  [TYPES.DATA_STOP_TRACK_FROM_SPOTIFY_SDK]: dataStopTrackFromSpotifySDK,
  [TYPES.DATA_TRACK_FROM_SPOTIFY_SDK]: dataTrackFromSpotifySDK,
  [TYPES.SEEK_TO_POSITION_IN_CURRENTLY_PLAYING_TRACK]: seekToPositionInCurrentlyPlayingTrack,
  [TYPES.SET_VOLUME_FOR_PLAYBACK]: setVolumeForPlayback,
  [TYPES.TOGGLE_SHUFFLE_FOR_PLAYBACK]: toggleShuffleForPlayback,
  [TYPES.SET_REPEAT_MODE_ON_PLAYBACK]: setRepeatModeOnPlayback,
  [TYPES.SKIP_PLAYBACK_TO_PREVIOUS_TRACK]: skipPlaybackToPreviousTrack,
  [TYPES.SKIP_PLAYBACK_TO_NEXT_TRACK]: skipPlaybackToNextTrack,
  [TYPES.CLOSE_THIS_SDK_PLAYBACK]: closeThisSDKPlayback
};

export const reducerSpotify = createReducer(initState, handlers);
