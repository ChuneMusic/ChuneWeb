import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  any, objectOf,
  func, number, bool,
  string
} from 'prop-types';

import { PlayIcon, PauseIcon } from '../../shared/SocialIcons';
import * as StyledMusic from '../../styled-components/music';
import { playMusicOfTopTrack } from '../../../store/learningMachine/actions';
import { playTrack, pauseTrack } from '../../../store/spotify/actions';

class Tracks extends React.Component {
  state = {
    isPlaying: false
  }

  play = (id, track) => {
    const { single, sendHomeTrack, playTrackToSpotifyPlayer } = this.props;
    playTrackToSpotifyPlayer(track);
    this.setState({ isPlaying: true });
    if (single) {
      return null;
    }
    return sendHomeTrack(id);
  }

  pause = () => {
    const { pauseTrackToSpotifyPlayer } = this.props;
    pauseTrackToSpotifyPlayer();
    this.setState({ isPlaying: false });
  }

  render() {
    const { track, index, artistName } = this.props;
    const { isPlaying } = this.state;
    return (
      <StyledMusic.MusicTrack key={track.id}>
        <StyledMusic.MusicNumber>{index + 1}</StyledMusic.MusicNumber>
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
  trackStore: store.dataMusicPlayer.track
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
  single: bool.isRequired,
  playTrackToSpotifyPlayer: func.isRequired,
  pauseTrackToSpotifyPlayer: func.isRequired,
  artistName: string,
};

Tracks.defaultProps = {
  artistName: undefined
};
