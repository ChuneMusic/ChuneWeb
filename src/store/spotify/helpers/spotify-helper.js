/* globals Spotify */
import { spotifyAPI } from '../../../utilities/APIConfig';

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
    player.addListener('player_state_changed', (state) => { console.log(state); });
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
