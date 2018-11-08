import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {
  func, objectOf,
  any, string, bool, arrayOf
} from 'prop-types';

import './ChuneSupply.css';
import { playMusicOfChuneSupply, playMusicOfRecentReleases } from '../../../store/learningMachine/actions';
import { playTrack, pauseTrack } from '../../../store/spotify/actions';

class Chune extends React.Component {
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
      chunesupply, recentReleases, setChuneSupply,
      setPlayTrack, setPauseTrack, topTracksForYou,
      topChune
    } = this.props;
    const { isPlaying } = this.state;
    if (isPlaying) {
      setPauseTrack();
      this.setState({ isPlaying: !isPlaying });
    } else {
      this.setState({ isPlaying: !isPlaying });
      if (chunesupply === 'forYouTopTracks') {
        recentReleases(id);
        setPlayTrack(track, topTracksForYou);
      } else {
        setChuneSupply(id);
        setPlayTrack(track, topChune);
      }
    }
  }

  playTrackSpotify = (id) => {
    const { chunesupply, recentReleases, setChuneSupply } = this.props;
    if (chunesupply === 'forYouTopTracks') return recentReleases(id);
    return setChuneSupply(id);
  }

  render() {
    const { supply, token } = this.props;
    const { isPlaying } = this.state;
    let images = supply.image;
    if (~images.indexOf('.jpg')) images = `https://api-stage.chunesupply.com/static/imgs/full/${images}`;
    if (token === '') {
      return (
        <a
          href={`https://open.spotify.com/track/${supply.spotify_id}`}
          target="_blank"
          rel="noopener noreferrer"
          key={`track-${supply.id}`}
          onClick={() => this.playTrackSpotify(supply.id)}
        >
          <Card className="card" key={supply.spotify_id}>
            <CardMedia className="cover" image={images} title={supply.title} />
            <div className="details">
              <CardContent className="content">
                <Typography variant="headline" className={isPlaying ? 'headline isActive' : 'headline'}>
                  {supply.title}
                </Typography>
                <Typography className={isPlaying ? 'subheading isActive' : 'subheading'} variant="subheading" color="textSecondary">
                  {supply.artist_name || supply.artist }
                </Typography>
              </CardContent>
            </div>
          </Card>
        </a>
      );
    }
    return (
      <Card
        className="card"
        key={supply.spotify_id}
        onClick={() => this.eventClickMusic(supply.id, supply.spotify_id)}
      >
        <CardMedia className="cover" image={images} title={supply.title} />
        <div className="details">
          <CardContent className="content">
            <Typography variant="headline" className={isPlaying ? 'headline isActive' : 'headline'}>
              {supply.title}
            </Typography>
            <Typography className={isPlaying ? 'subheading isActive' : 'subheading'} variant="subheading" color="textSecondary">
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
  idTrack: store.dataSpotify.idTrack,
  topTracksForYou: store.dataContent.topTracksForYou,
  topChune: store.dataContent.topChune,
  token: store.dataSpotify.token
});

const mapActionsToProps = dispatch => bindActionCreators({
  setChuneSupply: playMusicOfChuneSupply,
  recentReleases: playMusicOfRecentReleases,
  setPlayTrack: playTrack,
  setPauseTrack: pauseTrack
}, dispatch);

export const ChuneConnect = connect(mapStateToProps, mapActionsToProps)(Chune);

Chune.propTypes = {
  chunesupply: string.isRequired,
  recentReleases: func.isRequired,
  setChuneSupply: func.isRequired,
  setPlayTrack: func.isRequired,
  setPauseTrack: func.isRequired,
  idTrack: string.isRequired,
  supply: objectOf(any).isRequired,
  pausedTrack: bool.isRequired,
  topTracksForYou: arrayOf(any).isRequired,
  topChune: arrayOf(any).isRequired,
  token: string.isRequired
};
