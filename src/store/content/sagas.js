import {
  put, takeEvery, call,
  select
} from 'redux-saga/effects';

import { errorMessage } from '../error/actions';
import {
  successGetContentHomePageUser, successGetContentForYouPageUser,
  successGetTopTracks, successGetChuneSupply
} from './actions';
import {
  getContentHomePageToServer, getTopTracksToServer,
  getChuneSupplyToServer, getContentForYouPageToServer
} from './utilities/content';
import { getPages } from './utilities/selectors';
import { FETCH_MORE_CONTENT_FORYOU_PAGE_USER, FETCH_MORE_CONTENT_HOME_PAGE_USER } from './types';
import { locationChange } from '../../utilities/patternForSagas';

export function* getContentHomePage() {
  const { pagesHome } = yield select(getPages);
  try {
    const data = yield call(getContentHomePageToServer, pagesHome);
    const artistTracks = data.artist_tracks || [];
    const contentFeed = data.content_feed || [];
    yield put(successGetContentHomePageUser(artistTracks, contentFeed));
  } catch (e) {
    yield put(errorMessage(e.message));
  }
}
export function* getContentForYouPage() {
  const { pagesForYou } = yield select(getPages);
  try {
    const data = yield call(getContentForYouPageToServer, pagesForYou);
    const artistTracks = data.artist_tracks || [];
    const contentFeed = data.content_feed || [];
    yield put(successGetContentForYouPageUser(artistTracks, contentFeed));
  } catch (e) {
    yield put(errorMessage(e.message));
  }
}
export function* getTopTracks() {
  try {
    const topTracks = yield call(getTopTracksToServer);
    yield put(successGetTopTracks(topTracks));
  } catch (e) {
    yield put(errorMessage(e.message));
  }
}
export function* getChuneSupply() {
  try {
    const topChune = yield call(getChuneSupplyToServer);
    yield put(successGetChuneSupply(topChune));
  } catch (e) {
    yield put(errorMessage(e.message));
  }
}

export function* sagasContent() {
  yield takeEvery(locationChange('/home'), getContentHomePage);
  yield takeEvery(locationChange('/for-you'), getContentForYouPage);
  yield takeEvery(FETCH_MORE_CONTENT_HOME_PAGE_USER, fetchContentHomePage);
  yield takeEvery(FETCH_MORE_CONTENT_FORYOU_PAGE_USER, fetchContentForYouPage);
  yield takeEvery(locationChange('/home'), getTopTracks);
  yield takeEvery(locationChange('/home'), getChuneSupply);
}
