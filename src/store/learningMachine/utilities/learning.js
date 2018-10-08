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
export const sendTopTrack = (id, today) => {
  const data = JSON.stringify({
    contentid: id,
    timestamp: today,
    event: 'Zbqygvj'
  });
  return API.post('events/log', data).then(response => response);
};
export const sendChuneSupply = (id, today) => {
  const data = JSON.stringify({
    contentid: id,
    timestamp: today,
    event: 'e6NprKE'
  });
  return API.post('events/log', data).then(response => response);
};
export const sendYouTube = (id, today) => {
  const data = JSON.stringify({
    contentid: id,
    timestamp: today,
    event: '6AvzVvR'
  });
  return API.post('events/log', data).then(response => response);
};
export const sendTweet = (id, today) => {
  const data = JSON.stringify({
    contentid: id,
    timestamp: today,
    event: 'nEqkGqR'
  });
  return API.post('events/log', data).then(response => response);
};
export const sendSuggestions = (id, today) => {
  const data = JSON.stringify({
    contentid: id,
    timestamp: today,
    event: 'nEqkGqR'
  });
  return API.post('events/log', data).then(response => response);
};
export const sendAboutArtistInfo = (id, today) => {
  const data = JSON.stringify({
    contentid: id,
    timestamp: today,
    event: 'AXKD7vJ'
  });
  return API.post('events/log', data).then(response => response);
};
export const sendEventsArtist = (id, today) => {
  const data = JSON.stringify({
    contentid: id,
    timestamp: today,
    event: 'PbK7lqE'
  });
  return API.post('events/log', data).then(response => response);
};
export const openArticle = (id, today) => {
  const data = JSON.stringify({
    contentid: id,
    timestamp: today,
    event: '6DKdrNp'
  });
  return API.post('events/log', data).then(response => response);
};
export const closeArticle = (id, today, time) => {
  const data = JSON.stringify({
    contentid: id,
    timestamp: today,
    event: '6Gq2wNb',
    readtime: time
  });
  return API.post('events/log', data).then(response => response);
};
