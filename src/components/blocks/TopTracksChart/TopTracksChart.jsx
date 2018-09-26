import React from 'react';
import { connect } from 'react-redux';
import { map } from 'lodash';
import Paper from '@material-ui/core/Paper';

import { PlayIcon, PauseIcon } from '../../shared/SocialIcons';

import './TopTracksChart.css';

const TopTracksChart = ({
  tracks, playing, trackStore,
  artistName
}) => (
  <div className="topTracksChartWrapper">
    <Paper className="topTracksChartPaper">
      <h4 className="title">TOP TRACKS CHART</h4>
      <div className="tracksList">
        {map(tracks, (track, key) => {
          let isPlaying = false;
          if (playing === track.id || track.id === trackStore) isPlaying = true;
          return (
            <a href={`https://open.spotify.com/track/${track.spotify_id}`} target="_blank" rel="noopener noreferrer" key={key}>
              <div className={`track ${isPlaying ? 'isActive' : null}`}>
                <div className="number">{key + 1}</div>
                <div className="sound">
                  <div className="soundName">{track.title}</div>
                  <div className="artist">by {track.artist_name || artistName}</div>
                </div>
                <div className="playerAction">
                  {isPlaying ? <PauseIcon /> : <PlayIcon />}
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </Paper>
  </div>
);

const mapStateToProps = store => ({
  trackStore: store.dataMusicPlayer.track
});

export const TopTracksChartConnect = connect(mapStateToProps)(TopTracksChart);
