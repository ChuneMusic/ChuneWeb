import { createReducer } from '../../utilities/utility';
import * as TYPES from './types';

export const initState = {
  featured: [],
  contentFeedHome: [],
  artistTracksForYou: [],
  contentFeedForYou: [],
  quantityHome: 0,
  quantityForYou: 0,
  topTracks: [],
  topChune: [],
  url: '',
  title: '',
  modal: false,
  followArtists: false,
  fetchDataHome: false,
  fetchDataForYou: false
};

const successGetContentHomePageUser = (state, { featured, contentFeedHome }) => ({
  ...state,
  featured,
  contentFeedHome,
  quantityHome: 10
});
const successGetContentForYouPageUser = (state, { artistTracksForYou, contentFeedForYou }) => ({
  ...state,
  artistTracksForYou,
  contentFeedForYou,
  quantityForYou: 10
});
const fethcMoreContentHomePageUser = state => ({ ...state, fetchDataHome: true });
const fethcMoreContentForYouPageUser = state => ({ ...state, fetchDataForYou: true });
const successfethcMoreContentHome = (state, { featured, contentFeedHome }) => {
  const content = state.contentFeedHome.concat(contentFeedHome);
  const quantity = state.quantityHome + 10;
  return ({
    ...state,
    featured,
    contentFeedHome: content,
    quantityHome: quantity,
    fetchDataHome: false
  });
};
const successfethcMoreContentForYou = (state, { artistTracksForYou, contentFeedForYou }) => {
  const content = state.contentFeedForYou.concat(contentFeedForYou);
  const quantity = state.quantityForYou + 10;
  return ({
    ...state,
    artistTracksForYou,
    contentFeedForYou: content,
    quantityForYou: quantity,
    fetchDataForYou: false
  });
};
const successGetTopTracks = (state, { topTracks }) => ({ ...state, topTracks });
const successGetChuneSupply = (state, { topChune }) => ({ ...state, topChune });
const openArticleUrl = (state, { url, title, modal }) => ({
  ...state,
  url,
  title,
  modal
});
const closeArticleUrl = (state, { modal }) => ({
  ...state,
  url: '',
  title: '',
  modal
});
const noFollowArtists = (state, { followArtists }) => ({ ...state, followArtists });

const handlers = {
  [TYPES.SUCCESS_GET_CONTENT_HOME_PAGE_USER]: successGetContentHomePageUser,
  [TYPES.SUCCESS_GET_CONTENT_FORYOU_PAGE_USER]: successGetContentForYouPageUser,
  [TYPES.FETCH_MORE_CONTENT_HOME_PAGE_USER]: fethcMoreContentHomePageUser,
  [TYPES.FETCH_MORE_CONTENT_FORYOU_PAGE_USER]: fethcMoreContentForYouPageUser,
  [TYPES.SUCCESS_FETCH_CONTENT_HOME]: successfethcMoreContentHome,
  [TYPES.SUCCESS_FETCH_CONTENT_FORYOU]: successfethcMoreContentForYou,
  [TYPES.SUCCESS_GET_TOP_TRACKS]: successGetTopTracks,
  [TYPES.SUCCESS_GET_CHUNE_SUPPLY]: successGetChuneSupply,
  [TYPES.OPEN_ARTICLE_URL]: openArticleUrl,
  [TYPES.CLOSE_ARTICLE_URL]: closeArticleUrl,
  [TYPES.NO_FOLLOW_ARTISTS]: noFollowArtists
};

export const reducerContent = createReducer(initState, handlers);
