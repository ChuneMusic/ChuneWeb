import {
  put, takeEvery, call,
  select
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
import { getPagesHome, getPagesForYou } from './utilities/selectors';
import {
  FETCH_MORE_CONTENT_FORYOU_PAGE_USER, FETCH_MORE_CONTENT_HOME_PAGE_USER,
  SUCCESS_GET_CONTENT_HOME_PAGE_USER, SUCCESS_GET_TOP_TRACKS
} from './types';
import { locationChange } from '../../utilities/patternForSagas';
import { FOLLOW_ARTIST, UNFOLLOW_ARTIST } from '../artists/types';

export function* getContentHomePage({ type }) {
  let featured = [];
  let contentFeed = [];
  let pages = 0;
  if (type === 'FETCH_MORE_CONTENT_HOME_PAGE_USER') pages = yield select(getPagesHome);
  try {
    const dataRecs = yield call(getContentHome);
    if (dataRecs.content_feed.length === 0) {
      const data = yield call(getContentHomePageToServer, pages);
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
  let pages = 0;
  if (type === 'FETCH_MORE_CONTENT_FORYOU_PAGE_USER') pages = yield select(getPagesForYou);
  try {
    const dataRecs = yield call(getContentForYou);
    if (dataRecs.content_feed.length === 0) {
      const data = yield call(getContentForYouPageToServer, pages);
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
  yield takeEvery([locationChange('/home'), FOLLOW_ARTIST, UNFOLLOW_ARTIST, FETCH_MORE_CONTENT_HOME_PAGE_USER], getContentHomePage);
  yield takeEvery([locationChange('/for-you'), FOLLOW_ARTIST, UNFOLLOW_ARTIST, FETCH_MORE_CONTENT_FORYOU_PAGE_USER], getContentForYouPage);
  yield takeEvery(SUCCESS_GET_CONTENT_HOME_PAGE_USER, getTopTracks);
  yield takeEvery(SUCCESS_GET_TOP_TRACKS, getChuneSupply);
}
