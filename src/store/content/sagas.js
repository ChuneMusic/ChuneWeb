import {
  put, takeEvery, call,
  select
} from 'redux-saga/effects';

import { errorMessage } from '../error/actions';
import {
  successGetContentHomePageUser, successGetContentForYouPageUser,
  successGetTopTracks, successGetChuneSupply, noArtistsUser
} from './actions';
import {
  getContentHomePageToServer, getTopTracksToServer,
  getChuneSupplyToServer, getContentForYouPageToServer,
  getContentHome, getContentForYou
} from './utilities/content';
import { getPages } from './utilities/selectors';
import { FETCH_MORE_CONTENT_FORYOU_PAGE_USER, FETCH_MORE_CONTENT_HOME_PAGE_USER } from './types';
import { locationChange } from '../../utilities/patternForSagas';

export function* getContentHomePage() {
  const { pagesHome } = yield select(getPages);
  let artistTracks = [];
  let contentFeed = [];
  try {
    const dataRecs = yield call(getContentHome);
    if (dataRecs.content_feed.length === 0) {
      const data = yield call(getContentHomePageToServer, pagesHome);
      artistTracks = data.artist_tracks || [];
      contentFeed = data.content_feed || [];
    } else {
      artistTracks = dataRecs.featured || [];
      contentFeed = dataRecs.content_feed || [];
    }
    yield put(successGetContentHomePageUser(artistTracks, contentFeed));
  } catch (e) {
    yield put(errorMessage(e.message));
  }
}

export function* getContentForYouPage({ payload }) {
  const { pagesForYou } = yield select(getPages);
  const { artists } = payload;
  let artistTracks = [];
  let contentFeed = [];
  try {
    if (artists.length === 0) {
      yield put(noArtistsUser(true));
      return;
    }
    const dataRecs = yield call(getContentForYou);
    if (dataRecs.content_feed.length === 0) {
      const data = yield call(getContentForYouPageToServer, pagesForYou);
      artistTracks = data.artist_tracks || [];
      contentFeed = data.content_feed || [];
    } else {
      artistTracks = dataRecs.featured || [];
      contentFeed = dataRecs.content_feed || [];
    }
    yield put(successGetContentForYouPageUser(artistTracks, contentFeed));
    yield put(noArtistsUser(false));
  } catch (e) {
    yield put(errorMessage(e));
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
