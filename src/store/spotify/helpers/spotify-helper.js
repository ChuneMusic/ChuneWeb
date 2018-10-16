/* globals Spotify */
import SpotifyWebApi from 'spotify-web-api-js';

import { spotifyAPI } from '../../../utilities/APIConfig';
import { store } from '../../index';
import { dataStopTrackFromSpotifySDK, dataTrackFromSpotifySDK, closeThisSDKPlayback } from '../actions';

const spotifySDKPlaybackAPI = new SpotifyWebApi();
export const spotyfiDevice = (token, deviceID) => {
  const data = [deviceID];
  const play = { play: false };
  spotifySDKPlaybackAPI.setAccessToken(token);
  spotifySDKPlaybackAPI.transferMyPlayback(data, play);
};
export const spotifyPlayTrack = (arrayTracks, track, time, deviceID) => {
  const dataPlay = {
    uris: arrayTracks,
    offset: {
      uri: `spotify:track:${track}`
    },
    position_ms: time
  };
  spotifySDKPlaybackAPI.play(dataPlay);
  spotifySDKPlaybackAPI.setVolume(50, [deviceID]);
  spotifySDKPlaybackAPI.setShuffle(false, [deviceID]);
  spotifySDKPlaybackAPI.setRepeat('off', [deviceID]);
};
export const spotifyPauseTrack = () => {
  spotifySDKPlaybackAPI.pause();
};
export const spotifyPositionTrack = (position, deviceID) => {
  spotifySDKPlaybackAPI.seek(position, [deviceID]);
};
export const spotifySetVolume = (volume, deviceID) => {
  spotifySDKPlaybackAPI.setVolume(volume, [deviceID]);
};
export const spotifyShuffleTrack = (shuffle, deviceID) => {
  spotifySDKPlaybackAPI.setShuffle(shuffle, [deviceID]);
};
export const spotifyRepeatTrack = (str, deviceID) => {
  spotifySDKPlaybackAPI.setRepeat(str, [deviceID]);
};
export const spotifyPreviousTrack = (deviceID) => {
  spotifySDKPlaybackAPI.skipToPrevious([deviceID]);
};
export const spotifyNextTrack = (deviceID) => {
  spotifySDKPlaybackAPI.skipToNext([deviceID]);
};

export const getUserProfileSpotify = () => spotifyAPI.get('me');
export const getDeviceID = token => new Promise((resolve) => {
  window.onSpotifyWebPlaybackSDKReady = () => {
    const player = new Spotify.Player({
      name: 'Chune Spotify Player',
      getOAuthToken: (cb) => { cb(token); }
    });
    player.addListener('initialization_error', ({ message }) => {
      store.dispatch(closeThisSDKPlayback());
      console.error(message);
    });
    player.addListener('authentication_error', ({ message }) => {
      store.dispatch(closeThisSDKPlayback());
      console.error(message);
    });
    player.addListener('account_error', ({ message }) => {
      store.dispatch(closeThisSDKPlayback());
      console.error(message);
    });
    player.addListener('playback_error', ({ message }) => {
      store.dispatch(closeThisSDKPlayback());
      console.error(message);
    });
    player.addListener('player_state_changed', (state) => {
      if (state === null) {
        store.dispatch(closeThisSDKPlayback());
        return;
      }
      const idTrack = state.track_window.current_track.id;
      const positionTrack = state.position;
      const artistsTrack = state.track_window.current_track.artists;
      const duration = state.track_window.current_track.duration_ms;
      const imageTrack = state.track_window.current_track.album.images[0];
      const nameTrack = state.track_window.current_track.name;
      const pausedTrack = state.paused;
      const shuffleTracks = state.shuffle;
      if (pausedTrack === false) {
        store.dispatch(dataTrackFromSpotifySDK(artistsTrack, duration, nameTrack, imageTrack, pausedTrack, positionTrack, idTrack, shuffleTracks));
      }
      if (pausedTrack) {
        store.dispatch(dataStopTrackFromSpotifySDK(idTrack, positionTrack, pausedTrack));
      }
      // console.log(state, 'hello');
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
