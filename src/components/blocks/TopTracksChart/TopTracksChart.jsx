import React from 'react';
import { connect } from 'react-redux';
import { map } from 'lodash';
import {
  string, any, arrayOf,
  bool
} from 'prop-types';

import { PlayIcon, PauseIcon } from '../../shared/SocialIcons';
import * as StyledMusic from '../../styled-components/music';
import Up from '../../../../assets/images/chevron-arrow-up.svg';
import Down from '../../../../assets/images/chevron-arrow-down.svg';

class TopTracksChart extends React.Component {
  state = {
    openList: false
  }

  openPlaylist = () => this.setState({ openList: !this.state.openList })

  render() {
    const { tracks, artistName, single } = this.props;
    const { openList } = this.state;
    return (
      <StyledMusic.MusicBlock>
        <StyledMusic.MusicTitle>
          {single ? 'Recent Releases' : 'TOP TRACKS CHART'}
        </StyledMusic.MusicTitle>
        {map(tracks, (track, key) => {
          const isPlaying = false;
          if (key > 9 && openList === false) return null;
          return (
            <a href={`https://open.spotify.com/track/${track.spotify_id}`} target="_blank" rel="noopener noreferrer" key={key}>
              <StyledMusic.MusicTrack isPlaying={isPlaying}>
                <StyledMusic.MusicNumber>{key + 1}</StyledMusic.MusicNumber>
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

export const TopTracksChartConnect = connect(mapStateToProps)(TopTracksChart);

TopTracksChart.propTypes = {
  tracks: arrayOf(any).isRequired,
  artistName: string,
  single: bool.isRequired
};
TopTracksChart.defaultProps = {
  artistName: undefined
};
