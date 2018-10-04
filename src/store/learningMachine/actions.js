import { FOLLOW_FROM_ARTIST_PAGE, FOLLOW_FROM_RECOMMEND_BLOCK } from './types';

export const followFromArtistPage = idSingleArtist => ({
  type: FOLLOW_FROM_ARTIST_PAGE,
  payload: { idSingleArtist }
});
export const followFromRecommendBlock = idRecommendArtist => ({
  type: FOLLOW_FROM_RECOMMEND_BLOCK,
  payload: { idRecommendArtist }
});
