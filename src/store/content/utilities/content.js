import { API } from '../../../utilities/APIConfig';

export const getContentHome = () => API.get('recs/home/').then(response => response.data);
export const getContentForYou = () => API.get('recs/you/').then(response => response.data);
export const getContentHomePageToServer = quantity => API.get(`content/?filter=recent&start=${quantity}&max_results=20`).then(response => response.data);
export const getContentForYouPageToServer = quantity => API.get(`content/?filter=followed&start=${quantity}&max_results=20`).then(response => response.data);
export const getTopTracksToServer = () => API.get('tracks/sources/1/').then(response => response.data);
export const getChuneSupplyToServer = () => API.get('tracks/sources/2/').then(response => response.data);
