import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  func, string, objectOf,
  any, arrayOf
} from 'prop-types';
import { map, findIndex } from 'lodash';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Tweet } from 'react-twitter-widgets';
import SpotifyWebApi from 'spotify-web-api-js';
import Waypoint from 'react-waypoint';

import {
  BasicArticleCard, TopTracksChartConnect, ChuneSupplyConnect,
  BasicSoundPlayer
} from './blocks';
import { VideoCardConnect } from './Videos/Video';
import { ArticleCardConnect } from './News/Article';
import { playMusicPlayer, pauseMusicPlayer } from '../store/musicPlayer/actions';
import { getAccessTokenSpotify } from '../store/spotify/actions';
import { fethcMoreContentHomePageUser } from '../store/content/actions';
import { Loading } from './shared/Loading';

import './Home.css';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      topTrackPlayId: null,
      playSupplyId: null
    };
  }

  handleTopTrackPlay = (id, play) => {
    const playId = play ? id : null;
    if (playId) {
      const { playMusic } = this.props;
      playMusic(playId);
    } else {
      const { pauseMusic } = this.props;
      pauseMusic(playId);
    }
    this.setState({
      topTrackPlayId: playId,
      playSupplyId: null,
    });
  };

  handleSupplyPlay = (id) => {
    this.setState({
      playSupplyId: id,
      topTrackPlayId: null,
    });
  };

  handlePrevSupplyMedia = () => {
    const { playlist, playSupplyId } = this.state;
    const playSupplyIndex = findIndex(playlist, o => (o.id === playSupplyId));
    let prevSupply;
    if (playSupplyIndex === 0) {
      // get last
      prevSupply = playlist[playlist.length - 1];
    } else {
      // get prev
      prevSupply = playlist[playSupplyIndex - 1];
    }

    this.setState({
      playSupplyId: prevSupply.id,
      topTrackPlayId: null,
    });
  };

  handleNextSupplyMedia = () => {
    const { playlist, playSupplyId } = this.state;
    const playSupplyIndex = findIndex(playlist, o => (o.id === playSupplyId));
    let nextSupply;
    if (playSupplyIndex === playlist.length - 1) {
      // get first
      nextSupply = playlist[0];
    } else {
      // get next
      nextSupply = playlist[playSupplyIndex + 1];
    }

    this.setState({
      playSupplyId: nextSupply.id,
      topTrackPlayId: null
    });
  };

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
    const { topTrackPlayId, playSupplyId } = this.state;

    const mainArticle = {
      id: 10,
      image: 'https://www.billboard.com/files/styles/article_main_image/public/media/shakira-june-2018-billboard-1548.jpg',
      title: 'Smino Brings Out T-Pain For Epic "Chopped N Skrewed" Performance In Atlanta',
      source: 'hotnewhiphop',
    };

    const otherMainArticles = [
      {
        id: 1,
        image: 'https://www.billboard.com/files/styles/1024x577/public/media/Gerard-Pique-of-FC-Barcelona-and-Shakira-2015-billboard-1548.jpg',
        title: "Shakira Supports Gerard Pique's Retirement With Beautiful Message on Instagram",
        source: 'Billboard',
      },
      {
        id: 2,
        image: 'https://www.billboard.com/files/styles/1024x577/public/media/carlos-vives-shakira-La-Bicicleta-2016-billboard-1548.jpg',
        title: 'The 10 Best Latin Summer Songs Ever',
        source: 'Billboard',
      },
      {
        id: 3,
        image: 'https://www.billboard.com/files/styles/1024x577/public/media/Shakira-Maluma-Clandestino-screenshot-2018-billboard-1548.jpg',
        title: "Shakira and Maluma's 'Clandestino' Hits Hot Latin Songs Chart's Top 10",
        source: 'Billboard',
      },
    ];

    // let audioPlayerControllerPlaylist;
    // let selectedRecord;

    // For large media player with overlay
    // if (topTrackPlayId) {
    //   audioPlayerControllerPlaylist = topTracks;
    //   selectedRecord = find(topTracks, (o) => (o.id === topTrackPlayId) );
    // } else if (playSupplyId) {
    //   audioPlayerControllerPlaylist = playlist;
    //   selectedRecord = find(playlist, (o) => (o.id === playSupplyId) );
    // }

    // For small media player - BLOCKED WITH null VALUE for now, since large player opening on all media play
    let playSupply;
    if (playSupplyId) {
      // playSupply = find(playlist, (o) => (o.id === playSupplyId) );
    }
    const {
      location, token, contentFeed,
      getTokenSpotify, history, topTracks,
      topChune
    } = this.props;
    if (location.search !== '' && token === '') {
      getTokenSpotify(location.search);
      location.search = '';
      history.push('/home');
    }
    if (topChune.length === 0) return <Loading />;
    return (
      <div>
        {/* <button onClick={this.playMusicSpotify} type="button">Play</button> */}
        <div className="homePageWrapper">
          <div className="mainArticle">
            <BasicArticleCard
              image={mainArticle.image}
              title={mainArticle.title}
              source={mainArticle.source}
            />
          </div>

          <div className="otherMainArticles">
            {map(otherMainArticles, article => (
              <BasicArticleCard
                key={article.id}
                image={article.image}
                title={article.title}
                source={article.source}
              />
            ))}
          </div>

          <div className="otherMainArticlesMobile">
            {map(otherMainArticles, article => (
              <Card className="root" key={article.id}>
                <CardMedia
                  className="media"
                  image={article.image}
                  title={article.title}
                />
                <div className="rightContainer">
                  <CardContent className="cardBody">
                    <Typography
                      className="articleSource"
                      gutterBottom
                      variant="headline"
                      component="p"
                    >
                      via
                      {' '}
                      {article.source}
                    </Typography>

                    <Typography
                      className="headline"
                      gutterBottom
                      variant="headline"
                      component="h2"
                    >
                      {article.title}
                    </Typography>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
          <div className="gridWrapper">
            <Grid container spacing={24}>
              <Grid item xs={12} md={8} lg={8}>
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
                        <div className="tweet">
                          <Tweet
                            tweetId={str[str.length - 1]}
                            options={{ width: 500 }}
                            key={`${item.id}-tweet`}
                          />
                        </div>
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
              </Grid>
              <Grid item xs={12} md={4} lg={4} className="rightGridListWrapper">
                <TopTracksChartConnect
                  tracks={topTracks}
                  playing={topTrackPlayId}
                />

                <BasicSoundPlayer
                  source={playSupply ? playSupply.url : null}
                  onPrev={this.handlePrevSupplyMedia}
                  onNext={this.handleNextSupplyMedia}
                />

                <ChuneSupplyConnect
                  supplies={topChune}
                  foryou={false}
                />
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  token: store.dataSpotify.token,
  profile: store.dataSpotify.profile,
  deviceID: store.dataSpotify.deviceID,
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
  playMusic: func.isRequired,
  pauseMusic: func.isRequired,
  getTokenSpotify: func.isRequired,
  token: string.isRequired,
  location: objectOf(any).isRequired,
  history: objectOf(any).isRequired,
  contentFeed: arrayOf(any).isRequired,
  topTracks: arrayOf(any).isRequired,
  topChune: arrayOf(any).isRequired,
  loadMoreItems: func.isRequired
};
