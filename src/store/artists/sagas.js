import { put, takeEvery, call } from 'redux-saga/effects';

import { errorMessage } from '../error/actions';
import { getList, postArtist, deleteArtist } from './utilities/artistsUser';
import { successGetUserArtists, successFollowArtist, successUnfollowArtist } from './actions';
import {
  FOLLOW_ARTIST, UNFOLLOW_ARTIST, SUCCESS_FOLLOW_ARTIST,
  SUCCESS_UNFOLLOW_ARTIST
} from './types';
import { locationChange } from '../../utilities/patternForSagas';
import { noFollowArtists } from '../content/actions';

export function* getListArtistsUser() {
  try {
    const { artists, recommended } = yield call(getList);
    yield put(successGetUserArtists(artists, recommended));
    if (artists.length === 0) yield put(noFollowArtists(true));
    else yield put(noFollowArtists(false));
  } catch (e) {
    yield put(errorMessage(e.message));
  }
}
export function* postFollowArtist({ payload }) {
  const { name } = payload;
  try {
    yield call(postArtist, name);
    yield put(successFollowArtist());
  } catch (e) {
    yield put(errorMessage(e.message));
  }
}
export function* deleteFollowArtist({ payload }) {
  const { name } = payload;
  try {
    yield call(deleteArtist, name);
    yield put(successUnfollowArtist());
  } catch (e) {
    yield put(errorMessage(e.message));
  }
}

export function* sagasArtists() {
  yield takeEvery([locationChange('/artists'), SUCCESS_FOLLOW_ARTIST, SUCCESS_UNFOLLOW_ARTIST], getListArtistsUser);
  yield takeEvery(FOLLOW_ARTIST, postFollowArtist);
  yield takeEvery(UNFOLLOW_ARTIST, deleteFollowArtist);
}
