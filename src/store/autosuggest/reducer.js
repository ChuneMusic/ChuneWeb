import { createReducer } from '../../utilities/utility';
import * as TYPES from './types';

export const initState = {
  value: '',
  suggestions: [],
  db: false
};

const searchArtists = (state, { value }) => ({ ...state, value });
const successSearchArtists = (state, { suggestions }) => ({ ...state, suggestions });
const clearListSearch = state => ({ ...state, suggestions: [] });
const noArtistInDB = (state, { db }) => ({ ...state, db });

const handlers = {
  [TYPES.SEARCH_ARTISTS]: searchArtists,
  [TYPES.SUCCESS_SEARCH_ARTISTS]: successSearchArtists,
  [TYPES.CLEAR_LIST_SEARCH]: clearListSearch,
  [TYPES.NO_ARTIST_IN_DB]: noArtistInDB
};

export const reducerSearch = createReducer(initState, handlers);
