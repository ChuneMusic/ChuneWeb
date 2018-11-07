import { createReducer } from '../../utilities/utility';
import * as TYPES from './types';

export const initState = {
  id: 0,
  name: '',
  events: [],
  geolocation: {
    latitude: 0,
    longitude: 0
  }
};

const getEventsArtist = (state, { id, name }) => ({ ...state, id, name });
const successGetPositionUser = (state, { geolocation }) => ({ ...state, geolocation });
const successGetEventsArtist = (state, { events }) => ({ ...state, events });


const handlers = {
  [TYPES.GET_EVENTS_ARTIST]: getEventsArtist,
  [TYPES.SUCCESS_GET_POSITION_USER]: successGetPositionUser,
  [TYPES.SUCCESS_GET_EVENTS_ARTIST]: successGetEventsArtist
};

export const reducerEvents = createReducer(initState, handlers);
