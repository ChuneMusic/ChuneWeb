import {
  put, takeEvery, call,
  take, select
} from 'redux-saga/effects';
import { push } from 'connected-react-router';

import { errorMessage } from '../error/actions';
import {
  getList, postArtist,
  deleteArtist, getChoiceList,
  sendArtistsArray
} from './utilities/artistsUser';
import {
  successGetUserArtists, successFollowArtist,
  successUnfollowArtist, successGetFirstListArtists,
  successSendArray
} from './actions';
import {
  FOLLOW_ARTIST, UNFOLLOW_ARTIST, SUCCESS_FOLLOW_ARTIST,
  SUCCESS_UNFOLLOW_ARTIST, SEND_ARRAY_FIRST_CHOICE, SKIP_CHOICE_ARTISTS
} from './types';
import { locationChange } from '../../utilities/patternForSagas';
import { noFollowArtists } from '../content/actions';
import { getAuth, skipChoice } from '../content/utilities/selectors';
import { SUCCESS_GET_TOKEN } from '../auth/types';

export function* getListArtistsUser() {
  const auth = yield select(getAuth);
  const skip = yield select(skipChoice);
  if (auth === false || auth === undefined) yield take(SUCCESS_GET_TOKEN);
  try {
    const { artists, recommended } = yield call(getList);
    yield put(successGetUserArtists(artists, recommended));
    if (artists.length === 0) {
      yield put(noFollowArtists(true));
      if (!skip) {
        const choiceList = yield call(getChoiceList);
        yield put(successGetFirstListArtists(choiceList));
      }
    } else {
      yield put(noFollowArtists(false));
    }
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
export function* sendFirstArtists({ payload }) {
  const { firstArray } = payload;
  try {
    yield call(sendArtistsArray, firstArray);
    yield put(successSendArray());
    yield put(noFollowArtists(false));
    yield put(push('/for-you'));
  } catch (e) {
    yield put(errorMessage(e.message));
  }
}
export function* skipArtists() {
  yield put(push('/home'));
}

export function* sagasArtists() {
  yield takeEvery([locationChange('/artists'), locationChange('/home'), SUCCESS_FOLLOW_ARTIST, SUCCESS_UNFOLLOW_ARTIST], getListArtistsUser);
  yield takeEvery(FOLLOW_ARTIST, postFollowArtist);
  yield takeEvery(UNFOLLOW_ARTIST, deleteFollowArtist);
  yield takeEvery(SEND_ARRAY_FIRST_CHOICE, sendFirstArtists);
  yield takeEvery(SKIP_CHOICE_ARTISTS, skipArtists);
}
