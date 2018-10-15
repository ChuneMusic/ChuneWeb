import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {
  bool, func, objectOf,
  any, string
} from 'prop-types';

import './ChuneSupply.css';
import { playMusicOfChuneSupply, playMusicOfRecentReleases } from '../../../store/learningMachine/actions';
import { playTrack, pauseTrack } from '../../../store/spotify/actions';

class Chune extends React.PureComponent {
  state = {
    isPlaying: false
  }

  componentWillMount() {
    const { supply, idTrack, pausedTrack } = this.props;
    if (idTrack === supply.spotify_id && pausedTrack === false) {
      this.setState({ isPlaying: true });
    } else {
      this.setState({ isPlaying: false });
    }
  }

  componentWillReceiveProps(nextProps) {
    const { supply } = this.props;
    if (nextProps.idTrack === supply.spotify_id && nextProps.pausedTrack === false) {
      this.setState({ isPlaying: true });
    } else {
      this.setState({ isPlaying: false });
    }
  }

  eventClickMusic = (id, track) => {
    const {
      foryou, recentReleases, chuneSupply,
      setPlayTrack, setPauseTrack
    } = this.props;
    const { isPlaying } = this.state;
    if (isPlaying) {
      setPauseTrack();
      this.setState({ isPlaying: !isPlaying });
    } else {
      setPlayTrack(track, true); // true - indicates that the playlist is playing chune supply, but not top tracks
      this.setState({ isPlaying: !isPlaying });
      if (foryou) recentReleases(id);
      else chuneSupply(id);
    }
  }

  render() {
    const { supply } = this.props;
    const { isPlaying } = this.state;
    let images = supply.image;
    if (~images.indexOf('.jpg')) images = `https://api-stage.chunesupply.com/static/imgs/full/${images}`;
    return (
      <Card
        className="card"
        key={supply.spotify_id}
        onClick={() => this.eventClickMusic(supply.id, supply.spotify_id)}
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
              className={isPlaying ? 'headline isActive' : 'headline'}
            >
              {supply.title}
            </Typography>
            <Typography
              className={isPlaying ? 'subheading isActive' : 'subheading'}
              variant="subheading"
              color="textSecondary"
            >
              {supply.artist_name || supply.artist }
            </Typography>
          </CardContent>
        </div>
      </Card>
    );
  }
}

const mapStateToProps = store => ({
  pausedTrack: store.dataSpotify.pausedTrack,
  idTrack: store.dataSpotify.idTrack
});

const mapActionsToProps = dispatch => bindActionCreators({
  chuneSupply: playMusicOfChuneSupply,
  recentReleases: playMusicOfRecentReleases,
  setPlayTrack: playTrack,
  setPauseTrack: pauseTrack
}, dispatch);

export const ChuneConnect = connect(mapStateToProps, mapActionsToProps)(Chune);

Chune.propTypes = {
  foryou: bool.isRequired,
  recentReleases: func.isRequired,
  chuneSupply: func.isRequired,
  setPlayTrack: func.isRequired,
  setPauseTrack: func.isRequired,
  idTrack: string.isRequired,
  supply: objectOf(any).isRequired,
  pausedTrack: bool.isRequired
};
