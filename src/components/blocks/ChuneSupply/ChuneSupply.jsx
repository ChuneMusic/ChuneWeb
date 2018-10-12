import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { map } from 'lodash';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {
  arrayOf, any, bool,
  func
} from 'prop-types';

import * as StyledMusic from '../../styled-components/music';
import Up from '../../../../assets/images/chevron-arrow-up.svg';
import Down from '../../../../assets/images/chevron-arrow-down.svg';
import './ChuneSupply.css';
import { playMusicOfChuneSupply, playMusicOfRecentReleases } from '../../../store/learningMachine/actions';

class ChuneSupply extends React.PureComponent {
  state = {
    openList: false
  }

  openPlaylist = () => this.setState({ openList: !this.state.openList })

  eventClickMusic = (id) => {
    const { foryou, recentReleases, chuneSupply } = this.props;
    if (foryou) recentReleases(id);
    else chuneSupply(id);
  }

  render() {
    const { supplies, foryou } = this.props;
    const { openList } = this.state;
    let textHeader = (
      <div>
        <h4 className="title">CHUNE SUPPLY</h4>
        <p className="subtitle">Updated every Wednesday, CHUNE SUPPLY is our weekly playlist giving you the best new music across all genres</p>
      </div>
    );
    if (foryou) textHeader = <h4 className="title padding_recent">Top Tracks</h4>;
    return (
      <div className="chuneSupplyWrapper">
        <Paper className="chuneSupplyPaper">
          {textHeader}
          <div className="tracksList">
            {map(supplies, (supply, key) => {
              let images = supply.image;
              if (~images.indexOf('.jpg')) images = 'https://via.placeholder.com/100x150';
              if (key > 9 && openList === false) return null;
              return (
                <a
                  href={`https://open.spotify.com/track/${supply.spotify_id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={supply.id}
                  onClick={() => this.eventClickMusic(supply.id)}
                >
                  <Card
                    className="card"
                    key={supply.spotify_id}
                  >
                    <CardMedia
                      className="cover"
                      image={images}
                      title={supply.title}
                    />

                    <div className="details">
                      <CardContent className="content">
                        <Typography
                          variant="headline"
                          className="headline"
                        >
                          {supply.title}
                        </Typography>
                        <Typography
                          className="subheading"
                          variant="subheading"
                          color="textSecondary"
                        >
                          {supply.artist_name || supply.artist }
                        </Typography>
                      </CardContent>
                    </div>
                  </Card>
                </a>
              );
            })}
            <StyledMusic.MusicArrow onClick={this.openPlaylist} src={openList ? Up : Down} />
          </div>
        </Paper>
      </div>
    );
  }
}

const mapActionsToProps = dispatch => bindActionCreators({
  chuneSupply: playMusicOfChuneSupply,
  recentReleases: playMusicOfRecentReleases
}, dispatch);

export const ChuneSupplyConnect = connect(null, mapActionsToProps)(ChuneSupply);

ChuneSupply.propTypes = {
  foryou: bool.isRequired,
  supplies: arrayOf(any).isRequired,
  recentReleases: func.isRequired,
  chuneSupply: func.isRequired
};
