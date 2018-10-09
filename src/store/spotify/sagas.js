import {
  put, takeEvery, call,
  select
} from 'redux-saga/effects';

import {
  getUserProfileSpotify, getDeviceID,
  spotifyPlayTrack, spotyfiDevice,
  spotifyPauseTrack,
} from './helpers/spotify-helper';
import {
  GET_ACCESS_TOKEN_SPOTIFY, SUCCESS_GET_USER_PROFILE_SPOTIFY,
  PLAY_TRACK, PAUSE_TRACK
} from './types';
import { successGetUserProfileSpotify, successGetDeviceID } from './actions';
import { errorMessage } from '../error/actions';
import { setUserTokenSpotify } from '../../utilities/APIConfig';
import { getDataPlayer } from './helpers/selector';

export function* getUserProfile({ payload }) {
  const { token } = payload;
  const tokenFromString = token.split('=');
  setUserTokenSpotify(tokenFromString[1]);
  try {
    const profile = yield call(getUserProfileSpotify);
    yield put(successGetUserProfileSpotify(profile.data, tokenFromString[1]));
  } catch (e) {
    yield put(errorMessage(e.message));
  }
}
export function* getDeviceIDUser({ payload }) {
  const { token } = payload;
  try {
    const deviceID = yield call(getDeviceID, token);
    spotyfiDevice(token, deviceID);
    yield put(successGetDeviceID(deviceID));
  } catch (e) {
    yield put(errorMessage(e.message));
  }
}
export function* playTrackToSpotify({ payload }) {
  const { track } = payload;
  const { idTrack, timeStop } = yield select(getDataPlayer);
  let time = 0;
  if (idTrack === track) time = timeStop;
  yield call(spotifyPlayTrack, track, time);
}
export function* pauseTrackToSpotify() {
  yield call(spotifyPauseTrack);
}

export function* sagasSpotify() {
  yield takeEvery(GET_ACCESS_TOKEN_SPOTIFY, getUserProfile);
  yield takeEvery(SUCCESS_GET_USER_PROFILE_SPOTIFY, getDeviceIDUser);
  yield takeEvery(PLAY_TRACK, playTrackToSpotify);
  yield takeEvery(PAUSE_TRACK, pauseTrackToSpotify);
}
