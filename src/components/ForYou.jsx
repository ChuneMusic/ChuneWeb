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

  render() {
    const {
      contentFeed, artistTracks, followArtists,
      fetchDataForYou
    } = this.props;
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
        <StyledContent.ForYouPadding>
          <StyledContent.Content>
            <StyledContent.LeftBlockContent>
              {this.renderItems(contentFeed)}
              {this.renderWaypoint()}
              {fetchDataForYou ? (<Loading />) : (<Styled.WaypointBlock />)}
            </StyledContent.LeftBlockContent>
            <StyledContent.RightBlockContent>
              <ChuneSupplyConnect
                supplies={artistTracks}
                foryou
              />
            </StyledContent.RightBlockContent>
          </StyledContent.Content>
        </StyledContent.ForYouPadding>
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
  artistTracks: store.dataContent.artistTracksForYou,
  followArtists: store.dataContent.followArtists,
  fetchDataForYou: store.dataContent.fetchDataForYou
});

export const ForYouConnect = withRouter(connect(mapStateToProps, mapActionsToProps)(ForYou));

ForYou.propTypes = {
  contentFeed: arrayOf(any).isRequired,
  artistTracks: arrayOf(any).isRequired,
  loadMoreItems: func.isRequired,
  followArtists: bool.isRequired,
  fetchDataForYou: bool.isRequired,
  sendTweet: func.isRequired
};
