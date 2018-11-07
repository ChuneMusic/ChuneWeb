import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  any, objectOf,
  func, number, bool,
  string,
  arrayOf
} from 'prop-types';

import { PlayIcon, PauseIcon } from '../../shared/SocialIcons';
import * as StyledMusic from '../../styled-components/music';
import { playMusicOfTopTrack } from '../../../store/learningMachine/actions';
import { playTrack, pauseTrack } from '../../../store/spotify/actions';

class Tracks extends React.Component {
  state = {
    isPlaying: false
  }

  componentWillMount() {
    const { track, idTrack, pausedTrack } = this.props;
    if (idTrack === track.spotify_id && pausedTrack === false) {
      this.setState({ isPlaying: true });
    } else {
      this.setState({ isPlaying: false });
    }
  }

  componentWillReceiveProps(nextProps) {
    const { track } = this.props;
    if (nextProps.idTrack === track.spotify_id && nextProps.pausedTrack === false) {
      this.setState({ isPlaying: true });
    } else {
      this.setState({ isPlaying: false });
    }
  }

  play = (id, track) => {
    const {
      sendHomeTrack, playTrackToSpotifyPlayer, chunesupply,
      topTracksArtist, topTracks
    } = this.props;
    this.setState({ isPlaying: true });
    if (chunesupply === 'artistTopTracks') {
      playTrackToSpotifyPlayer(track, topTracksArtist);
      return null;
    }
    playTrackToSpotifyPlayer(track, topTracks);
    return sendHomeTrack(id);
  }

  pause = () => {
    const { pauseTrackToSpotifyPlayer } = this.props;
    pauseTrackToSpotifyPlayer();
    this.setState({ isPlaying: false });
  }

  playTrackSpotify = (id) => {
    const { chunesupply, sendHomeTrack } = this.props;
    if (chunesupply === 'artistTopTracks') return null;
    return sendHomeTrack(id);
  }

  render() {
    const {
      track, index, artistName,
      token, offPlayer
    } = this.props;
    const { isPlaying } = this.state;
    if (token === '' || offPlayer) {
      return (
        <a
          href={`https://open.spotify.com/track/${track.spotify_id}`}
          target="_blank"
          rel="noopener noreferrer"
          key={`track-${track.id}`}
          onClick={() => this.playTrackSpotify(track.id)}
        >
          <StyledMusic.MusicTrack key={track.id} isPlaying={isPlaying}>
            <StyledMusic.MusicNumber isPlaying={isPlaying}>
              {index + 1}
            </StyledMusic.MusicNumber>
            <StyledMusic.MusicSoundTitle>
              <StyledMusic.MusicSoundName>
                {track.title}
              </StyledMusic.MusicSoundName>
              <StyledMusic.MusicSoundArtist>
                by {track.artist_name || artistName}
              </StyledMusic.MusicSoundArtist>
            </StyledMusic.MusicSoundTitle>
            <StyledMusic.MusicIcon>
              <PlayIcon />
            </StyledMusic.MusicIcon>
          </StyledMusic.MusicTrack>
        </a>
      );
    }
    return (
      <StyledMusic.MusicTrack key={track.id} isPlaying={isPlaying}>
        <StyledMusic.MusicNumber isPlaying={isPlaying}>
          {index + 1}
        </StyledMusic.MusicNumber>
        <StyledMusic.MusicSoundTitle>
          <StyledMusic.MusicSoundName>
            {track.title}
          </StyledMusic.MusicSoundName>
          <StyledMusic.MusicSoundArtist>
            by {track.artist_name || artistName}
          </StyledMusic.MusicSoundArtist>
        </StyledMusic.MusicSoundTitle>
        <StyledMusic.MusicIcon>
          {isPlaying ? (
            <PauseIcon onClick={this.pause} />
          ) : (
            <PlayIcon onClick={() => this.play(track.id, track.spotify_id)} />
          )}
        </StyledMusic.MusicIcon>
      </StyledMusic.MusicTrack>
    );
  }
}

const mapStateToProps = store => ({
  pausedTrack: store.dataSpotify.pausedTrack,
  idTrack: store.dataSpotify.idTrack,
  topTracksArtist: store.dataContent.topTracksArtist,
  topTracks: store.dataContent.topTracks,
  token: store.dataSpotify.token,
  offPlayer: store.dataSpotify.offPlayer
});

const mapActionsToProps = dispatch => bindActionCreators({
  sendHomeTrack: playMusicOfTopTrack,
  playTrackToSpotifyPlayer: playTrack,
  pauseTrackToSpotifyPlayer: pauseTrack
}, dispatch);

export const TracksConnect = connect(mapStateToProps, mapActionsToProps)(Tracks);

Tracks.propTypes = {
  track: objectOf(any).isRequired,
  sendHomeTrack: func.isRequired,
  index: number.isRequired,
  chunesupply: string.isRequired,
  playTrackToSpotifyPlayer: func.isRequired,
  pauseTrackToSpotifyPlayer: func.isRequired,
  artistName: string,
  idTrack: string.isRequired,
  pausedTrack: bool.isRequired,
  topTracksArtist: arrayOf(any).isRequired,
  topTracks: arrayOf(any).isRequired,
  token: string.isRequired,
  offPlayer: bool.isRequired
};

Tracks.defaultProps = {
  artistName: undefined
};
