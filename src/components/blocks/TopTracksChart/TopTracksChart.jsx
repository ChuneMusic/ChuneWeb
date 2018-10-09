import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  string, any, arrayOf,
  bool, func
} from 'prop-types';

import { PlayIcon, PauseIcon } from '../../shared/SocialIcons';
import * as StyledMusic from '../../styled-components/music';
import Up from '../../../../assets/images/chevron-arrow-up.svg';
import Down from '../../../../assets/images/chevron-arrow-down.svg';
import { playMusicOfTopTrack } from '../../../store/learningMachine/actions';

class TopTracksChart extends React.Component {
  state = {
    openList: false
  }

  openPlaylist = () => this.setState({ openList: !this.state.openList })

  track = (id) => {
    const { single, sendHomeTrack } = this.props;
    if (single) {
      return null;
    }
    return sendHomeTrack(id);
  }

  render() {
    const { tracks, artistName, single } = this.props;
    const { openList } = this.state;
    return (
      <StyledMusic.MusicBlock>
        <StyledMusic.MusicTitle>
          {single ? 'Recent Releases' : 'TOP TRACKS CHART'}
        </StyledMusic.MusicTitle>
        {tracks.map((track, index) => {
          const isPlaying = false;
          if (index > 9 && openList === false) return null;
          return (
            <a
              href={`https://open.spotify.com/track/${track.spotify_id}`}
              target="_blank"
              rel="noopener noreferrer"
              key={`track-${track.id}`}
              onClick={() => this.track(track.id)}
            >
              <StyledMusic.MusicTrack isPlaying={isPlaying}>
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
                  {isPlaying ? <PauseIcon /> : <PlayIcon />}
                </StyledMusic.MusicIcon>
              </StyledMusic.MusicTrack>
            </a>
          );
        })}
        <StyledMusic.MusicArrow onClick={this.openPlaylist} src={openList ? Up : Down} />
      </StyledMusic.MusicBlock>
    );
  }
}

const mapStateToProps = store => ({
  trackStore: store.dataMusicPlayer.track
});
const mapActionsToProps = dispatch => bindActionCreators({
  sendHomeTrack: playMusicOfTopTrack
}, dispatch);

export const TopTracksChartConnect = connect(mapStateToProps, mapActionsToProps)(TopTracksChart);

TopTracksChart.propTypes = {
  tracks: arrayOf(any).isRequired,
  artistName: string,
  single: bool.isRequired,
  sendHomeTrack: func.isRequired
};
TopTracksChart.defaultProps = {
  artistName: undefined
};
