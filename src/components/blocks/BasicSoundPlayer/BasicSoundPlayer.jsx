import React from 'react';
import { connect } from 'react-redux';
import { string, bool } from 'prop-types';

import { PlayIcon } from '../../shared/SocialIcons';
import ChuneSupplyPNG from '../../../../assets/images/chune_supply.png';

import './BasicSoundPlayer.css';

const BasicSoundPlayer = ({ token, offPlayer }) => {
  const browser = navigator.vendor;
  const buttonPlay = token === '' || offPlayer || browser.startsWith('Apple') ? (
    <a href="https://open.spotify.com/playlist/3Tla7f8PBCSzI5lzrchu7l" target="_blank" rel="noopener noreferrer">
      <PlayIcon className="icon playIcon" />
    </a>
  ) : (
    null
  );
  return (
    <div className="basicSoundPlayerWrapper">
      <img className="chuneSupplyImage" src={ChuneSupplyPNG} title="Chune-Supply" alt="Chune-Supply" />
      <div className="progressBar">
        <div className="progressBarPercentage" />
      </div>
      <div className="controlBar">
        {buttonPlay}
      </div>
    </div>
  );
};

const mapStateToProps = store => ({
  token: store.dataSpotify.token,
  offPlayer: store.dataSpotify.offPlayer
});

export const BasicSoundPlayerConnect = connect(mapStateToProps, null)(BasicSoundPlayer);

BasicSoundPlayer.propTypes = {
  token: string.isRequired,
  offPlayer: bool.isRequired
};
