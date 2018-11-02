import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Slider from '@material-ui/lab/Slider';
import {
  string, arrayOf, func,
  any, number, objectOf,
  bool
} from 'prop-types';
import moment from 'moment';

import * as StyledSpotify from '../styled-components/spotifyPlayer';
import Shuffle from '../../../assets/images/control/shuffle.svg';
import Play from '../../../assets/images/control/play.svg';
import Next from '../../../assets/images/control/next.svg';
import Pause from '../../../assets/images/control/pause.svg';
import VolumeOn from '../../../assets/images/control/volumeOn.svg';
import VolumeOff from '../../../assets/images/control/volumeOff.svg';
import Prev from '../../../assets/images/control/prev.svg';
import Repeat from '../../../assets/images/control/repeat.svg';
import {
  seekToPositionInCurrentlyPlayingTrack, setVolumeForPlayback,
  toggleShuffleForPlayback, setRepeatModeOnPlayback, skipPlaybackToNextTrack,
  skipPlaybackToPreviousTrack, playTrack, pauseTrack
} from '../../store/spotify/actions';

class Player extends React.Component {
  state = {
    volume: 5,
    positionsMs: 0,
    intervalID: null,
    duration: 0,
    shuffleButton: false,
    repeatButton: false,
    id: '',
    oldVolume: 0
  }

  componentWillReceiveProps(nextProps) {
    const {
      idTrack, durationTrack, timeStop,
      shuffleTracks
    } = nextProps;
    const { pausedTrack } = this.props;
    const { id, intervalID, shuffleButton } = this.state;
    if (id !== idTrack) {
      this.setState({
        duration: durationTrack,
        positionsMs: timeStop,
        id: idTrack,
        repeatButton: false
      });
    }
    if (shuffleButton && shuffleTracks === false) this.setState({ shuffleButton: shuffleTracks });
    if (nextProps.pausedTrack === false && pausedTrack) {
      const interval = setInterval(this.timer, 1000);
      this.setState({ intervalID: interval });
    }
    if (nextProps.pausedTrack && pausedTrack === false) {
      clearInterval(intervalID);
    }
  }

  timer = () => {
    const { durationTrack } = this.props;
    const { positionsMs } = this.state;
    const pos = positionsMs + 1000;
    if (pos <= durationTrack) this.setState({ positionsMs: pos });
    else this.setState({ positionsMs: 0 });
  }

  playPauseTrack = () => {
    const {
      setPlayTrack, setPauseTrack, idTrack,
      playingTracks, pausedTrack
    } = this.props;
    if (pausedTrack) {
      setPlayTrack(idTrack, playingTracks);
    } else {
      setPauseTrack();
    }
  }

  changeVolume = () => {
    const { volume, oldVolume } = this.state;
    const { setVolumePlayer } = this.props;
    if (volume !== 0) {
      setVolumePlayer(0);
      this.setState({ oldVolume: volume, volume: 0 });
    } else {
      setVolumePlayer(oldVolume * 10);
      this.setState({ volume: oldVolume });
    }
  }

  handleChangeVolume = (event, value) => {
    const { setVolumePlayer } = this.props;
    setVolumePlayer(value * 10);
    this.setState({ volume: value });
  }

  handleChangeProgressBar = (event, value) => {
    const { setPositionTrack } = this.props;
    setPositionTrack(Math.round(value));
    this.setState({ positionsMs: Math.round(value) });
  }

  handleChangeShuffle = () => {
    const { shuffleButton } = this.state;
    const { setShuffle } = this.props;
    setShuffle(!shuffleButton);
    this.setState({ shuffleButton: !shuffleButton });
  }

  handleChangeRepeat = () => {
    const { repeatButton } = this.state;
    const { setRepeat } = this.props;
    setRepeat(!repeatButton);
    this.setState({ repeatButton: !repeatButton });
  }

