import React from 'react';

import { PlayIcon } from '../../shared/SocialIcons';
import ChuneSupplyPNG from '../../../../assets/images/chune_supply.png';

import './BasicSoundPlayer.css';

export const BasicSoundPlayer = () => (
  <div className="basicSoundPlayerWrapper">
    <img className="chuneSupplyImage" src={ChuneSupplyPNG} title="Chune-Supply" alt="Chune-Supply" />
    <div className="progressBar">
      <div className="progressBarPercentage" />
    </div>
    <div className="controlBar">
      <a href="https://open.spotify.com/playlist/3Tla7f8PBCSzI5lzrchu7l" target="_blank" rel="noopener noreferrer">
        <PlayIcon className="icon playIcon" />
      </a>
    </div>
  </div>
);
