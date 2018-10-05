import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  func, string, objectOf,
  any, arrayOf, bool
} from 'prop-types';
import { map } from 'lodash';
import { Tweet } from 'react-twitter-widgets';
import SpotifyWebApi from 'spotify-web-api-js';
import Waypoint from 'react-waypoint';
import Slider from '@material-ui/lab/Slider';

import {
  TopTracksChartConnect, ChuneSupplyConnect, BasicSoundPlayer,
  BasicArticleCardConnect
} from './blocks';
import { VideoCardConnect } from './Videos/Video';
import { ArticleCardConnect } from './News/Article';
import { playMusicPlayer, pauseMusicPlayer } from '../store/musicPlayer/actions';
import { getAccessTokenSpotify } from '../store/spotify/actions';
import { fethcMoreContentHomePageUser } from '../store/content/actions';
import { Loading } from './shared/Loading';
import * as Styled from './styled-components/home';
import * as StyledContent from './styled-components/content';
import * as StyledArticle from './styled-components/article';
import * as StyledSpotify from './styled-components/spotifyPlayer';

import Prev from '../../assets/images/control/rewind-button.svg';
import Play from '../../assets/images/control/music-player-play.svg';
import Next from '../../assets/images/control/fast-forward-arrows.svg';
import Shuffle from '../../assets/images/control/couple-of-arrows-changing-places.svg';
import Repeat from '../../assets/images/control/repeat.svg';
import VolumeOn from '../../assets/images/control/reduced-volume.svg';

import './Home.css';

class Home extends React.Component {
  state={
    volume: 5
  }

  renderWaypoint = () => <Waypoint onEnter={this.loadMore} threshold={2.0} />

  loadMore = () => {
    const { loadMoreItems } = this.props;
    loadMoreItems();
  }

  handleChangeVolume = (event, value) => {
    this.setState({ volume: value });
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
      topChune, featured, fetchDataHome
    } = this.props;
    const { volume } = this.state;
    if (location.search !== '' && token === '') {
      getTokenSpotify(location.search);
      location.search = '';
      history.push('/home');
    }
    if (topChune.length === 0) return <Loading />;
    /* <button onClick={this.playMusicSpotify} type="button">Play</button> */
    return (
      <Styled.WrapperHomePage>
        <StyledSpotify.SpotifyPlayer>
          <StyledSpotify.SpotifyLeftBlock>
            <StyledSpotify.SpotifyImageTrack src="https://i.scdn.co/image/1685533969d5b68cbc630f991e873bd6467f1814" title="LP" alt="LP" />
            <StyledSpotify.SpotifyBlockTrackInfo>
              <StyledSpotify.SpotifyTrackName>
                Nubm
              </StyledSpotify.SpotifyTrackName>
              <StyledSpotify.SpotifyTrackArtist>
                Linkin Park
              </StyledSpotify.SpotifyTrackArtist>
            </StyledSpotify.SpotifyBlockTrackInfo>
          </StyledSpotify.SpotifyLeftBlock>
          <StyledSpotify.SpotifyCenterBlock>
            <StyledSpotify.SpotyfiControlBar>
              <StyledSpotify.SpotifyControlButton src={Shuffle} />
              <StyledSpotify.SpotifyControlButton src={Prev} />
              <StyledSpotify.SpotifyControlButton src={Play} />
              <StyledSpotify.SpotifyControlButton src={Next} />
              <StyledSpotify.SpotifyControlButton src={Repeat} />
            </StyledSpotify.SpotyfiControlBar>
          </StyledSpotify.SpotifyCenterBlock>
          <StyledSpotify.SpotifyRightBlock>
            <StyledSpotify.SpotifyControlButton src={VolumeOn} />
            <Slider
              value={volume}
              aria-labelledby="label"
              min={0}
              max={10}
              step={1}
              onChange={this.handleChangeVolume}
              classes={{
                root: 'root',
                thumb: 'thumb',
                trackBefore: 'trackBefore',
                trackAfter: 'trackAfter'
              }}
            />
          </StyledSpotify.SpotifyRightBlock>
        </StyledSpotify.SpotifyPlayer>
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
                      autoplay={false}
                      key={`${item.id}-video-${key}`}
                    />);
                case 'tweet': {
                  const str = item.embed_url.split('/');
                  return (
                    <StyledArticle.ArticleTweet key={`${item.id}-tweet-${key}`}>
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
          <StyledContent.RightBlockContent>
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
  topChune: store.dataContent.topChune,
  fetchDataHome: store.dataContent.fetchDataHome
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
  featured: arrayOf(any).isRequired,
  deviceID: string.isRequired,
  fetchDataHome: bool.isRequired
};
