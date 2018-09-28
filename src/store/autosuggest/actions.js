import { SEARCH_ARTISTS, SUCCESS_SEARCH_ARTISTS, CLEAR_LIST_SEARCH } from './types';

export const searchArtists = value => ({
  type: SEARCH_ARTISTS,
  payload: { value }
});
export const successSearchArtists = suggestions => ({
  type: SUCCESS_SEARCH_ARTISTS,
  payload: { suggestions }
});
export const clearListSearch = () => ({
  type: CLEAR_LIST_SEARCH
});
