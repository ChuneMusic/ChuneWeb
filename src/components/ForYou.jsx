import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Waypoint from 'react-waypoint';
import { withRouter } from 'react-router-dom';
import { Tweet } from 'react-twitter-widgets';
import {
  any, arrayOf, func,
  bool
} from 'prop-types';

import { ArticleCardConnect } from './News/Article';
import { VideoCardConnect } from './Videos/Video';
import { EmptyListConnect } from './shared/EmptyList';
import { fethcMoreContentForYouPageUser } from '../store/content/actions';
import { ChuneSupplyConnect } from './blocks';
import { Loading } from './shared/Loading';
import * as Styled from './styled-components/home';
import * as StyledContent from './styled-components/content';
import * as StyledArticle from './styled-components/article';
import { clickTwitterPost } from '../store/learningMachine/actions';

class ForYou extends React.Component {
  state = {
    position: 0
  }

  componentWillMount() {
    const htmlBlock = document.getElementsByTagName('html');
    htmlBlock[0].style.overflow = 'hidden';
  }

  renderWaypoint = () => <Waypoint onEnter={this.loadMore} threshold={2.0} />

  sendIdTweet = (id) => {
    const { sendTweet } = this.props;
    sendTweet(id);
  }

  renderItems = contentFeed => contentFeed.map((item, index) => {
    const keyIndex = index + 1;
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
  })

  loadMore = () => {
    const { loadMoreItems } = this.props;
    loadMoreItems();
  }

  scrollDiv = () => {
    const block = document.getElementById('blockDiv');
    const right = document.getElementById('right');
    if (block.offsetHeight > right.offsetHeight) {
      this.setState({ position: block.scrollTop });
    } else {
      const diff = block.scrollTop + block.offsetHeight - right.offsetHeight - 60;
      if (diff > 0) {
        this.setState({ position: diff });
      } else {
        this.setState({ position: 0 });
      }
    }
  }

  render() {
    const {
      contentFeed, artistTracks, followArtists,
      fetchDataForYou, modal
    } = this.props;
    const { position } = this.state;
    if (followArtists) {
      return (
        <EmptyListConnect
          messageOne="You didn't follow any artists yet."
          messageTwo="Search to find and follow artists."
        />
      );
    }
    if (contentFeed.length === 0) return <Loading />;
    if (contentFeed.length) {
      return (
        <StyledContent.Wrapper modal={modal} onScroll={this.scrollDiv} id="blockDiv">
          <StyledContent.ForYouPadding>
            <StyledContent.Content>
              <StyledContent.LeftBlockContent>
                {this.renderItems(contentFeed)}
                {this.renderWaypoint()}
                {fetchDataForYou ? (<Loading />) : (<Styled.WaypointBlock />)}
              </StyledContent.LeftBlockContent>
              <StyledContent.RightBlockContent id="right" pos={position}>
                <ChuneSupplyConnect
                  supplies={artistTracks}
                  chunesupply="forYouTopTracks"
                />
              </StyledContent.RightBlockContent>
            </StyledContent.Content>
          </StyledContent.ForYouPadding>
        </StyledContent.Wrapper>
      );
    }
    return (
      <EmptyListConnect
        messageOne="Sorry, no recent media about your artists."
        messageTwo="Try using the search bar to follow another artist. Or go to artists page to follow artists related to your favorite ones."
      />
    );
  }
}

const mapActionsToProps = dispatch => bindActionCreators({
  loadMoreItems: fethcMoreContentForYouPageUser,
  sendTweet: clickTwitterPost
}, dispatch);

const mapStateToProps = store => ({
  contentFeed: store.dataContent.contentFeedForYou,
  artists: store.dataArtists.artists,
  artistTracks: store.dataContent.topTracksForYou,
  followArtists: store.dataContent.followArtists,
  fetchDataForYou: store.dataContent.fetchDataForYou,
  modal: store.dataSpotify.modal
});

export const ForYouConnect = withRouter(connect(mapStateToProps, mapActionsToProps)(ForYou));

ForYou.propTypes = {
  contentFeed: arrayOf(any).isRequired,
  artistTracks: arrayOf(any).isRequired,
  loadMoreItems: func.isRequired,
  followArtists: bool.isRequired,
  fetchDataForYou: bool.isRequired,
  sendTweet: func.isRequired,
  modal: bool.isRequired
};