  render() {
    const {
      volume, positionsMs, duration,
      shuffleButton, repeatButton
    } = this.state;
    const {
      artistsTrack, nameTrack, imageTrack,
      pausedTrack, setNextTrack, setPrevTrack
    } = this.props;
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
    const currentTime = moment.utc(positionsMs).format('m:ss');
    const durationTime = moment.utc(duration).format('m:ss');
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
              <StyledSpotify.SpotifyButton onClick={this.handleChangeShuffle}>
                <StyledSpotify.SpotifyShuffleSVG viewBox="0 0 512 512" active={shuffleButton}>
                  <use xlinkHref={`${Shuffle}#Shuffle`} />
                </StyledSpotify.SpotifyShuffleSVG>
              </StyledSpotify.SpotifyButton>
              <StyledSpotify.SpotifyButton onClick={setPrevTrack}>
                <StyledSpotify.SpotifySVG viewBox="0 0 512 512">
                  <use xlinkHref={`${Prev}#Prev`} />
                </StyledSpotify.SpotifySVG>
              </StyledSpotify.SpotifyButton>
              <StyledSpotify.SpotifyButton onClick={this.playPauseTrack}>
                <StyledSpotify.SpotifySVG viewBox="0 0 512 512">
                  <use xlinkHref={pausedTrack ? `${Play}#Play` : `${Pause}#Pause`} />
                </StyledSpotify.SpotifySVG>
              </StyledSpotify.SpotifyButton>
              <StyledSpotify.SpotifyButton onClick={setNextTrack}>
                <StyledSpotify.SpotifySVG viewBox="0 0 512 512">
                  <use xlinkHref={`${Next}#Next`} />
                </StyledSpotify.SpotifySVG>
              </StyledSpotify.SpotifyButton>
              <StyledSpotify.SpotifyButton onClick={this.handleChangeRepeat}>
                <StyledSpotify.SpotifyRepeatSVG viewBox="0 0 512 512" active={repeatButton}>
                  <use xlinkHref={`${Repeat}#Repeat`} />
                </StyledSpotify.SpotifyRepeatSVG>
              </StyledSpotify.SpotifyButton>
            </StyledSpotify.SpotyfiControlBar>
            <StyledSpotify.SpotifyProgressBlock>
              <StyledSpotify.SpotifyTimer>
                {currentTime}
              </StyledSpotify.SpotifyTimer>
              <Slider
                value={positionsMs}
                aria-labelledby="label"
                min={0}
                max={duration}
                onChange={this.handleChangeProgressBar}
                classes={{
                  root: 'rootProgressBar',
                  thumb: 'thumbProgressBar',
                  trackBefore: 'trackBefore',
                  trackAfter: 'trackAfter'
                }}
              />
              <StyledSpotify.SpotifyTimer>
                {durationTime}
              </StyledSpotify.SpotifyTimer>
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
  durationTrack: store.dataSpotify.durationTrack,
  idTrack: store.dataSpotify.idTrack,
  pausedTrack: store.dataSpotify.pausedTrack,
  timeStop: store.dataSpotify.timeStop,
  playingTracks: store.dataSpotify.playingTracks,
  shuffleTracks: store.dataSpotify.shuffleTracks
});

const mapActionsToProps = dispatch => bindActionCreators({
  setPositionTrack: seekToPositionInCurrentlyPlayingTrack,
  setVolumePlayer: setVolumeForPlayback,
  setShuffle: toggleShuffleForPlayback,
  setRepeat: setRepeatModeOnPlayback,
  setNextTrack: skipPlaybackToNextTrack,
  setPrevTrack: skipPlaybackToPreviousTrack,
  setPlayTrack: playTrack,
  setPauseTrack: pauseTrack
}, dispatch);

export const PlayerConnect = connect(mapStateToProps, mapActionsToProps)(Player);

Player.propTypes = {
  artistsTrack: arrayOf(any).isRequired,
  imageTrack: objectOf(any).isRequired,
  nameTrack: string.isRequired,
  durationTrack: number.isRequired,
  setVolumePlayer: func.isRequired,
  setPositionTrack: func.isRequired,
  setShuffle: func.isRequired,
  pausedTrack: bool.isRequired,
  setRepeat: func.isRequired,
  setNextTrack: func.isRequired,
  setPrevTrack: func.isRequired,
  setPlayTrack: func.isRequired,
  setPauseTrack: func.isRequired,
  idTrack: string.isRequired,
  playingTracks: arrayOf(any).isRequired,
  timeStop: number.isRequired,
  shuffleTracks: bool.isRequired
};
