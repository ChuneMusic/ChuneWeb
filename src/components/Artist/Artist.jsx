import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Waypoint from 'react-waypoint';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import {
  objectOf, any, func,
  arrayOf
} from 'prop-types';
import { Tweet } from 'react-twitter-widgets';

import { TopTracksChartConnect } from '../blocks';
import { followArtist, unfollowArtist } from '../../store/artists/actions';
import { Loading } from '../shared/Loading';
import { NoMediaConnect } from '../shared/NoMedia';
import { VideoCardConnect } from '../Videos/Video';
import { ArticleCardConnect } from '../News/Article';

const styles = () => ({
  root: {
    width: 1080,
    margin: '39px auto',
    '@media (max-width: 1023px)': {
      width: '100vw',
      margin: '24px auto',
    }
  },
  subMenuContainer: {
    width: 716,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: '10px auto',
    height: 38,
    '@media (max-width: 1023px)': {
      width: 344,
      margin: '18px auto',
    }
  },
  settingsIconButton: {
    width: 38,
    height: 38,
    fontSize: 24,
    backgroundColor: 'transparent',
    color: 'black',
    '&:hover': {
      backgroundColor: 'transparent',
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
    },
    '&:focus': {
      backgroundColor: 'transparent',
    },
    borderRadius: '50%',
    '@media (max-width: 1023px)': {
      width: 24,
      height: 24,
      fontSize: 24,
      paddingTop: 6,
    }
  },
  menuSelected: {
    backgroundImage: 'linear-gradient(262deg, #9c05cd, #552e89)',
    color: 'white',
  },
  menuActionsContainer: {
    display: 'flex',
    width: 223,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 27,
    '@media (max-width: 1023px)': {
      width: 183,
    }
  },
  formControl: {
    width: 128,
  },
  sInput: {
    paddingTop: 0,
    height: 36,
    '&:focus': {
      backgroundColor: '#eceff1',
    }
  },
  mediaSelect: {
    height: 36,
  },
  recommendedArtistHeading: {
    width: 200,
    height: 50,
    fontFamily: 'Roboto',
    fontSize: 24,
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '36px',
    letterSpacing: 0.3,
    paddingLeft: 5,
    color: '#000000',
    display: 'flex',
    alignItems: 'center',
    '@media (max-width: 1023px)': {
      fontSize: 18,
      width: 244,
    }
  },
  followButton: {
    width: 104,
    height: 36,
    border: 'solid 1px rgba(0, 0, 0, 0.12)',
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: 500,
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 1.14,
    letterSpacing: 1.3,
    textAlign: 'center',
    color: '#ffffff',
    backgroundColor: '#552e89',
    '&:hover': {
      backgroundColor: 'rgba(85, 46, 137, 0.75)',
    },
    '&:focus': {
      backgroundColor: '#552e89',
    },
  },
  unfollowButton: {
    width: 104,
    height: 36,
    backgroundColor: 'rgba(98, 2, 238, 0)',
    border: 'solid 1px rgba(0, 0, 0, 0.12)',
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: 500,
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 1.14,
    letterSpacing: 1.3,
    textAlign: 'center',
    color: '#6200ee',
    '&:hover': {
      backgroundColor: 'rgba(98, 2, 238, 0)',
    },
    '&:focus': {
      backgroundColor: 'rgba(98, 2, 238, 0)',

    },
  },
  cardlist: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    '@media (max-width: 1023px)': {
      width: '100vw',
    }
  },
  gridList: {
    width: 716,
    borderRadius: 4,
    '@media (max-width: 1023px)': {
      width: 344,
      margin: '0px auto',
    }
  },
  gridRow: {
    listStyle: 'none',
    height: 'auto',
    marginBottom: 24,
    width: '100%'
  },
  container: {
    backgroundColor: '#fafafa',
    width: '100%',
    paddingTop: 24,
  },
  imagesArtist: {
    width: 50,
    height: 50,
    borderRadius: 50,
    margin: '0 10px 0 0'
  }
});

class Artist extends React.Component {
  follow = () => {
    const { artist, followToArtist } = this.props;
    followToArtist(artist.name);
  }

  unfollow = () => {
    const { artist, unfollowToArtist } = this.props;
    unfollowToArtist(artist.name);
  }

  renderWaypoint = () => <Waypoint onEnter={this.loadMoreItems} threshold={2.0} />

  renderItems = (content) => {
    const { classes } = this.props;
    return (
      <div className={classes.cardlists}>
        <ul className={classes.gridList}>
          {
            content.map((item) => {
              switch (item.type) {
                case 'video':
                  return (
                    <li className={classes.gridRow} key={item.id}>
                      <VideoCardConnect video={item} autoplay={false} />
                    </li>);
                case 'tweet': {
                  const str = item.embed_url.split('/');
                  return (
                    <li className={classes.gridRow} key={item.id}>
                      <div className="tweet">
                        <Tweet tweetId={str[str.length - 1]} options={{ width: 500 }} />
                      </div>
                    </li>);
                }
                case 'article':
                  return (
                    <li className={classes.gridRow} key={item.id}>
                      <ArticleCardConnect article={item} />
                    </li>);
                default:
                  return null;
              }
            })
          }
          { this.renderWaypoint() }
        </ul>
      </div>
    );
  }

  render() {
    const {
      classes, content, artists,
      artist, topTracksArtist
    } = this.props;
    if (artist.name === undefined) return <Loading />;
    let followButton = false;
    artists.forEach((e) => {
      if (e.name === artist.name) followButton = true;
    });
    if (artist.name === undefined) {
      return (
        <div>
          <Loading />
        </div>
      );
    }
    let contentArtist = null;
    if (content.length > 0) {
      contentArtist = this.renderItems(content);
    } else {
      contentArtist = <NoMediaConnect />;
    }
    return (
      <div>
        <div className={classes.root}>
          <div className={classes.subMenuContainer}>
            <div className={classes.recommendedArtistHeading}>
              <img src={artist.image_url} alt={artist.name} title={artist.name} className={classes.imagesArtist} />
              <p>{artist.name}</p>
            </div>
            <div className={classes.menuActionsContainer}>
              {
                followButton
                  ? <Button className={classes.unfollowButton} onClick={this.unfollow}>UNFOLLOW</Button>
                  : <Button className={classes.followButton} onClick={this.follow}>FOLLOW</Button>
              }
            </div>
          </div>
          <div className="foryou">
            <Grid container spacing={24} className="foryou-container">
              <Grid item xs={12} md={8} lg={8}>
                {contentArtist}
              </Grid>
              <Grid item xs={12} md={4} lg={4} className="rightGridListWrapper">
                <div className="chuneSupply">
                  <TopTracksChartConnect
                    tracks={topTracksArtist}
                    playing={0}
                    artistName={artist.name}
                  />
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  artist: store.dataArtists.artist,
  content: store.dataArtists.content,
  artists: store.dataArtists.artists,
  topTracksArtist: store.dataArtists.tracks
});

const mapActionsToProps = dispatch => bindActionCreators({
  followToArtist: followArtist,
  unfollowToArtist: unfollowArtist
}, dispatch);

export const ArtistConnect = withStyles(styles)(withRouter(connect(mapStateToProps, mapActionsToProps)(Artist)));

Artist.propTypes = {
  artist: objectOf(any).isRequired,
  artists: arrayOf(any).isRequired,
  topTracksArtist: arrayOf(any).isRequired,
  content: arrayOf(any).isRequired,
  classes: objectOf(any).isRequired,
  followToArtist: func.isRequired,
  unfollowToArtist: func.isRequired
};
