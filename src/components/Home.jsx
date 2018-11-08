import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  func, any, objectOf,
  arrayOf, bool
} from 'prop-types';
import { map } from 'lodash';
import { Tweet } from 'react-twitter-widgets';
import Waypoint from 'react-waypoint';
import Drift from 'react-driftjs';

import {
  ChuneSupplyConnect, BasicSoundPlayerConnect, BasicArticleCardConnect,
  TopTracksChartConnect
} from './blocks';
import { VideoCardConnect } from './Videos/Video';
import { ArticleCardConnect } from './News/Article';
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
    const block = document.getElementById('blockDiv');
    const right = document.getElementById('right');
    const diff = block.offsetHeight - 42 - right.offsetHeight;
    this.setState({ position: diff });
  }

  render() {
    const {
      history, topTracks, contentFeed,
      topChune, featured, fetchDataHome,
      modal, firstListArtists, skip
    } = this.props;
    const { position } = this.state;
    if (firstListArtists.length > 0 && !skip) history.push('/artists');
    if (contentFeed.length === 0) return <Loading />;
    return (
      <StyledContent.Wrapper modal={modal} onScroll={this.scrollDiv} id="blockDiv">
        <Drift appId="4nu2fz5thdf2" />
        <Styled.WrapperHomePage>
          <Styled.FeaturedBlock id="featured">
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
                chunesupply="homeTopTracks"
              />
              <BasicSoundPlayerConnect />
              <ChuneSupplyConnect
                supplies={topChune}
                chunesupply="homeChuneSupply"
              />
            </StyledContent.RightBlockContent>
          </StyledContent.Content>
        </Styled.WrapperHomePage>
      </StyledContent.Wrapper>
    );
  }
}

const mapStateToProps = store => ({
  featured: store.dataContent.featured,
  contentFeed: store.dataContent.contentFeedHome,
  topTracks: store.dataContent.topTracks,
  topChune: store.dataContent.topChune,
  fetchDataHome: store.dataContent.fetchDataHome,
  modal: store.dataSpotify.modal,
  firstListArtists: store.dataArtists.firstListArtists,
  skip: store.dataArtists.skip
});

const mapActionsToProps = dispatch => bindActionCreators({
  loadMoreItems: fethcMoreContentHomePageUser,
  sendTweet: clickTwitterPost
}, dispatch);

export const HomeConnect = connect(mapStateToProps, mapActionsToProps)(Home);

Home.propTypes = {
  history: objectOf(any).isRequired,
  contentFeed: arrayOf(any).isRequired,
  topTracks: arrayOf(any).isRequired,
  topChune: arrayOf(any).isRequired,
  loadMoreItems: func.isRequired,
  featured: arrayOf(any).isRequired,
  fetchDataHome: bool.isRequired,
  sendTweet: func.isRequired,
  modal: bool.isRequired,
  firstListArtists: arrayOf(any).isRequired,
  skip: bool.isRequired
};
