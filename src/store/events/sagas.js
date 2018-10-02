import {
  put, takeEvery, call,
  fork, select, take
} from 'redux-saga/effects';
import { push } from 'connected-react-router';

import { GET_EVENTS_ARTIST } from './types';
import { errorMessage } from '../error/actions';
import { getEventsToServer, getPositionUser } from './utilities/events';
import { successGetEventsArtist, successGetPositionUser } from './actions';
import { getList } from '../artists/utilities/artistsUser';
import { successGetUserArtists } from '../artists/actions';
import { locationChange } from '../../utilities/patternForSagas';
import { getAuth } from '../content/utilities/selectors';
import { SUCCESS_GET_TOKEN } from '../auth/types';

export function* getGeolocation() {
  try {
    const geolocation = yield call(getPositionUser);
    yield put(successGetPositionUser(geolocation));
  } catch (e) {
    yield put(errorMessage(e.message));
  }
}

export function* getArtists() {
  const auth = yield select(getAuth);
  if (auth === false || auth === undefined) yield take(SUCCESS_GET_TOKEN);
  try {
    const { artists, recommended } = yield call(getList);
    yield put(successGetUserArtists(artists, recommended));
  } catch (e) {
    yield put(errorMessage(e.message));
  }
}

export function* getEvent({ payload }) {
  const {
    id, startDate, endDate,
    name
  } = payload;
  try {
    const { error_msg } = yield call(getEventsToServer, id, startDate, endDate);
    yield put(successGetEventsArtist(error_msg));
    yield put(push(`/event/${name}`));
  } catch (e) {
    yield put(errorMessage(e));
  }
}

export function* sagasEvents() {
  yield fork(getGeolocation);
  yield takeEvery(locationChange('/events'), getArtists);
  yield takeEvery(GET_EVENTS_ARTIST, getEvent);
}
