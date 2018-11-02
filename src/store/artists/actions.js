import {
  SUCCESS_GET_USER_ARTISTS, SUCCESS_GET_INFO_ARTIST, FOLLOW_ARTIST,
  SUCCESS_FOLLOW_ARTIST, UNFOLLOW_ARTIST, SUCCESS_UNFOLLOW_ARTIST,
  CLEAR_INFO_ARTIST, SUCCESS_GET_FIRST_LIST_ARTISTS, ADD_OR_DELETE_ARTIST_IN_ARRAY,
  SEND_ARRAY_FIRST_CHOICE, SUCCESS_SEND_ARRAY, SKIP_CHOICE_ARTISTS
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
export const successGetFirstListArtists = firstListArtists => ({
  type: SUCCESS_GET_FIRST_LIST_ARTISTS,
  payload: { firstListArtists }
});
export const addOrDeleteArtistInArray = artist => ({
  type: ADD_OR_DELETE_ARTIST_IN_ARRAY,
  payload: { artist }
});
export const sendArrayFirstChoice = firstArray => ({
  type: SEND_ARRAY_FIRST_CHOICE,
  payload: { firstArray }
});
export const successSendArray = () => ({
  type: SUCCESS_SEND_ARRAY
});
export const skipChoiceArtists = () => ({
  type: SKIP_CHOICE_ARTISTS
});
