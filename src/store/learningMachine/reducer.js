import { createReducer } from '../../utilities/utility';
import * as TYPES from './types';

export const initState = {
  id: null,
  idOpenArticle: null,
  idCloseArticle: null,
  dateOpenArticle: null,
  dateCloseArticle: null
};

const followFromArtistPage = (state, { id }) => ({ ...state, id });
const followFromRecommendBlock = (state, { id }) => ({ ...state, id });
const playMusicOfTopTrack = (state, { id }) => ({ ...state, id });
const playMusicOfChuneSupply = (state, { id }) => ({ ...state, id });
const playYouTubeVideo = (state, { id }) => ({ ...state, id });
const clickTwitterPost = (state, { id }) => ({ ...state, id });
const suggestionsArtist = (state, { id }) => ({ ...state, id });
const moreInfoAboutArtist = (state, { id }) => ({ ...state, id });
const viewsEventsArtist = (state, { id }) => ({ ...state, id });
const openArticle = (state, { idOpenArticle, dateOpenArticle }) => ({ ...state, idOpenArticle, dateOpenArticle });
const closeArticle = (state, { idCloseArticle, dateCloseArticle }) => ({ ...state, idCloseArticle, dateCloseArticle });

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
  [TYPES.OPEN_ARTICLE]: openArticle,
  [TYPES.CLOSE_ARTICLE]: closeArticle
};

export const reducerLearningMachine = createReducer(initState, handlers);
