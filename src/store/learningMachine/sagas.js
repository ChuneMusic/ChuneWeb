import {
  put, takeEvery, call,
  select
} from 'redux-saga/effects';

import { errorMessage } from '../error/actions';
import {
  FOLLOW_FROM_ARTIST_PAGE, FOLLOW_FROM_RECOMMEND_BLOCK,
  PLAY_MUSIC_OF_TOP_TRACK, PLAY_MUSIC_OF_CHUNE_SUPPLY,
  PLAY_YOUTUBE_VIDEO, CLICK_TWITTER_POST, SUGGESTIONS_ARTIST,
  MORE_INFO_ABOUT_ARTIST, VIEWS_EVENTS_ARTIST, OPEN_ARTICLE,
  CLOSE_ARTICLE,
} from './types';
import { getDate } from './utilities/date';
import {
  sendArtist, sendRecommendArtist,
  sendTopTrack, sendChuneSupply,
  sendYouTube, sendTweet, sendSuggestions,
  sendAboutArtistInfo, sendEventsArtist,
} from './utilities/learning';
import { openArticle, closeArticle } from './actions';
import { getDateOpenArticle } from './utilities/selector';

export function* sendDataArtist({ payload }) {
  const { id } = payload;
  const today = getDate();
  console.log(today, id, 'learning artist follow');
  try {
    yield call(sendArtist, id, today);
  } catch (e) {
    yield put(errorMessage(e));
  }
}
export function* sendDataRecommendArtist({ payload }) {
  const { id } = payload;
  const today = getDate();
  console.log(today, id, 'learning artist recommended follow');
  try {
    yield call(sendRecommendArtist, id, today);
  } catch (e) {
    yield put(errorMessage(e));
  }
}
export function* sendDataMusicOfToptrack({ payload }) {
  const { id } = payload;
  const today = getDate();
  console.log(today, id, 'learning music top track');
  try {
    yield call(sendTopTrack, id, today);
  } catch (e) {
    yield put(errorMessage(e));
  }
}
export function* sendDataMusicOfChuneSupply({ payload }) {
  const { id } = payload;
  const today = getDate();
  console.log(today, id, 'learning music chune supply');
  try {
    yield call(sendChuneSupply, id, today);
  } catch (e) {
    yield put(errorMessage(e));
  }
}
export function* sendDataYouTubeVideo({ payload }) {
  const { id } = payload;
  const today = getDate();
  console.log(today, id, 'learning youtube id');
  try {
    yield call(sendYouTube, id, today);
  } catch (e) {
    yield put(errorMessage(e));
  }
}
export function* sendDataTweetId({ payload }) {
  const { id } = payload;
  const today = getDate();
  console.log(today, id, 'learning tweet id');
  try {
    yield call(sendTweet, id, today);
  } catch (e) {
    yield put(errorMessage(e));
  }
}
export function* sendDataSuggestionsArtist({ payload }) {
  const { id } = payload;
  const today = getDate();
  console.log(today, id, 'learning suggestions id');
  try {
    yield call(sendSuggestions, id, today);
  } catch (e) {
    yield put(errorMessage(e));
  }
}
export function* sendDataAboutArtistInfo({ payload }) {
  const { id } = payload;
  const today = getDate();
  console.log(today, id, 'learning more info');
  try {
    yield call(sendAboutArtistInfo, id, today);
  } catch (e) {
    yield put(errorMessage(e));
  }
}
export function* sendDataEventsArtist({ payload }) {
  const { id } = payload;
  const today = getDate();
  console.log(today, id, 'learning events artist');
  try {
    yield call(sendEventsArtist, id, today);
  } catch (e) {
    yield put(errorMessage(e));
  }
}
export function* sendOpenArticle({ payload }) {
  const { idOpenArticle } = payload;
  const today = getDate();
  console.log(today, idOpenArticle, 'learning open article');
  try {
    yield call(openArticle, idOpenArticle, today);
  } catch (e) {
    yield put(errorMessage(e));
  }
}
export function* sendCloseArticle({ payload }) {
  const { idCloseArticle, dateCloseArticle } = payload;
  const dateOpenArticle = yield select(getDateOpenArticle);
  const readTime = dateCloseArticle - dateOpenArticle;
  const today = getDate();
  console.log(today, idCloseArticle, dateCloseArticle, readTime, 'learning close article');
  try {
    yield call(closeArticle, idCloseArticle, today, readTime);
  } catch (e) {
    yield put(errorMessage(e));
  }
}

export function* sagasLearningMachine() {
  yield takeEvery(FOLLOW_FROM_ARTIST_PAGE, sendDataArtist);
  yield takeEvery(FOLLOW_FROM_RECOMMEND_BLOCK, sendDataRecommendArtist);
  yield takeEvery(PLAY_MUSIC_OF_TOP_TRACK, sendDataMusicOfToptrack);
  yield takeEvery(PLAY_MUSIC_OF_CHUNE_SUPPLY, sendDataMusicOfChuneSupply);
  yield takeEvery(PLAY_YOUTUBE_VIDEO, sendDataYouTubeVideo);
  yield takeEvery(CLICK_TWITTER_POST, sendDataTweetId);
  yield takeEvery(SUGGESTIONS_ARTIST, sendDataSuggestionsArtist);
  yield takeEvery(MORE_INFO_ABOUT_ARTIST, sendDataAboutArtistInfo);
  yield takeEvery(VIEWS_EVENTS_ARTIST, sendDataEventsArtist);
  yield takeEvery(OPEN_ARTICLE, sendOpenArticle);
  yield takeEvery(CLOSE_ARTICLE, sendCloseArticle);
}
