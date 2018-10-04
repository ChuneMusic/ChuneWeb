import { createReducer } from '../../utilities/utility';
import * as TYPES from './types';

export const initState = {
  idSingleArtist: null,
  idRecommendArtist: null
};

const followFromArtistPage = (state, { idSingleArtist }) => ({ ...state, idSingleArtist });
const followFromRecommendBlock = (state, { idRecommendArtist }) => ({ ...state, idRecommendArtist });

const handlers = {
  [TYPES.FOLLOW_FROM_ARTIST_PAGE]: followFromArtistPage,
  [TYPES.FOLLOW_FROM_RECOMMEND_BLOCK]: followFromRecommendBlock
};

export const reducerLearningMachine = createReducer(initState, handlers);
