import { GET_EVENTS_ARTIST, SUCCESS_GET_EVENTS_ARTIST, SUCCESS_GET_POSITION_USER } from './types';

export const getEventsArtist = (id, name) => ({
  type: GET_EVENTS_ARTIST,
  payload: { id, name }
});
export const successGetPositionUser = geolocation => ({
  type: SUCCESS_GET_POSITION_USER,
  payload: { geolocation }
});
export const successGetEventsArtist = events => ({
  type: SUCCESS_GET_EVENTS_ARTIST,
  payload: { events }
});
