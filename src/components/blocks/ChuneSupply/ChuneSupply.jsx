import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Paper from '@material-ui/core/Paper';
import { arrayOf, any, string } from 'prop-types';

import * as StyledMusic from '../../styled-components/music';
import Up from '../../../../assets/images/chevron-arrow-up.svg';
import Down from '../../../../assets/images/chevron-arrow-down.svg';
import { ChuneConnect } from './chune';
import './ChuneSupply.css';

class ChuneSupply extends React.PureComponent {
  state = {
    openList: false
  }

  openPlaylist = () => this.setState({ openList: !this.state.openList })

  render() {
    const { supplies, chunesupply } = this.props;
    const { openList } = this.state;
    const chunes = supplies.map((e, index) => {
      if (index > 9 && openList === false) return null;
      return <ChuneConnect supply={e} key={e.id} chunesupply={chunesupply} />;
    });
    let textHeader = (
      <div>
        <h4 className="title">CHUNE SUPPLY</h4>
        <p className="subtitle">Updated every Wednesday, CHUNE SUPPLY is our weekly playlist giving you the best new music across all genres</p>
      </div>
    );
    if (chunesupply === 'forYouTopTracks') textHeader = <h4 className="title padding_recent">Top Tracks</h4>;
    return (
      <div className="chuneSupplyWrapper">
        <Paper className="chuneSupplyPaper">
          {textHeader}
          <div className="tracksList">
            {chunes}
            <StyledMusic.MusicArrow onClick={this.openPlaylist} src={openList ? Up : Down} />
          </div>
        </Paper>
      </div>
    );
  }
}

const mapActionsToProps = dispatch => bindActionCreators({
}, dispatch);

export const ChuneSupplyConnect = connect(null, mapActionsToProps)(ChuneSupply);

ChuneSupply.propTypes = {
  chunesupply: string.isRequired,
  supplies: arrayOf(any).isRequired
};
