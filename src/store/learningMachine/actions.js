import {
  FOLLOW_FROM_ARTIST_PAGE, FOLLOW_FROM_RECOMMEND_BLOCK,
  PLAY_MUSIC_OF_TOP_TRACK, PLAY_MUSIC_OF_CHUNE_SUPPLY,
  PLAY_YOUTUBE_VIDEO, CLICK_TWITTER_POST, SUGGESTIONS_ARTIST,
  MORE_INFO_ABOUT_ARTIST, VIEWS_EVENTS_ARTIST, OPEN_ARTICLE,
  CLOSE_ARTICLE
} from './types';

export const followFromArtistPage = id => ({
  type: FOLLOW_FROM_ARTIST_PAGE,
  payload: { id }
});
export const followFromRecommendBlock = id => ({
  type: FOLLOW_FROM_RECOMMEND_BLOCK,
  payload: { id }
});
export const playMusicOfTopTrack = id => ({
  type: PLAY_MUSIC_OF_TOP_TRACK,
  payload: { id }
});
export const playMusicOfChuneSupply = id => ({
  type: PLAY_MUSIC_OF_CHUNE_SUPPLY,
  payload: { id }
});
export const playYouTubeVideo = id => ({
  type: PLAY_YOUTUBE_VIDEO,
  payload: { id }
});
export const clickTwitterPost = id => ({
  type: CLICK_TWITTER_POST,
  payload: { id }
});
export const suggestionsArtist = id => ({
  type: SUGGESTIONS_ARTIST,
  payload: { id }
});
export const moreInfoAboutArtist = id => ({
  type: MORE_INFO_ABOUT_ARTIST,
  payload: { id }
});
export const viewsEventsArtist = id => ({
  type: VIEWS_EVENTS_ARTIST,
  payload: { id }
});
export const openArticle = (idOpenArticle, dateOpenArticle) => ({
  type: OPEN_ARTICLE,
  payload: { idOpenArticle, dateOpenArticle }
});
export const closeArticle = (idCloseArticle, dateCloseArticle) => ({
  type: CLOSE_ARTICLE,
  payload: { idCloseArticle, dateCloseArticle }
});
