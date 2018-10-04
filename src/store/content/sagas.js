import {
  put, takeEvery, call,
  select, take
} from 'redux-saga/effects';

import { errorMessage } from '../error/actions';
import {
  successGetContentHomePageUser, successGetContentForYouPageUser,
  successGetTopTracks, successGetChuneSupply,
  successfethcMoreContentHome, successfethcMoreContentForYou, noFollowArtists
} from './actions';
import {
  getContentHomePageToServer, getTopTracksToServer,
  getChuneSupplyToServer, getContentForYouPageToServer,
  getContentHome, getContentForYou
} from './utilities/content';
import { getQuantityHome, getQuantityForYou, getAuth } from './utilities/selectors';
import {
  FETCH_MORE_CONTENT_FORYOU_PAGE_USER, FETCH_MORE_CONTENT_HOME_PAGE_USER,
  SUCCESS_GET_CONTENT_HOME_PAGE_USER, SUCCESS_GET_TOP_TRACKS
} from './types';
import { locationChange } from '../../utilities/patternForSagas';
import { SUCCESS_GET_TOKEN } from '../auth/types';

export function* getContentHomePage({ type }) {
  let featured = [];
  let contentFeed = [];
  let start = 0;
  if (type === 'FETCH_MORE_CONTENT_HOME_PAGE_USER') start = yield select(getQuantityHome);
  const auth = yield select(getAuth);
  if (auth === false || auth === undefined) yield take(SUCCESS_GET_TOKEN);
  const end = start + 10;
  try {
    const dataRecs = yield call(getContentHome, start, end);
    if (dataRecs.content_feed.length === 0) {
      const data = yield call(getContentHomePageToServer, start, end);
      featured = data.featured || [];
      contentFeed = data.content_feed || [];
    } else {
      featured = dataRecs.featured || [];
      contentFeed = dataRecs.content_feed || [];
    }
    if (type === 'FETCH_MORE_CONTENT_HOME_PAGE_USER') yield put(successfethcMoreContentHome(featured, contentFeed));
    else yield put(successGetContentHomePageUser(featured, contentFeed));
  } catch (e) {
    yield put(errorMessage(e));
  }
}

export function* getContentForYouPage({ type }) {
  let artistTracks = [];
  let contentFeed = [];
  let start = 0;
  if (type === 'FETCH_MORE_CONTENT_FORYOU_PAGE_USER') start = yield select(getQuantityForYou);
  const auth = yield select(getAuth);
  if (auth === false || auth === undefined) yield take(SUCCESS_GET_TOKEN);
  const end = start + 10;
  try {
    const dataRecs = yield call(getContentForYou, start, end);
    if (dataRecs.content_feed.length === 0) {
      const data = yield call(getContentForYouPageToServer, start, end);
      artistTracks = data.artist_tracks || [];
      contentFeed = data.content_feed || [];
    } else {
      artistTracks = dataRecs.featured || [];
      contentFeed = dataRecs.content_feed || [];
    }
    if (type === 'FETCH_MORE_CONTENT_FORYOU_PAGE_USER') {
      yield put(successfethcMoreContentForYou(artistTracks, contentFeed));
    } else {
      yield put(successGetContentForYouPageUser(artistTracks, contentFeed));
    }
  } catch (e) {
    if (e.response.data.Error === 'User does not follow any artists') yield put(noFollowArtists(true));
    yield put(errorMessage(e));
  }
}

export function* getTopTracks() {
  try {
    const topTracks = yield call(getTopTracksToServer);
    yield put(successGetTopTracks(topTracks));
  } catch (e) {
    yield put(errorMessage(e));
  }
}

export function* getChuneSupply() {
  try {
    const topChune = yield call(getChuneSupplyToServer);
    yield put(successGetChuneSupply(topChune));
  } catch (e) {
    yield put(errorMessage(e));
  }
}

export function* sagasContent() {
  yield takeEvery([locationChange('/home'), FETCH_MORE_CONTENT_HOME_PAGE_USER], getContentHomePage);
  yield takeEvery([locationChange('/for-you'), FETCH_MORE_CONTENT_FORYOU_PAGE_USER], getContentForYouPage);
  yield takeEvery(SUCCESS_GET_CONTENT_HOME_PAGE_USER, getTopTracks);
  yield takeEvery(SUCCESS_GET_TOP_TRACKS, getChuneSupply);
}
