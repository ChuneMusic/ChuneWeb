import {
  put, call, takeEvery,
  select
} from 'redux-saga/effects';

import { SEARCH_ARTISTS } from './types';
import { getListArtistsToServer, getInfoSingleArtist } from './search/search';
import { successSearchArtists } from './actions';
import { errorMessage } from '../error/actions';
import { successGetInfoArtist, clearInfoArtist } from '../artists/actions';
import { locationChange } from '../../utilities/patternForSagas';
import { getRoute } from '../auth/utilities/selectors';

function* getListArtists({ payload }) {
  const { value } = payload;
  try {
    const suggestions = yield call(getListArtistsToServer, value);
    yield put(successSearchArtists(suggestions));
  } catch (e) {
    yield put(errorMessage(e.message));
  }
}

function* getInfoArtist({ payload }) {
  const pathname = yield select(getRoute);
  const artistName = pathname.split('/');
  const name = payload.name ? payload.name : artistName[2];
  yield put(clearInfoArtist());
  try {
    const { artist, content = [], tracks = [] } = yield call(getInfoSingleArtist, name);
    yield put(successGetInfoArtist(artist, content, tracks));
  } catch (e) {
    yield put(errorMessage(e.message));
  }
}

export function* sagasSearch() {
  yield takeEvery(SEARCH_ARTISTS, getListArtists);
  yield takeEvery(locationChange('/artist/'), getInfoArtist);
}
