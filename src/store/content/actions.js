import {
  GET_CONTENT_USER, SUCCESS_GET_CONTENT_HOME_PAGE_USER, FETCH_MORE_CONTENT_HOME_PAGE_USER,
  SUCCESS_GET_TOP_TRACKS, SUCCESS_GET_CHUNE_SUPPLY, OPEN_ARTICLE_URL,
  SUCCESS_GET_CONTENT_FORYOU_PAGE_USER, FETCH_MORE_CONTENT_FORYOU_PAGE_USER
} from './types';

export const getContentUser = () => ({
  type: GET_CONTENT_USER
});
export const successGetContentHomePageUser = (artistTracksHome, contentFeedHome) => ({
  type: SUCCESS_GET_CONTENT_HOME_PAGE_USER,
  payload: { artistTracksHome, contentFeedHome }
});
export const successGetContentForYouPageUser = (artistTracksForYou, contentFeedForYou) => ({
  type: SUCCESS_GET_CONTENT_FORYOU_PAGE_USER,
  payload: { artistTracksForYou, contentFeedForYou }
});
export const fethcMoreContentHomePageUser = () => ({
  type: FETCH_MORE_CONTENT_HOME_PAGE_USER
});
export const fethcMoreContentForYouPageUser = () => ({
  type: FETCH_MORE_CONTENT_FORYOU_PAGE_USER
});
export const successGetTopTracks = topTracks => ({
  type: SUCCESS_GET_TOP_TRACKS,
  payload: { topTracks }
});
export const successGetChuneSupply = topChune => ({
  type: SUCCESS_GET_CHUNE_SUPPLY,
  payload: { topChune }
});
export const openArticleUrl = (url, title) => ({
  type: OPEN_ARTICLE_URL,
  payload: { url, title }
});
