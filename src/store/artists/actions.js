import {
  SUCCESS_GET_USER_ARTISTS, SUCCESS_GET_INFO_ARTIST, FOLLOW_ARTIST,
  SUCCESS_FOLLOW_ARTIST, UNFOLLOW_ARTIST, SUCCESS_UNFOLLOW_ARTIST,
  CLEAR_INFO_ARTIST
} from './types';

export const successGetUserArtists = (artists, recommended) => ({
  type: SUCCESS_GET_USER_ARTISTS,
  payload: { artists, recommended }
});
export const successGetInfoArtist = (artist, content) => ({
  type: SUCCESS_GET_INFO_ARTIST,
  payload: { artist, content }
});
export const followArtist = name => ({
  type: FOLLOW_ARTIST,
  payload: { name }
});
export const successFollowArtist = () => ({
  type: SUCCESS_FOLLOW_ARTIST
});
export const unfollowArtist = name => ({
  type: UNFOLLOW_ARTIST,
  payload: { name }
});
export const successUnfollowArtist = () => ({
  type: SUCCESS_UNFOLLOW_ARTIST
});
export const clearInfoArtist = () => ({
  type: CLEAR_INFO_ARTIST
});
