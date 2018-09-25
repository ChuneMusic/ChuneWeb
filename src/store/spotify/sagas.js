import { put, takeEvery, call } from 'redux-saga/effects';

import { getUserProfileSpotify, getDeviceID } from './helpers/spotify-helper';
import { GET_ACCESS_TOKEN_SPOTIFY, SUCCESS_GET_USER_PROFILE_SPOTIFY } from './types';
import { successGetUserProfileSpotify, successGetDeviceID } from './actions';
import { errorMessage } from '../error/actions';
import { setUserTokenSpotify } from '../../utilities/APIConfig';

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
    yield put(successGetDeviceID(deviceID));
  } catch (e) {
    yield put(errorMessage(e.message));
  }
}

export function* sagasSpotify() {
  yield takeEvery(GET_ACCESS_TOKEN_SPOTIFY, getUserProfile);
  yield takeEvery(SUCCESS_GET_USER_PROFILE_SPOTIFY, getDeviceIDUser);
}
