import {
  put, takeEvery, call,
  select
} from 'redux-saga/effects';

import { errorMessage } from '../error/actions';
import {
  FOLLOW_FROM_ARTIST_PAGE, FOLLOW_FROM_RECOMMEND_BLOCK,
  PLAY_MUSIC_OF_TOP_TRACK, PLAY_MUSIC_OF_CHUNE_SUPPLY,
  PLAY_YOUTUBE_VIDEO, CLICK_TWITTER_POST, SUGGESTIONS_ARTIST,
  MORE_INFO_ABOUT_ARTIST, VIEWS_EVENTS_ARTIST,
  OPEN_ARTICLE_USER, CLOSE_ARTICLE_USER,
  OPEN_FEATURED_ARTICLE_USER, PLAY_MUSIC_RECENT_RELEASES,
  STOP_YOUTUBE_VIDEO
} from './types';
import { getDate } from './utilities/date';
import {
  sendArtist, sendRecommendArtist,
  sendTopTrack, sendChuneSupply,
  sendYouTube, sendTweet, sendSuggestions,
  sendAboutArtistInfo, sendEventsArtist,
  sendCloseArticleToServer, sendOpenArticleToServer,
  sendOpenFeaturedArticleToServer, sendRecentReleases,
  sendStopYouTube
} from './utilities/learning';
import { getDateOpenArticle } from './utilities/selector';
import { clearArticleData } from './actions';

export function* sendDataArtist({ payload }) {
  const { id } = payload;
  const today = getDate();
  try {
    yield call(sendArtist, id, today);
  } catch (e) {
    yield put(errorMessage(e));
  }
}
export function* sendDataRecommendArtist({ payload }) {
  const { id } = payload;
  const today = getDate();
  try {
    yield call(sendRecommendArtist, id, today);
  } catch (e) {
    yield put(errorMessage(e));
  }
}
export function* sendDataMusicOfToptrack({ payload }) {
  const { id } = payload;
  const today = getDate();
  try {
    yield call(sendTopTrack, id, today);
  } catch (e) {
    yield put(errorMessage(e));
  }
}
export function* sendDataMusicOfChuneSupply({ payload }) {
  const { id } = payload;
  const today = getDate();
  try {
    yield call(sendChuneSupply, id, today);
  } catch (e) {
    yield put(errorMessage(e));
  }
}
export function* sendDataPlayYouTubeVideo({ payload }) {
  const { idYouTubePlay } = payload;
  const today = getDate();
  try {
    yield call(sendYouTube, idYouTubePlay, today);
  } catch (e) {
    yield put(errorMessage(e));
  }
}
export function* sendDataStopYouTubeVideo({ payload }) {
  const { idYouTubeStop, durationYouTubeVideo, currentTimeYouTubeVideo } = payload;
  const today = getDate();
  try {
    yield call(sendStopYouTube, idYouTubeStop, today, durationYouTubeVideo, currentTimeYouTubeVideo);
  } catch (e) {
    yield put(errorMessage(e));
  }
}
export function* sendDataTweetId({ payload }) {
  const { id } = payload;
  const today = getDate();
  try {
    yield call(sendTweet, id, today);
  } catch (e) {
    yield put(errorMessage(e));
  }
}
export function* sendDataSuggestionsArtist({ payload }) {
  const { id } = payload;
  const today = getDate();
  try {
    yield call(sendSuggestions, id, today);
  } catch (e) {
    yield put(errorMessage(e));
  }
}
export function* sendDataAboutArtistInfo({ payload }) {
  const { id } = payload;
  const today = getDate();
  try {
    yield call(sendAboutArtistInfo, id, today);
  } catch (e) {
    yield put(errorMessage(e));
  }
}
export function* sendDataEventsArtist({ payload }) {
  const { id } = payload;
  const today = getDate();
  try {
    yield call(sendEventsArtist, id, today);
  } catch (e) {
    yield put(errorMessage(e));
  }
}
export function* sendOpenArticleUser({ payload }) {
  const { idOpenArticle } = payload;
  const today = getDate();
  try {
    yield call(sendOpenArticleToServer, idOpenArticle, today);
  } catch (e) {
    yield put(errorMessage(e));
  }
}
export function* sendCloseArticleUser({ payload }) {
  const { idCloseArticle, dateCloseArticle } = payload;
  const { dateOpenArticle, featuredArticle } = yield select(getDateOpenArticle);
  if (featuredArticle) return;
  const readTime = dateCloseArticle - dateOpenArticle;
  const today = getDate();
  yield put(clearArticleData());
  try {
    yield call(sendCloseArticleToServer, idCloseArticle, today, readTime);
  } catch (e) {
    yield put(errorMessage(e));
  }
}
export function* sendOpenFeaturedArticleUser({ payload }) {
  const { idOpenFeaturedArticle } = payload;
  const today = getDate();
  try {
    yield call(sendOpenFeaturedArticleToServer, idOpenFeaturedArticle, today);
  } catch (e) {
    yield put(errorMessage(e));
  }
}
export function* sendDataMusicOfRecentReleases({ payload }) {
  const { id } = payload;
  const today = getDate();
  try {
    yield call(sendRecentReleases, id, today);
  } catch (e) {
    yield put(errorMessage(e));
  }
}

export function* sagasLearningMachine() {
  yield takeEvery(FOLLOW_FROM_ARTIST_PAGE, sendDataArtist);
  yield takeEvery(FOLLOW_FROM_RECOMMEND_BLOCK, sendDataRecommendArtist);
  yield takeEvery(PLAY_MUSIC_OF_TOP_TRACK, sendDataMusicOfToptrack);
  yield takeEvery(PLAY_MUSIC_OF_CHUNE_SUPPLY, sendDataMusicOfChuneSupply);
  yield takeEvery(PLAY_YOUTUBE_VIDEO, sendDataPlayYouTubeVideo);
  yield takeEvery(STOP_YOUTUBE_VIDEO, sendDataStopYouTubeVideo);
  yield takeEvery(CLICK_TWITTER_POST, sendDataTweetId);
  yield takeEvery(SUGGESTIONS_ARTIST, sendDataSuggestionsArtist);
  yield takeEvery(MORE_INFO_ABOUT_ARTIST, sendDataAboutArtistInfo);
  yield takeEvery(VIEWS_EVENTS_ARTIST, sendDataEventsArtist);
  yield takeEvery(OPEN_ARTICLE_USER, sendOpenArticleUser);
  yield takeEvery(CLOSE_ARTICLE_USER, sendCloseArticleUser);
  yield takeEvery(OPEN_FEATURED_ARTICLE_USER, sendOpenFeaturedArticleUser);
  yield takeEvery(PLAY_MUSIC_RECENT_RELEASES, sendDataMusicOfRecentReleases);
}
