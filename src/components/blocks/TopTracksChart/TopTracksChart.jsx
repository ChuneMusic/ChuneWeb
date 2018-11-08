import React from 'react';
import { connect } from 'react-redux';
import {
  any, arrayOf, string,
  bool
} from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';

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
    const {
      tracks, chunesupply, artistName,
      token, ready
    } = this.props;
    const { openList } = this.state;
    let spinner = null;
    if (token && !ready) {
      spinner = (
        <div className="blockCircularPropgress">
          <CircularProgress className="circularProgress" />
        </div>
      );
    }
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
        {spinner}
        <StyledMusic.MusicTitle>
          {chunesupply === 'homeTopTracks' ? 'Top Tracks' : 'Top Tracks Chart'}
        </StyledMusic.MusicTitle>
        {tracksSpotify}
        <StyledMusic.MusicArrow onClick={this.openPlaylist} src={openList ? Up : Down} />
      </StyledMusic.MusicBlock>
    );
  }
}

const mapStateToProps = store => ({
  token: store.dataSpotify.token,
  ready: store.dataSpotify.ready
});

export const TopTracksChartConnect = connect(mapStateToProps, null)(TopTracksChart);

TopTracksChart.propTypes = {
  tracks: arrayOf(any).isRequired,
  chunesupply: string.isRequired,
  artistName: string,
  token: string.isRequired,
  ready: bool.isRequired
};

TopTracksChart.defaultProps = {
  artistName: undefined
};
