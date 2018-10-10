import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Slider from '@material-ui/lab/Slider';
import { string } from 'prop-types';

import * as StyledSpotify from '../styled-components/spotifyPlayer';
// import Prev from '../../../assets/images/control/rewind-button.svg';
// import Play from '../../../assets/images/control/music-player-play.svg';
// import Next from '../../../assets/images/control/fast-forward-arrows.svg';
// import Shuffle from '../../../assets/images/control/couple-of-arrows-changing-places.svg';
// import Repeat from '../../../assets/images/control/repeat.svg';
// import VolumeOn from '../../../assets/images/control/reduced-volume.svg';
// import Pause from '../../../assets/images/control/pause-button.svg';
import Shuffle from '../../../assets/images/control/shuffle.svg';
import Play from '../../../assets/images/control/play.svg';
import Next from '../../../assets/images/control/next.svg';

class Player extends React.Component {
  state={
    volume: 5
  }

  handleChangeVolume = (event, value) => {
    this.setState({ volume: value });
  }

  playMusicSpotify = () => {
    // const { token, deviceID } = this.props;
    // const spotifyApi = new SpotifyWebApi();
    // spotifyApi.setAccessToken(token);
    // spotifyApi.getMyDevices().then(() => {
    //   const data = [deviceID];
    //   const play = { play: true };
    //   spotifyApi.transferMyPlayback(data, play).then(() => {
    //     const dataPlay = {
    //       device_id: deviceID,
    //       uris: ['spotify:track:4S8d14HvHb70ImctNgVzQQ', 'spotify:track:2xLMifQCjDGFmkHkpNLD9h']
    //     };
    //     spotifyApi.play(dataPlay);
    //   });
    // });
  }

  render() {
    const { volume } = this.state;
    return (
      <StyledSpotify.SpotifyWrapper>
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
              <StyledSpotify.SpotifySVG viewBox="0 0 512 512">
                <use xlinkHref={`${Shuffle}#Shuffle`} />
              </StyledSpotify.SpotifySVG>
              <StyledSpotify.SpotifySVG viewBox="0 0 512 512">
                <use xlinkHref={`${Play}#Play`} />
              </StyledSpotify.SpotifySVG>
              <StyledSpotify.SpotifySVG viewBox="0 0 512 512">
                <use xlinkHref={`${Next}#Next`} />
              </StyledSpotify.SpotifySVG>
              {/* <StyledSpotify.SpotifyControlButton src={Shuffle} />
              <StyledSpotify.SpotifyControlButton src={Prev} />
              <StyledSpotify.SpotifyControlButton src={Play} onClick={this.playMusicSpotify} />
              <StyledSpotify.SpotifyControlButton src={Next} />
              <StyledSpotify.SpotifyControlButton src={Repeat} /> */}
            </StyledSpotify.SpotyfiControlBar>
          </StyledSpotify.SpotifyCenterBlock>
          <StyledSpotify.SpotifyRightBlock>
            {/* <StyledSpotify.SpotifyControlButton src={VolumeOn} /> */}
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
  token: store.dataSpotify.token,
  deviceID: store.dataSpotify.deviceID
});

const mapActionsToProps = dispatch => bindActionCreators({
}, dispatch);

export const PlayerConnect = connect(mapStateToProps, mapActionsToProps)(Player);

Player.propTypes = {
  token: string.isRequired,
  deviceID: string.isRequired
};
