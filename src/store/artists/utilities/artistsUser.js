import { API } from '../../../utilities/APIConfig';

export const getList = () => API.get('artists/').then(response => response.data);
export const getChoiceList = () => API.get('artists/top/').then(response => response.data.artists);
export const postArtist = name => API.post(`artists/${name}/`);
export const deleteArtist = name => API.delete(`artists/${name}/`);
