import { API } from '../../../utilities/APIConfig';

export const getContentHomePageToServer = page => API.get(`content/?filter=recent&start=${page}&max_results=10`).then(response => response.data);
export const getContentForYouPageToServer = page => API.get(`content/?filter=follow&start=${page}&max_results=10`).then(response => response.data);
export const getTopTracksToServer = () => API.get('tracks/sources/1/').then(response => response.data);
export const getChuneSupplyToServer = () => API.get('tracks/sources/2/').then(response => response.data);
