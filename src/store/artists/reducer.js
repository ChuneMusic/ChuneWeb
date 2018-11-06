import { createReducer } from '../../utilities/utility';
import * as TYPES from './types';

export const initState = {
  artists: [],
  recommended: [],
  artist: {},
  name: '',
  content: [],
  artistsSuccess: false,
  firstListArtists: [],
  skip: false,
  firstArray: []
};

const successGetUserArtists = (state, { artists, recommended }) => ({
  ...state,
  artists,
  recommended,
  artistsSuccess: true
});
const successGetInfoArtist = (state, { artist, content }) => ({ ...state, artist, content });
const followArtist = (state, { name }) => ({ ...state, name });
const successFollowArtist = state => ({ ...state });
const unfollowArtist = (state, { name }) => ({ ...state, name });
const successUnfollowArtist = state => ({ ...state });
const clearInfoArtist = state => ({ ...state, artist: {} });
const successGetFirstListArtists = (state, { firstListArtists }) => ({ ...state, firstListArtists });
const addOrDeleteArtistInArray = (state, { artist }) => {
  const array = state.firstArray.concat();
  let newArray = [];
  if (array.includes(artist)) {
    const pos = array.indexOf(artist);
    array.splice(pos, 1);
    newArray = array;
  } else {
    newArray = [...array, artist];
  }
  return ({ ...state, firstArray: newArray });
};
const sendArrayFirstChoice = (state, { firstArray }) => ({ ...state, firstArray });
const successSendArray = state => ({
  ...state,
  skip: true,
  firstListArtists: [],
  firstArray: [],
  artistsSuccess: false
});
const skipChoiceArtists = state => ({
  ...state,
  skip: true,
  firstListArtists: [],
  firstArray: [],
  artistsSuccess: false
});

const handlers = {
  [TYPES.SUCCESS_GET_USER_ARTISTS]: successGetUserArtists,
  [TYPES.SUCCESS_GET_INFO_ARTIST]: successGetInfoArtist,
  [TYPES.FOLLOW_ARTIST]: followArtist,
  [TYPES.SUCCESS_FOLLOW_ARTIST]: successFollowArtist,
  [TYPES.UNFOLLOW_ARTIST]: unfollowArtist,
  [TYPES.SUCCESS_UNFOLLOW_ARTIST]: successUnfollowArtist,
  [TYPES.CLEAR_INFO_ARTIST]: clearInfoArtist,
  [TYPES.SUCCESS_GET_FIRST_LIST_ARTISTS]: successGetFirstListArtists,
  [TYPES.ADD_OR_DELETE_ARTIST_IN_ARRAY]: addOrDeleteArtistInArray,
  [TYPES.SEND_ARRAY_FIRST_CHOICE]: sendArrayFirstChoice,
  [TYPES.SUCCESS_SEND_ARRAY]: successSendArray,
  [TYPES.SKIP_CHOICE_ARTISTS]: skipChoiceArtists
};

export const reducerArtists = createReducer(initState, handlers);
