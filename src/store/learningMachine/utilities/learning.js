import { API } from '../../../utilities/APIConfig';

API.defaults.headers.post['Content-Type'] = 'application/json';

export const sendArtist = (id, today) => {
  const data = JSON.stringify({
    contentid: id,
    timestamp: today,
    event: 'ekvbyN5'
  });
  API.post('events/log', data);
};
export const sendRecommendArtist = (id, today) => {
  const data = JSON.stringify({
    contentid: id,
    timestamp: today,
    event: 'jVK6ZKm'
  });
  API.post('events/log', data);
};
export const sendTopTrack = (id, today) => {
  const data = JSON.stringify({
    contentid: id,
    timestamp: today,
    event: 'Zbqygvj'
  });
  API.post('events/log', data);
};
export const sendChuneSupply = (id, today) => {
  const data = JSON.stringify({
    contentid: id,
    timestamp: today,
    event: 'e6NprKE'
  });
  API.post('events/log', data);
};
export const sendYouTube = (id, today) => {
  const data = JSON.stringify({
    contentid: id,
    timestamp: today,
    event: 'pJK5AKj'
  });
  API.post('events/log', data);
};
export const sendStopYouTube = (id, today, timeVideo, timeUser) => {
  const data = JSON.stringify({
    contentid: id,
    timestamp: today,
    event: '6AvzVvR',
    duration: timeVideo,
    currenttime: timeUser
  });
  API.post('events/log', data);
};
export const sendTweet = (id, today) => {
  const data = JSON.stringify({
    contentid: id,
    timestamp: today,
    event: 'nEqkGqR'
  });
  API.post('events/log', data);
};
export const sendSuggestions = (id, today) => {
  const data = JSON.stringify({
    contentid: id,
    timestamp: today,
    event: 'nEqkGqR'
  });
  API.post('events/log', data);
};
export const sendAboutArtistInfo = (id, today) => {
  const data = JSON.stringify({
    contentid: id,
    timestamp: today,
    event: 'AXKD7vJ'
  });
  API.post('events/log', data);
};
export const sendEventsArtist = (id, today) => {
  const data = JSON.stringify({
    contentid: id,
    timestamp: today,
    event: 'PbK7lqE'
  });
  API.post('events/log', data);
};
export const sendOpenArticleToServer = (id, today) => {
  const data = JSON.stringify({
    contentid: id,
    timestamp: today,
    event: '6DKdrNp'
  });
  API.post('events/log', data);
};
export const sendCloseArticleToServer = (id, today, time) => {
  const data = JSON.stringify({
    contentid: id,
    timestamp: today,
    event: '6Gq2wNb',
    readtime: time
  });
  API.post('events/log', data);
};
export const sendOpenFeaturedArticleToServer = (id, today) => {
  const data = JSON.stringify({
    contentid: id,
    timestamp: today,
    event: 'V9q3VKW'
  });
  API.post('events/log', data);
};
export const sendRecentReleases = (id, today) => {
  const data = JSON.stringify({
    contentid: id,
    timestamp: today,
    event: 'wXqPQNo'
  });
  API.post('events/log', data);
};
