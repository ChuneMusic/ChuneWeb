import { createReducer } from '../../utilities/utility';
import * as TYPES from './types';

export const initState = {
  featured: [],
  contentFeedHome: [],
  contentFeedForYou: [],
  quantityHome: 0,
  quantityForYou: 0,
  topTracks: [],
  topChune: [],
  topTracksForYou: [],
  topTracksArtist: [],
  url: '',
  title: '',
  modal: false,
  followArtists: false,
  fetchDataHome: false,
  fetchDataForYou: false,
  idNews: null
};

const successGetContentHomePageUser = (state, { featured, contentFeedHome }) => ({
  ...state,
  featured,
  contentFeedHome,
  quantityHome: 10
});
const successGetContentForYouPageUser = (state, { artistTracksForYou, contentFeedForYou }) => ({
  ...state,
  topTracksForYou: artistTracksForYou,
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
    topTracksForYou: artistTracksForYou,
    contentFeedForYou: content,
    quantityForYou: quantity,
    fetchDataForYou: false
  });
};
const successGetTopTracks = (state, { topTracks }) => ({ ...state, topTracks });
const successGetChuneSupply = (state, { topChune }) => ({ ...state, topChune });
const openArticleUrl = (state, {
  idNews,
  url,
  title,
  modal
}) => ({
  ...state,
  idNews,
  url,
  title,
  modal
});
const closeArticleUrl = (state, { modal }) => ({
  ...state,
  idNews: null,
  url: '',
  title: '',
  modal
});
const noFollowArtists = (state, { followArtists }) => ({ ...state, followArtists });
const successGetTracksArtist = (state, { tracks }) => ({ ...state, topTracksArtist: tracks });

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
  [TYPES.NO_FOLLOW_ARTISTS]: noFollowArtists,
  [TYPES.SUCCESS_GET_TRACKS_ARTIST]: successGetTracksArtist
};

export const reducerContent = createReducer(initState, handlers);
