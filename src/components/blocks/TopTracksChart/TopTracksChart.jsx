import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  any, arrayOf, bool,
  string
} from 'prop-types';

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
    const { tracks, single, artistName } = this.props;
    const { openList } = this.state;
    const tracksSpotify = tracks.map((e, index) => {
      if (index > 9 && openList === false) return null;
      return <TracksConnect track={e} key={e.id} index={index} single={single} artistName={artistName} />;
    });
    return (
      <StyledMusic.MusicBlock>
        <StyledMusic.MusicTitle>
          {single ? 'Recent Releases' : 'TOP TRACKS CHART'}
        </StyledMusic.MusicTitle>
        {tracksSpotify}
        <StyledMusic.MusicArrow onClick={this.openPlaylist} src={openList ? Up : Down} />
      </StyledMusic.MusicBlock>
    );
  }
}

const mapStateToProps = store => ({
  trackStore: store.dataMusicPlayer.track
});
const mapActionsToProps = dispatch => bindActionCreators({
}, dispatch);

export const TopTracksChartConnect = connect(mapStateToProps, mapActionsToProps)(TopTracksChart);

TopTracksChart.propTypes = {
  tracks: arrayOf(any).isRequired,
  single: bool.isRequired,
  artistName: string,
};

TopTracksChart.defaultProps = {
  artistName: undefined
};
