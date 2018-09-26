import { createReducer } from '../../utilities/utility';
import * as TYPES from './types';

export const initState = {
  message: '',
  messageSingUp: '',
  messageSingIn: ''
};

const errorMessage = (state, { message }) => ({ ...state, message });
const errorMessageSingUp = (state, { messageSingUp }) => ({ ...state, messageSingUp });
const errorMessageSingIn = (state, { messageSingIn }) => ({ ...state, messageSingIn });

const handlers = {
  [TYPES.ERROR_MESSAGE]: errorMessage,
  [TYPES.ERROR_MESSAGE_SING_UP]: errorMessageSingUp,
  [TYPES.ERROR_MESSAGE_SING_IN]: errorMessageSingIn
};

export const reducerError = createReducer(initState, handlers);
