/* globals Spotify */
import SpotifyWebApi from 'spotify-web-api-js';

import { spotifyAPI } from '../../../utilities/APIConfig';
import { store } from '../../index';
import { dataStopTrackFromSpotifySDK, dataTrackFromSpotifySDK } from '../actions';

const spotifySDKPlaybackAPI = new SpotifyWebApi();
export const spotyfiDevice = (token, deviceID) => {
  const data = [deviceID];
  const play = { play: false };
  console.log(token, deviceID, 'token, device');
  spotifySDKPlaybackAPI.setAccessToken(token);
  spotifySDKPlaybackAPI.transferMyPlayback(data, play);
};
export const spotifyPlayTrack = (arrayTracks, track, time) => {
  const dataPlay = {
    uris: arrayTracks,
    offset: {
      uri: `spotify:track:${track}`
    },
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
      const idTrack = state.track_window.current_track.id;
      const positionTrack = state.position;
      const artistsTrack = state.track_window.current_track.artists;
      const duration = state.track_window.current_track.duration_ms;
      const imageTrack = state.track_window.current_track.album.images[0];
      const nameTrack = state.track_window.current_track.name;
      if (state.paused === false) store.dispatch(dataTrackFromSpotifySDK(artistsTrack, duration, nameTrack, imageTrack));
      if (state.paused) store.dispatch(dataStopTrackFromSpotifySDK(idTrack, positionTrack));
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
