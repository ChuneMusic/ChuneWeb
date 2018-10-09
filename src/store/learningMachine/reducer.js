import { createReducer } from '../../utilities/utility';
import * as TYPES from './types';

export const initState = {
  id: null,
  idOpenArticle: null,
  idCloseArticle: null,
  dateOpenArticle: null,
  dateCloseArticle: null,
  idOpenFeaturedArticle: null,
  dateOpenFeaturedArticle: null,
  featuredArticle: false,
  idYouTubePlay: null,
  idYouTubeStop: null,
  durationYouTubeVideo: null,
  currentTimeYouTubeVideo: null
};

const followFromArtistPage = (state, { id }) => ({ ...state, id });
const followFromRecommendBlock = (state, { id }) => ({ ...state, id });
const playMusicOfTopTrack = (state, { id }) => ({ ...state, id });
const playMusicOfChuneSupply = (state, { id }) => ({ ...state, id });
const playYouTubeVideo = (state, { idYouTubePlay }) => ({ ...state, idYouTubePlay });
const stopYouTubeVideo = (state, { idYouTubeStop, durationYouTubeVideo, currentTimeYouTubeVideo }) => ({
  ...state,
  idYouTubeStop,
  durationYouTubeVideo,
  currentTimeYouTubeVideo
});
const clickTwitterPost = (state, { id }) => ({ ...state, id });
const suggestionsArtist = (state, { id }) => ({ ...state, id });
const moreInfoAboutArtist = (state, { id }) => ({ ...state, id });
const viewsEventsArtist = (state, { id }) => ({ ...state, id });
const openArticleUser = (state, { idOpenArticle, dateOpenArticle }) => ({
  ...state,
  idOpenArticle,
  dateOpenArticle,
  featuredArticle: false
});
const closeArticleUser = (state, { idCloseArticle, dateCloseArticle }) => ({ ...state, idCloseArticle, dateCloseArticle });
const openFeaturedArticleUser = (state, { idOpenFeaturedArticle, dateOpenFeaturedArticle }) => ({
  ...state,
  idOpenFeaturedArticle,
  dateOpenFeaturedArticle,
  featuredArticle: true
});
const playMusicOfRecentReleases = (state, { id }) => ({ ...state, id });
const clearArticleDate = state => ({
  ...state,
  idOpenArticle: null,
  idCloseArticle: null,
  dateOpenArticle: null,
  dateCloseArticle: null,
  idOpenFeaturedArticle: null,
  dateOpenFeaturedArticle: null
});

const handlers = {
  [TYPES.FOLLOW_FROM_ARTIST_PAGE]: followFromArtistPage,
  [TYPES.FOLLOW_FROM_RECOMMEND_BLOCK]: followFromRecommendBlock,
  [TYPES.PLAY_MUSIC_OF_TOP_TRACK]: playMusicOfTopTrack,
  [TYPES.PLAY_MUSIC_OF_CHUNE_SUPPLY]: playMusicOfChuneSupply,
  [TYPES.PLAY_YOUTUBE_VIDEO]: playYouTubeVideo,
  [TYPES.CLICK_TWITTER_POST]: clickTwitterPost,
  [TYPES.SUGGESTIONS_ARTIST]: suggestionsArtist,
  [TYPES.MORE_INFO_ABOUT_ARTIST]: moreInfoAboutArtist,
  [TYPES.VIEWS_EVENTS_ARTIST]: viewsEventsArtist,
  [TYPES.OPEN_ARTICLE_USER]: openArticleUser,
  [TYPES.CLOSE_ARTICLE_USER]: closeArticleUser,
  [TYPES.OPEN_FEATURED_ARTICLE_USER]: openFeaturedArticleUser,
  [TYPES.PLAY_MUSIC_RECENT_RELEASES]: playMusicOfRecentReleases,
  [TYPES.CLEAR_ARTICLE_DATA]: clearArticleDate,
  [TYPES.STOP_YOUTUBE_VIDEO]: stopYouTubeVideo
};

export const reducerLearningMachine = createReducer(initState, handlers);
