import React from 'react';
import { connect } from 'react-redux';
import { map } from 'lodash';
import { string, any, arrayOf } from 'prop-types';

import { PlayIcon, PauseIcon } from '../../shared/SocialIcons';
import * as StyledMusic from '../../styled-components/music';

const TopTracksChart = ({ tracks, artistName }) => (
  <StyledMusic.MusicBlock>
    <StyledMusic.MusicTitle>
      TOP TRACKS CHART
    </StyledMusic.MusicTitle>
    {map(tracks, (track, key) => {
      const isPlaying = false;
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
  </StyledMusic.MusicBlock>
);

const mapStateToProps = store => ({
  trackStore: store.dataMusicPlayer.track
});

export const TopTracksChartConnect = connect(mapStateToProps)(TopTracksChart);

TopTracksChart.propTypes = {
  tracks: arrayOf(any).isRequired,
  artistName: string
};
TopTracksChart.defaultProps = {
  artistName: undefined
};
