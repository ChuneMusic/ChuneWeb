import { createReducer } from '../../utilities/utility';
import * as TYPES from './types';

export const initState = {
  artistTracksHome: [],
  contentFeedHome: [],
  artistTracksForYou: [],
  contentFeedForYou: [],
  pagesHome: 0,
  pagesForYou: 0,
  topTracks: [],
  topChune: [],
  url: '',
  title: ''
};

const getContentUser = state => ({ ...state });
const successGetContentHomePageUser = (state, { artistTracksHome, contentFeedHome }) => {
  const content = state.contentFeedHome.concat(contentFeedHome);
  return ({
    ...state,
    artistTracksHome,
    contentFeedHome: content,
    pagesHome: state.pagesHome + 1
  });
};
const successGetContentForYouPageUser = (state, { artistTracksForYou, contentFeedForYou }) => {
  const content = state.contentFeedForYou.concat(contentFeedForYou);
  return ({
    ...state,
    artistTracksForYou,
    contentFeedForYou: content,
    pagesForYou: state.pagesForYou + 1
  });
};
const fethcMoreContentUser = state => ({ ...state });
const successGetTopTracks = (state, { topTracks }) => ({ ...state, topTracks });
const successGetChuneSupply = (state, { topChune }) => ({ ...state, topChune });
const openArticleUrl = (state, { url, title }) => ({ ...state, url, title });

const handlers = {
  [TYPES.GET_CONTENT_USER]: getContentUser,
  [TYPES.SUCCESS_GET_CONTENT_HOME_PAGE_USER]: successGetContentHomePageUser,
  [TYPES.SUCCESS_GET_CONTENT_FORYOU_PAGE_USER]: successGetContentForYouPageUser,
  [TYPES.FETCH_MORE_CONTENT_USER]: fethcMoreContentUser,
  [TYPES.SUCCESS_GET_TOP_TRACKS]: successGetTopTracks,
  [TYPES.SUCCESS_GET_CHUNE_SUPPLY]: successGetChuneSupply,
  [TYPES.OPEN_ARTICLE_URL]: openArticleUrl
};

export const reducerContent = createReducer(initState, handlers);
