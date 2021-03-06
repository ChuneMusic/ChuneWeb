import {
  SUCCESS_GET_CONTENT_HOME_PAGE_USER, FETCH_MORE_CONTENT_HOME_PAGE_USER,
  SUCCESS_GET_TOP_TRACKS, SUCCESS_GET_CHUNE_SUPPLY, OPEN_ARTICLE_URL,
  SUCCESS_GET_CONTENT_FORYOU_PAGE_USER, FETCH_MORE_CONTENT_FORYOU_PAGE_USER, CLOSE_ARTICLE_URL,
  SUCCESS_FETCH_CONTENT_HOME, SUCCESS_FETCH_CONTENT_FORYOU, NO_FOLLOW_ARTISTS,
  SUCCESS_GET_TRACKS_ARTIST
} from './types';

export const successGetContentHomePageUser = (featured, contentFeedHome) => ({
  type: SUCCESS_GET_CONTENT_HOME_PAGE_USER,
  payload: { featured, contentFeedHome }
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
export const successfethcMoreContentHome = (featured, contentFeedHome) => ({
  type: SUCCESS_FETCH_CONTENT_HOME,
  payload: { featured, contentFeedHome }
});
export const successfethcMoreContentForYou = (artistTracksForYou, contentFeedForYou) => ({
  type: SUCCESS_FETCH_CONTENT_FORYOU,
  payload: { artistTracksForYou, contentFeedForYou }
});
export const successGetTopTracks = topTracks => ({
  type: SUCCESS_GET_TOP_TRACKS,
  payload: { topTracks }
});
export const successGetChuneSupply = topChune => ({
  type: SUCCESS_GET_CHUNE_SUPPLY,
  payload: { topChune }
});
export const openArticleUrl = (idNews, url, title, modal) => ({
  type: OPEN_ARTICLE_URL,
  payload: {
    idNews,
    url,
    title,
    modal
  }
});
export const closeArticleUrl = modal => ({
  type: CLOSE_ARTICLE_URL,
  payload: { modal }
});
export const noFollowArtists = followArtists => ({
  type: NO_FOLLOW_ARTISTS,
  payload: { followArtists }
});
export const successGetTracksArtist = tracks => ({
  type: SUCCESS_GET_TRACKS_ARTIST,
  payload: { tracks }
});
