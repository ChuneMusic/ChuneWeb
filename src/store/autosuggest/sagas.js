import {
  put, call, takeEvery,
  select, take
} from 'redux-saga/effects';

import { SEARCH_ARTISTS } from './types';
import { getListArtistsToServer, getInfoSingleArtist } from './search/search';
import { successSearchArtists, noArtistInDB } from './actions';
import { errorMessage } from '../error/actions';
import { successGetInfoArtist, clearInfoArtist } from '../artists/actions';
import { locationChange } from '../../utilities/patternForSagas';
import { getRoute } from '../auth/utilities/selectors';
import { getAuth } from '../content/utilities/selectors';
import { SUCCESS_GET_TOKEN } from '../auth/types';

function* getListArtists({ payload }) {
  const { value } = payload;
  try {
    const suggestions = yield call(getListArtistsToServer, value);
    yield put(successSearchArtists(suggestions));
  } catch (e) {
    yield put(errorMessage(e));
  }
}

function* getInfoArtist({ payload }) {
  const pathname = yield select(getRoute);
  const artistName = pathname.split('/');
  const name = payload.name ? payload.name : artistName[2];
  const auth = yield select(getAuth);
  if (auth === false || auth === undefined) yield take(SUCCESS_GET_TOKEN);
  yield put(clearInfoArtist());
  try {
    const { artist, content = [], tracks = [] } = yield call(getInfoSingleArtist, name);
    yield put(noArtistInDB(false));
    yield put(successGetInfoArtist(artist, content, tracks));
  } catch (e) {
    if (e.response.status === 500) yield put(noArtistInDB(true));
    yield put(errorMessage(e));
  }
}

export function* sagasSearch() {
  yield takeEvery(SEARCH_ARTISTS, getListArtists);
  yield takeEvery(locationChange('/artist/'), getInfoArtist);
}
