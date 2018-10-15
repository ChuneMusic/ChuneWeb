import {
  GET_ACCESS_TOKEN_SPOTIFY, SUCCESS_GET_USER_PROFILE_SPOTIFY,
  SUCCESS_GET_DEVICE_ID, PLAY_TRACK, PAUSE_TRACK, DATA_TRACK_FROM_SPOTIFY_SDK,
  DATA_STOP_TRACK_FROM_SPOTIFY_SDK, SEEK_TO_POSITION_IN_CURRENTLY_PLAYING_TRACK,
  SET_VOLUME_FOR_PLAYBACK, TOGGLE_SHUFFLE_FOR_PLAYBACK, SET_REPEAT_MODE_ON_PLAYBACK,
  SKIP_PLAYBACK_TO_NEXT_TRACK, SKIP_PLAYBACK_TO_PREVIOUS_TRACK
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
export const playTrack = (track, chunesupply) => ({
  type: PLAY_TRACK,
  payload: { track, chunesupply }
});
export const pauseTrack = () => ({
  type: PAUSE_TRACK
});
export const dataStopTrackFromSpotifySDK = (idTrack, timeStop, pausedTrack) => ({
  type: DATA_STOP_TRACK_FROM_SPOTIFY_SDK,
  payload: {
    idTrack,
    timeStop,
    pausedTrack
  }
});
export const dataTrackFromSpotifySDK = (artistsTrack, durationTrack, nameTrack, imageTrack, pausedTrack, timeStop, idTrack) => ({
  type: DATA_TRACK_FROM_SPOTIFY_SDK,
  payload: {
    artistsTrack,
    durationTrack,
    nameTrack,
    imageTrack,
    pausedTrack,
    timeStop,
    idTrack
  }
});
export const seekToPositionInCurrentlyPlayingTrack = position => ({
  type: SEEK_TO_POSITION_IN_CURRENTLY_PLAYING_TRACK,
  payload: { position }
});
export const setVolumeForPlayback = volume => ({
  type: SET_VOLUME_FOR_PLAYBACK,
  payload: { volume }
});
export const toggleShuffleForPlayback = shuffle => ({
  type: TOGGLE_SHUFFLE_FOR_PLAYBACK,
  payload: { shuffle }
});
export const setRepeatModeOnPlayback = repeat => ({
  type: SET_REPEAT_MODE_ON_PLAYBACK,
  payload: { repeat }
});
export const skipPlaybackToPreviousTrack = () => ({
  type: SKIP_PLAYBACK_TO_PREVIOUS_TRACK
});
export const skipPlaybackToNextTrack = () => ({
  type: SKIP_PLAYBACK_TO_NEXT_TRACK
});
