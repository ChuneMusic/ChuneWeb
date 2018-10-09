import {
  FOLLOW_FROM_ARTIST_PAGE, FOLLOW_FROM_RECOMMEND_BLOCK,
  PLAY_MUSIC_OF_TOP_TRACK, PLAY_MUSIC_OF_CHUNE_SUPPLY,
  PLAY_YOUTUBE_VIDEO, CLICK_TWITTER_POST, SUGGESTIONS_ARTIST,
  MORE_INFO_ABOUT_ARTIST, VIEWS_EVENTS_ARTIST,
  OPEN_ARTICLE_USER, CLOSE_ARTICLE_USER,
  OPEN_FEATURED_ARTICLE_USER, PLAY_MUSIC_RECENT_RELEASES,
  CLEAR_ARTICLE_DATA, STOP_YOUTUBE_VIDEO
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
export const playYouTubeVideo = idYouTubePlay => ({
  type: PLAY_YOUTUBE_VIDEO,
  payload: { idYouTubePlay }
});
export const stopYouTubeVideo = (idYouTubeStop, durationYouTubeVideo, currentTimeYouTubeVideo) => ({
  type: STOP_YOUTUBE_VIDEO,
  payload: { idYouTubeStop, durationYouTubeVideo, currentTimeYouTubeVideo }
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
export const openArticleUser = (idOpenArticle, dateOpenArticle) => ({
  type: OPEN_ARTICLE_USER,
  payload: { idOpenArticle, dateOpenArticle }
});
export const closeArticleUser = (idCloseArticle, dateCloseArticle) => ({
  type: CLOSE_ARTICLE_USER,
  payload: { idCloseArticle, dateCloseArticle }
});
export const openFeaturedArticleUser = (idOpenFeaturedArticle, dateOpenFeaturedArticle) => ({
  type: OPEN_FEATURED_ARTICLE_USER,
  payload: { idOpenFeaturedArticle, dateOpenFeaturedArticle }
});
export const playMusicOfRecentReleases = id => ({
  type: PLAY_MUSIC_RECENT_RELEASES,
  payload: { id }
});
export const clearArticleData = () => ({
  type: CLEAR_ARTICLE_DATA
});
