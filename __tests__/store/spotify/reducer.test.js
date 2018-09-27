import { reducerSpotify as reducer, initState } from '../../../src/store/spotify/reducer';
import * as TYPES from '../../../src/store/spotify/types';

describe('Spotify reducer', () => {
  it('should get access token spotify', () => {
    const token = 'token';
    const action = { type: TYPES.GET_ACCESS_TOKEN_SPOTIFY, payload: { token } };
    const nextState = reducer(initState, action);

    expect(nextState).toEqual({ ...initState, token });
  });

  it('should success get user profile spotify', () => {
    const profile = { name: 'Name', email: 'Email', age: 24 };
    const token = 'token';
    const action = { type: TYPES.SUCCESS_GET_USER_PROFILE_SPOTIFY, payload: { profile, token } };
    const nextState = reducer(initState, action);

    expect(nextState).toEqual({ ...initState, profile, token });
  });

  it('should success get id device spotify', () => {
    const deviceID = '1234567890';
    const action = { type: TYPES.SUCCESS_GET_DEVICE_ID, payload: { deviceID } };
    const nextState = reducer(initState, action);

    expect(nextState).toEqual({ ...initState, deviceID });
  });
});
