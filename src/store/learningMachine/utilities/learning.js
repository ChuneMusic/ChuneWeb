import { API } from '../../../utilities/APIConfig';

API.defaults.headers.post['Content-Type'] = 'application/json';

export const sendArtist = (id, today) => {
  const data = JSON.stringify({
    contentid: id,
    timestamp: today,
    event: 'ekvbyN5'
  });
  return API.post('events/log', data).then(response => response);
};
export const sendRecommendArtist = (id, today) => {
  const data = JSON.stringify({
    contentid: id,
    timestamp: today,
    event: 'jVK6ZKm'
  });
  return API.post('events/log', data).then(response => response);
};
