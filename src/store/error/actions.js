import { ERROR_MESSAGE, ERROR_MESSAGE_SING_UP, ERROR_MESSAGE_SING_IN } from './types';

export const errorMessage = message => ({
  type: ERROR_MESSAGE,
  payload: { message }
});
export const errorMessageSingUp = messageSingUp => ({
  type: ERROR_MESSAGE_SING_UP,
  payload: { messageSingUp }
});
export const errorMessageSingIn = messageSingIn => ({
  type: ERROR_MESSAGE_SING_IN,
  payload: { messageSingIn }
});
