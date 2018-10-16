import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { any, arrayOf, string } from 'prop-types';

import * as StyledMusic from '../../styled-components/music';
import Up from '../../../../assets/images/chevron-arrow-up.svg';
import Down from '../../../../assets/images/chevron-arrow-down.svg';
import { TracksConnect } from './track';

class TopTracksChart extends React.Component {
  state = {
    openList: false
  }

  openPlaylist = () => this.setState({ openList: !this.state.openList })

  render() {
    const { tracks, chunesupply, artistName } = this.props;
    const { openList } = this.state;
    const tracksSpotify = tracks.map((e, index) => {
      if (index > 9 && openList === false) return null;
      return (
        <TracksConnect
          track={e}
          key={e.id}
          index={index}
          chunesupply={chunesupply}
          artistName={artistName}
        />
      );
    });
    return (
      <StyledMusic.MusicBlock>
        <StyledMusic.MusicTitle>
          {chunesupply === 'homeTopTracks' ? 'Top Tracks' : 'Top Tracks Chart'}
        </StyledMusic.MusicTitle>
        {tracksSpotify}
        <StyledMusic.MusicArrow onClick={this.openPlaylist} src={openList ? Up : Down} />
      </StyledMusic.MusicBlock>
    );
  }
}

const mapActionsToProps = dispatch => bindActionCreators({
}, dispatch);

export const TopTracksChartConnect = connect(null, mapActionsToProps)(TopTracksChart);

TopTracksChart.propTypes = {
  tracks: arrayOf(any).isRequired,
  chunesupply: string.isRequired,
  artistName: string,
};

TopTracksChart.defaultProps = {
  artistName: undefined
};
