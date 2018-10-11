import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Waypoint from 'react-waypoint';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import {
  objectOf, any, func,
  arrayOf, bool
} from 'prop-types';
import { Tweet } from 'react-twitter-widgets';

import { followArtist, unfollowArtist } from '../../store/artists/actions';
import { Loading } from '../shared/Loading';
import { NoMediaConnect } from '../shared/NoMedia';
import { VideoCardConnect } from '../Videos/Video';
import { ArticleCardConnect } from '../News/Article';
import { EmptyListConnect } from '../shared/EmptyList';
import * as Styled from '../styled-components/home';
import * as StyledContent from '../styled-components/content';
import * as StyledArticle from '../styled-components/article';
import * as StyledArtist from '../styled-components/artistSingle';
import { EventCardConnect } from '../Events/EventCard';
import { followFromArtistPage, clickTwitterPost } from '../../store/learningMachine/actions';
import { TopTracksChartConnect } from '../blocks/TopTracksChart/TopTracksChart';

const styles = () => ({
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
  }
});

class Artist extends React.Component {
  state = {
    position: 0
  }

  componentWillMount() {
    const htmlBlock = document.getElementsByTagName('html');
    htmlBlock[0].style.overflow = 'hidden';
  }

  follow = () => {
    const { artist, followToArtist, sendDataArtist } = this.props;
    followToArtist(artist.name);
    sendDataArtist(artist.id);
  }

  unfollow = () => {
    const { artist, unfollowToArtist } = this.props;
    unfollowToArtist(artist.name);
  }

  renderWaypoint = () => <Waypoint onEnter={this.loadMoreItems} threshold={2.0} />

  sendIdTweet = (id) => {
    const { sendTweet } = this.props;
    sendTweet(id);
  }

  scrollDiv = () => {
    if (window.innerHeight === 970) {
      const block = document.getElementById('blockDiv');
      const right = document.getElementById('right');
      if (block.scrollTop >= right.offsetHeight - 730) {
        const pxTop = block.scrollTop - right.offsetHeight + 74 + 650;
        this.setState({ position: pxTop });
      } else {
        this.setState({ position: 0 });
      }
    }
  }

  render() {
    const {
      classes, content, artists,
      artist, topTracksArtist, db
    } = this.props;
    const { position } = this.state;
    if (db) {
      return (
        <EmptyListConnect
          messageOne="Sorry, no such artist in our database."
          messageTwo="Try using the search bar to follow another artist. Or go to artists page to follow artists related to your favorite ones."
        />
      );
    }
    if (artist.name === undefined) return <Loading />;
    let followButton = false;
    artists.forEach((e) => {
      if (e.name === artist.name) followButton = true;
    });
    let contentArtist = null;
    if (content.length > 0) {
      contentArtist = content.map((item, index) => {
        const keyIndex = index + 5;
        switch (item.type) {
          case 'video':
            return (
              <VideoCardConnect
                video={item}
                autoplay={false}
                key={`${item.id}-video-${keyIndex}`}
              />);
          case 'tweet': {
            const str = item.embed_url.split('/');
            return (
              <StyledArticle.ArticleTweet key={`${item.id}-tweet-${keyIndex}`} onClick={() => this.sendIdTweet(item.id)}>
                <Tweet
                  tweetId={str[str.length - 1]}
                />
              </StyledArticle.ArticleTweet>
            );
          }
          case 'article':
            return (
              <ArticleCardConnect
                article={item}
                key={`${item.id}-article-${keyIndex}`}
              />);
          default:
            return null;
        }
      });
    } else {
      contentArtist = <NoMediaConnect />;
    }
    return (
      <StyledContent.Wrapper onScroll={this.scrollDiv} id="blockDiv">
        <StyledArtist.WrapperArtist>
          <StyledArtist.ArtistHeader>
            <StyledContent.LeftBlockContent>
              <StyledArtist.ArtistImage image={artist.image_url} />
              <StyledArtist.ArtistName>{artist.name}</StyledArtist.ArtistName>
            </StyledContent.LeftBlockContent>
            <StyledArtist.RightBlockButton>
              {
                followButton
                  ? <Button className={classes.unfollowButton} onClick={this.unfollow}>UNFOLLOW</Button>
                  : <Button className={classes.followButton} onClick={this.follow}>FOLLOW</Button>
              }
            </StyledArtist.RightBlockButton>
          </StyledArtist.ArtistHeader>
          <StyledContent.Content>
            <StyledContent.LeftBlockContent>
              {contentArtist}
              {this.renderWaypoint()}
              <Styled.WaypointBlock />
            </StyledContent.LeftBlockContent>
            <StyledContent.RightBlockArtistContent id="right" pos={position}>
              <EventCardConnect artist={artist} />
              <TopTracksChartConnect
                tracks={topTracksArtist}
                artistName={artist.name}
                single
              />
            </StyledContent.RightBlockArtistContent>
          </StyledContent.Content>
        </StyledArtist.WrapperArtist>
      </StyledContent.Wrapper>
    );
  }
}

const mapStateToProps = store => ({
  artist: store.dataArtists.artist,
  content: store.dataArtists.content,
  artists: store.dataArtists.artists,
  topTracksArtist: store.dataArtists.tracks,
  db: store.dataSearch.db
});

const mapActionsToProps = dispatch => bindActionCreators({
  followToArtist: followArtist,
  unfollowToArtist: unfollowArtist,
  sendDataArtist: followFromArtistPage,
  sendTweet: clickTwitterPost
}, dispatch);

export const ArtistConnect = withStyles(styles)(withRouter(connect(mapStateToProps, mapActionsToProps)(Artist)));

Artist.propTypes = {
  artist: objectOf(any).isRequired,
  artists: arrayOf(any).isRequired,
  topTracksArtist: arrayOf(any).isRequired,
  content: arrayOf(any).isRequired,
  classes: objectOf(any).isRequired,
  followToArtist: func.isRequired,
  unfollowToArtist: func.isRequired,
  db: bool.isRequired,
  sendDataArtist: func.isRequired,
  sendTweet: func.isRequired
};
