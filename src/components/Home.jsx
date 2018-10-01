import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  func, string, objectOf,
  any, arrayOf
} from 'prop-types';
import { map } from 'lodash';
import { Tweet } from 'react-twitter-widgets';
import SpotifyWebApi from 'spotify-web-api-js';
import Waypoint from 'react-waypoint';

import {
  TopTracksChartConnect, ChuneSupplyConnect, BasicSoundPlayer,
  BasicArticleCard
} from './blocks';
import { VideoCardConnect } from './Videos/Video';
import { ArticleCardConnect } from './News/Article';
import { playMusicPlayer, pauseMusicPlayer } from '../store/musicPlayer/actions';
import { getAccessTokenSpotify } from '../store/spotify/actions';
import { fethcMoreContentHomePageUser } from '../store/content/actions';
import { Loading } from './shared/Loading';
import * as Styled from './styled-components/home';
import * as StyledContent from './styled-components/content';

import './Home.css';

class Home extends React.Component {
  renderWaypoint = () => <Waypoint onEnter={this.loadMore} threshold={2.0} />

  loadMore = () => {
    const { loadMoreItems } = this.props;
    loadMoreItems();
  }

  playMusicSpotify = () => {
    const { token, deviceID } = this.props;
    const spotifyApi = new SpotifyWebApi();
    spotifyApi.setAccessToken(token);
    spotifyApi.getMyDevices().then(() => {
      const data = [deviceID];
      const play = { play: true };
      spotifyApi.transferMyPlayback(data, play).then(() => {
        const dataPlay = {
          device_id: deviceID,
          uris: ['spotify:track:4S8d14HvHb70ImctNgVzQQ', 'spotify:track:2xLMifQCjDGFmkHkpNLD9h']
        };
        spotifyApi.play(dataPlay);
      });
    });
  }

  render() {
    const {
      location, token, contentFeed,
      getTokenSpotify, history, topTracks,
      topChune, featured
    } = this.props;
    if (location.search !== '' && token === '') {
      getTokenSpotify(location.search);
      location.search = '';
      history.push('/home');
    }
    if (topChune.length === 0) return <Loading />;
    /* <button onClick={this.playMusicSpotify} type="button">Play</button> */
    return (
      <Styled.WrapperHomePage>
        <Styled.FeaturedBlock>
          <BasicArticleCard featured={featured} />
        </Styled.FeaturedBlock>
        <StyledContent.Content>
          <StyledContent.LeftBlockContent>
            {map(contentFeed, (item) => {
              switch (item.type) {
                case 'video':
                  return (
                    <VideoCardConnect
                      video={item}
                      autoplay={false}
                      key={`${item.id}-video`}
                      rootClassName="homePagePlayerWrapper"
                      videoControlerClass="homePagePlayer"
                    />);
                case 'tweet': {
                  const str = item.embed_url.split('/');
                  return (
                    <Tweet
                      tweetId={str[str.length - 1]}
                      options={{ width: 500 }}
                      key={`${item.id}-tweet`}
                    />
                  );
                }
                case 'article':
                  return (
                    <ArticleCardConnect
                      article={item}
                      key={`${item.id}-article`}
                      rootClassName="homePageOtherArticleWrapper"
                      rootCardClass="homePageOtherArticle"
                    />);
                default:
                  return null;
              }
            })}
            {this.renderWaypoint()}
          </StyledContent.LeftBlockContent>
          <StyledContent.RightBlockContent>
            <TopTracksChartConnect
              tracks={topTracks}
            />
            <BasicSoundPlayer />
            <ChuneSupplyConnect
              supplies={topChune}
              foryou={false}
            />
          </StyledContent.RightBlockContent>
        </StyledContent.Content>
      </Styled.WrapperHomePage>
    );
  }
}

const mapStateToProps = store => ({
  token: store.dataSpotify.token,
  profile: store.dataSpotify.profile,
  deviceID: store.dataSpotify.deviceID,
  featured: store.dataContent.featured,
  contentFeed: store.dataContent.contentFeedHome,
  topTracks: store.dataContent.topTracks,
  topChune: store.dataContent.topChune
});

const mapActionsToProps = dispatch => bindActionCreators({
  playMusic: playMusicPlayer,
  pauseMusic: pauseMusicPlayer,
  getTokenSpotify: getAccessTokenSpotify,
  loadMoreItems: fethcMoreContentHomePageUser
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
  featured: arrayOf(any).isRequired
};
