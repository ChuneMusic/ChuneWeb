import { createReducer } from '../../utilities/utility';
import * as TYPES from './types';

export const initState = {
  artists: [],
  recommended: [],
  artist: {},
  name: '',
  content: [],
  tracks: [],
  artistsSuccess: false
};

const successGetUserArtists = (state, { artists, recommended }) => ({
  ...state,
  artists,
  recommended,
  artistsSuccess: true
});
const successGetInfoArtist = (state, { artist, content, tracks }) => ({
  ...state,
  artist,
  content,
  tracks
});
const followArtist = (state, { name }) => ({ ...state, name });
const successFollowArtist = state => ({ ...state });
const unfollowArtist = (state, { name }) => ({ ...state, name });
const successUnfollowArtist = state => ({ ...state });
const clearInfoArtist = state => ({ ...state, artist: {} });

const handlers = {
  [TYPES.SUCCESS_GET_USER_ARTISTS]: successGetUserArtists,
  [TYPES.SUCCESS_GET_INFO_ARTIST]: successGetInfoArtist,
  [TYPES.FOLLOW_ARTIST]: followArtist,
  [TYPES.SUCCESS_FOLLOW_ARTIST]: successFollowArtist,
  [TYPES.UNFOLLOW_ARTIST]: unfollowArtist,
  [TYPES.SUCCESS_UNFOLLOW_ARTIST]: successUnfollowArtist,
  [TYPES.CLEAR_INFO_ARTIST]: clearInfoArtist
};

export const reducerArtists = createReducer(initState, handlers);
