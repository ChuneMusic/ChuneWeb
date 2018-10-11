import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  func, any, objectOf,
  arrayOf, bool, string
} from 'prop-types';
import { map } from 'lodash';
import { Tweet } from 'react-twitter-widgets';
import Waypoint from 'react-waypoint';

import {
  ChuneSupplyConnect, BasicSoundPlayer, BasicArticleCardConnect,
  TopTracksChartConnect
} from './blocks';
import { VideoCardConnect } from './Videos/Video';
import { ArticleCardConnect } from './News/Article';
import { getAccessTokenSpotify } from '../store/spotify/actions';
import { playMusicPlayer, pauseMusicPlayer } from '../store/musicPlayer/actions';
import { fethcMoreContentHomePageUser } from '../store/content/actions';
import { Loading } from './shared/Loading';
import * as Styled from './styled-components/home';
import * as StyledContent from './styled-components/content';
import * as StyledArticle from './styled-components/article';
import { clickTwitterPost } from '../store/learningMachine/actions';

import './Home.css';


class Home extends React.Component {
  state = {
    position: 0
  }

  componentWillMount() {
    const htmlBlock = document.getElementsByTagName('html');
    htmlBlock[0].style.overflow = 'hidden';
  }

  renderWaypoint = () => <Waypoint onEnter={this.loadMore} threshold={2.0} />

  loadMore = () => {
    const { loadMoreItems } = this.props;
    loadMoreItems();
  }

  sendIdTweet = (id) => {
    const { sendTweet } = this.props;
    sendTweet(id);
  }


  scrollDiv = () => {
    if (window.innerHeight === 970) {
      const block = document.getElementById('blockDiv');
      const right = document.getElementById('right');
      if (block.scrollTop >= right.offsetHeight - 74) {
        const pxTop = block.scrollTop - right.offsetHeight + 74;
        this.setState({ position: pxTop });
      } else {
        this.setState({ position: 0 });
      }
    }
  }

  render() {
    const {
      location, history,
      topTracks, contentFeed,
      getTokenSpotify, token,
      topChune, featured, fetchDataHome
    } = this.props;
    const { position } = this.state;
    if (location.search !== '' && token === '') {
      getTokenSpotify(location.search);
      location.search = '';
      history.push('/home');
    }
    if (topChune.length === 0) return <Loading />;
    return (
      <StyledContent.Wrapper onScroll={this.scrollDiv} id="blockDiv">
        <Styled.WrapperHomePage>
          <Styled.FeaturedBlock>
            <BasicArticleCardConnect featured={featured} />
          </Styled.FeaturedBlock>
          <StyledContent.Content>
            <StyledContent.LeftBlockContent>
              {map(contentFeed, (item, key) => {
                switch (item.type) {
                  case 'video':
                    return (
                      <VideoCardConnect
                        video={item}
                        key={`${item.id}-video-${key}`}
                      />);
                  case 'tweet': {
                    const str = item.embed_url.split('/');
                    return (
                      <StyledArticle.ArticleTweet key={`${item.id}-tweet-${key}`} onClick={() => this.sendIdTweet(item.id)}>
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
                        key={`${item.id}-article-${key}`}
                      />);
                  default:
                    return null;
                }
              })}
              {this.renderWaypoint()}
              {fetchDataHome ? (<Loading />) : (<Styled.WaypointBlock />)}
            </StyledContent.LeftBlockContent>
            <StyledContent.RightBlockContent id="right" pos={position}>
              <TopTracksChartConnect
                tracks={topTracks}
                single={false}
              />
              <BasicSoundPlayer />
              <ChuneSupplyConnect
                supplies={topChune}
                foryou={false}
              />
            </StyledContent.RightBlockContent>
          </StyledContent.Content>
        </Styled.WrapperHomePage>
      </StyledContent.Wrapper>
    );
  }
}

const mapStateToProps = store => ({
  token: store.dataSpotify.token,
  profile: store.dataSpotify.profile,
  featured: store.dataContent.featured,
  contentFeed: store.dataContent.contentFeedHome,
  topTracks: store.dataContent.topTracks,
  topChune: store.dataContent.topChune,
  fetchDataHome: store.dataContent.fetchDataHome
});

const mapActionsToProps = dispatch => bindActionCreators({
  getTokenSpotify: getAccessTokenSpotify,
  playMusic: playMusicPlayer,
  pauseMusic: pauseMusicPlayer,
  loadMoreItems: fethcMoreContentHomePageUser,
  sendTweet: clickTwitterPost
}, dispatch);

export const HomeConnect = connect(mapStateToProps, mapActionsToProps)(Home);

Home.propTypes = {
  getTokenSpotify: func.isRequired,
  token: string.isRequired,
  location: objectOf(any).isRequired,
  history: objectOf(any).isRequired,
  contentFeed: arrayOf(any).isRequired,
  topTracks: arrayOf(any).isRequired,
  topChune: arrayOf(any).isRequired,
  loadMoreItems: func.isRequired,
  featured: arrayOf(any).isRequired,
  fetchDataHome: bool.isRequired,
  sendTweet: func.isRequired
};
