import React from 'react';
import { objectOf, any, func } from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import { followArtist } from '../../store/artists/actions';
import { followFromRecommendBlock, moreInfoAboutArtist } from '../../store/learningMachine/actions';

const styles = () => ({
  root: {
    width: 345,
    height: 258,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    borderRadius: 6,
    '@media(max-width: 1080px) and (min-width: 960px)': {
      height: '250px',
      width: '310px',
    },
    '@media(max-width: 959px) and (min-width: 320px)': {
      height: '250px',
      width: '250px',
    }
  },
  artistName: {
    paddingLeft: 16,
    margin: 0,
    width: 303,
    height: 70,
    fontFamily: 'Roboto',
    fontSize: 30,
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 0.2,
    color: '#ffffff',
    '@media (max-width: 1029px)': {
      width: 249,
    }
  },
  genre: {
    paddingLeft: 16,
    margin: '0px 0px 5px 0px',
    width: 303,
    height: 20,
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 1.43,
    letterSpacing: 0.3,
    color: 'rgba(255, 255, 255, 0.6)',
    textTransform: 'capitalize',
    '@media (max-width: 1029px)': {
      width: 249,
    }
  },
  actionsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingTop: 10,
    marginBottom: 8,
    '@media (max-width: 1029px)': {
      width: 249,
    }
  },
  actionButton: {
    height: 16,
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: 500,
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 1.14,
    letterSpacing: 1.3,
    textAlign: 'center',
    color: '#ffffff',
    '&:focus': {
      backgroundColor: 'transparent',
    }
  }
});

class RelatedArtistCard extends React.Component {
  follow = () => {
    const { artist, followTorecommend, sendDataRecommendArtist } = this.props;
    followTorecommend(artist.name);
    sendDataRecommendArtist(artist.id);
  }

  moreInfoAboutArtist = () => {
    const { sendMore, artist } = this.props;
    sendMore(artist.id);
  }

  render() {
    const { classes, artist } = this.props;
    const overrideBgStyle = {
      backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)), url(${artist.image_url})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    };
    let genre = 'None';
    if (artist.genres[0] !== undefined) genre = artist.genres[0].description;
    return (
      <Paper className={classes.root} style={overrideBgStyle}>
        <div className={classes.genre}>
          { genre }
        </div>
        <div>
          <h3 className={classes.artistName}>{artist.name}</h3>
        </div>
        <div className={classes.actionsContainer}>
          <Button component={Link} to={`/artist/${artist.name}`} className={classes.actionButton} onClick={this.moreInfoAboutArtist}>See More</Button>
          <Button className={classes.actionButton} onClick={this.follow}>Follow</Button>
        </div>
      </Paper>
    );
  }
}

const mapActionsToProps = dispatch => bindActionCreators({
  followTorecommend: followArtist,
  sendDataRecommendArtist: followFromRecommendBlock,
  sendMore: moreInfoAboutArtist
}, dispatch);

export const RelatedArtistCardConnect = withStyles(styles)(connect(null, mapActionsToProps)(RelatedArtistCard));

RelatedArtistCard.propTypes = {
  classes: objectOf(any).isRequired,
  artist: objectOf(any).isRequired,
  followTorecommend: func.isRequired,
  sendDataRecommendArtist: func.isRequired,
  sendMore: func.isRequired
};
