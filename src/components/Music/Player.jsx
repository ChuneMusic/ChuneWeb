import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Slider from '@material-ui/lab/Slider';
import {
  string, arrayOf,
  any, number, objectOf
} from 'prop-types';

import * as StyledSpotify from '../styled-components/spotifyPlayer';
import Shuffle from '../../../assets/images/control/shuffle.svg';
import Play from '../../../assets/images/control/play.svg';
import Next from '../../../assets/images/control/next.svg';
import Pause from '../../../assets/images/control/pause.svg';
import VolumeOn from '../../../assets/images/control/volumeOn.svg';
import VolumeOff from '../../../assets/images/control/volumeOff.svg';
import Prev from '../../../assets/images/control/prev.svg';
import Repeat from '../../../assets/images/control/repeat.svg';

class Player extends React.Component {
  state={
    volume: 5,
    positionsMs: 0,
    intervalID: null,
    duration: 0
  }

  componentDidMount() {
    const intervalID = setInterval(this.timer, 1000);
    this.setState({ intervalID });
  }


  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.durationTrack !== prevState.duration) {
      return { duration: nextProps.durationTrack, positionsMs: 0 };
    }
    return prevState;
  }

  componentWillUnmount() {
    const { intervalID } = this.state;
    clearInterval(intervalID);
  }

  timer = () => {
    const { durationTrack } = this.props;
    const { positionsMs } = this.state;
    const pos = positionsMs + 1000;
    if (pos <= durationTrack) this.setState({ positionsMs: pos });
  }

  handleChangeVolume = (event, value) => {
    this.setState({ volume: value });
  }

  render() {
    const { volume, positionsMs, duration } = this.state;
    const { artistsTrack, nameTrack, imageTrack } = this.props;
    const musicPlaying = false;
    let artists = '';
    let arr = null;
    if (artistsTrack.length <= 3 && artistsTrack.length > 0) {
      arr = artistsTrack.map(elem => elem.name);
      artists = arr.join(' & ');
    }
    if (artistsTrack.length > 3) {
      arr = artistsTrack.map(elem => elem.name);
      arr.length = 3;
      artists = `${arr.join(' & ')} and other`;
    }
    console.log(positionsMs, 'ms');
    return (
      <StyledSpotify.SpotifyWrapper>
        <StyledSpotify.SpotifyPlayer>
          <StyledSpotify.SpotifyLeftBlock>
            <StyledSpotify.SpotifyImageTrack src={imageTrack.url} title={nameTrack} alt={nameTrack} />
            <StyledSpotify.SpotifyBlockTrackInfo>
              <StyledSpotify.SpotifyTrackName>
                {nameTrack}
              </StyledSpotify.SpotifyTrackName>
              <StyledSpotify.SpotifyTrackArtist>
                {artists}
              </StyledSpotify.SpotifyTrackArtist>
            </StyledSpotify.SpotifyBlockTrackInfo>
          </StyledSpotify.SpotifyLeftBlock>
          <StyledSpotify.SpotifyCenterBlock>
            <StyledSpotify.SpotyfiControlBar>
              <StyledSpotify.SpotifySVG viewBox="0 0 512 512">
                <use xlinkHref={`${Shuffle}#Shuffle`} />
              </StyledSpotify.SpotifySVG>
              <StyledSpotify.SpotifySVG viewBox="0 0 512 512">
                <use xlinkHref={`${Prev}#Prev`} />
              </StyledSpotify.SpotifySVG>
              <StyledSpotify.SpotifySVG viewBox="0 0 512 512">
                <use xlinkHref={musicPlaying ? `${Pause}#Pause` : `${Play}#Play`} />
              </StyledSpotify.SpotifySVG>
              <StyledSpotify.SpotifySVG viewBox="0 0 512 512">
                <use xlinkHref={`${Next}#Next`} />
              </StyledSpotify.SpotifySVG>
              <StyledSpotify.SpotifySVG viewBox="0 0 512 512">
                <use xlinkHref={`${Repeat}#Repeat`} />
              </StyledSpotify.SpotifySVG>
            </StyledSpotify.SpotyfiControlBar>
            <StyledSpotify.SpotifyProgressBlock>
              <Slider
                value={positionsMs}
                aria-labelledby="label"
                min={0}
                max={duration}
                classes={{
                  root: 'rootProgressBar',
                  thumb: 'thumbProgressBar',
                  trackBefore: 'trackBefore',
                  trackAfter: 'trackAfter'
                }}
              />
            </StyledSpotify.SpotifyProgressBlock>
          </StyledSpotify.SpotifyCenterBlock>
          <StyledSpotify.SpotifyRightBlock>
            <StyledSpotify.SpotifySVG viewBox="0 0 512 512" onClick={this.changeVolume}>
              <use xlinkHref={volume === 0 ? `${VolumeOff}#VolumeOff` : `${VolumeOn}#VolumeOn`} />
            </StyledSpotify.SpotifySVG>
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
      </StyledSpotify.SpotifyWrapper>
    );
  }
}

const mapStateToProps = store => ({
  artistsTrack: store.dataSpotify.artistsTrack,
  nameTrack: store.dataSpotify.nameTrack,
  imageTrack: store.dataSpotify.imageTrack,
  durationTrack: store.dataSpotify.durationTrack
});

const mapActionsToProps = dispatch => bindActionCreators({
}, dispatch);

export const PlayerConnect = connect(mapStateToProps, mapActionsToProps)(Player);

Player.propTypes = {
  artistsTrack: arrayOf(any).isRequired,
  imageTrack: objectOf(any).isRequired,
  nameTrack: string.isRequired,
  durationTrack: number.isRequired
};
