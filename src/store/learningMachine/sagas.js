import { put, takeEvery, call } from 'redux-saga/effects';

import { errorMessage } from '../error/actions';
import { FOLLOW_FROM_ARTIST_PAGE, FOLLOW_FROM_RECOMMEND_BLOCK } from './types';
import { getDate } from './utilities/date';
import { sendArtist, sendRecommendArtist } from './utilities/learning';

export function* sendDataArtist({ payload }) {
  const { idSingleArtist } = payload;
  const today = getDate();
  console.log(today, idSingleArtist, 'learning');
  try {
    const data = yield call(sendArtist, idSingleArtist, today);
    console.log(data, 'data');
  } catch (e) {
    yield put(errorMessage(e));
  }
}

export function* sendDataRecommendArtist({ payload }) {
  const { idRecommendArtist } = payload;
  const today = getDate();
  console.log(today, idRecommendArtist, 'learning');
  try {
    const data = yield call(sendRecommendArtist, idRecommendArtist, today);
    console.log(data, 'data');
  } catch (e) {
    yield put(errorMessage(e));
  }
}

export function* sagasLearningMachine() {
  yield takeEvery(FOLLOW_FROM_ARTIST_PAGE, sendDataArtist);
  yield takeEvery(FOLLOW_FROM_RECOMMEND_BLOCK, sendDataRecommendArtist);
}
