/* globals Spotify */
import SpotifyWebApi from 'spotify-web-api-js';

import { spotifyAPI } from '../../../utilities/APIConfig';
import { store } from '../../index';
import { dataTrackFromSpotifySDK } from '../actions';

const spotifySDKPlaybackAPI = new SpotifyWebApi();
export const spotyfiDevice = (token, deviceID) => {
  const data = [deviceID];
  const play = { play: false };
  console.log(token, deviceID, 'token, device');
  spotifySDKPlaybackAPI.setAccessToken(token);
  spotifySDKPlaybackAPI.transferMyPlayback(data, play);
};
export const spotifyPlayTrack = (track, time) => {
  const dataPlay = {
    uris: [`spotify:track:${track}`],
    position_ms: time
  };
  spotifySDKPlaybackAPI.play(dataPlay);
};
export const spotifyPauseTrack = () => {
  spotifySDKPlaybackAPI.pause();
};

export const getUserProfileSpotify = () => spotifyAPI.get('me');
export const getDeviceID = token => new Promise((resolve) => {
  window.onSpotifyWebPlaybackSDKReady = () => {
    const player = new Spotify.Player({
      name: 'Chune Spotify Player',
      getOAuthToken: (cb) => { cb(token); }
    });
    player.addListener('initialization_error', ({ message }) => { console.error(message); });
    player.addListener('authentication_error', ({ message }) => { console.error(message); });
    player.addListener('account_error', ({ message }) => { console.error(message); });
    player.addListener('playback_error', ({ message }) => { console.error(message); });
    player.addListener('player_state_changed', (state) => {
      if (state.paused) store.dispatch(dataTrackFromSpotifySDK(state.track_window.current_track.id, state.position));
      console.log(state, 'hello');
    });
    player.addListener('ready', (data) => {
      const deviceID = data.device_id;
      return resolve(deviceID);
    });
    player.addListener('not_ready', (data) => {
      const deviceID = data.device_id;
      return resolve(deviceID);
    });
    player.connect();
  };
});
