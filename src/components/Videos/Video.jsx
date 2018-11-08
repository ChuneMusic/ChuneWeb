import React from 'react';
import { objectOf, any, func } from 'prop-types';
import MediaQuery from 'react-responsive';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import YouTube from 'react-youtube';

import { timestampToDate } from '../../helpers/populateArticles';
import * as StyledVideo from '../styled-components/video';
import { truncateWithEllipses } from '../../helpers/eventHelpers';
import { playYouTubeVideo, stopYouTubeVideo } from '../../store/learningMachine/actions';

class VideoCard extends React.Component {
  onPlay = () => {
    const { playVideo, video } = this.props;
    playVideo(video.id);
  }

  onPause = () => {
    const { stopVideo, video } = this.props;
    stopVideo(video.id);
  }

  onEnd = () => {
    const { stopVideo, video } = this.props;
    stopVideo(video.id);
  }

  render() {
    const { video } = this.props;
    const formattedDate = video.published_on ? timestampToDate(video.published_on) : '';
    const host = window.location.origin;
    const opts = {
      height: '100%',
      width: '100%',
      playerVars: {
        origin: host
      }
    };
    return (
      <StyledVideo.VideoBlock>
        <StyledVideo.VideoDescriptionBlock>
          <StyledVideo.VideoInfo>
            <MediaQuery maxDeviceWidth={799}>
              { `via ${truncateWithEllipses(video.channel_name, 20)} · `}
            </MediaQuery>
            <MediaQuery minDeviceWidth={800}>
              { `via ${truncateWithEllipses(video.channel_name, 40)} · `}
            </MediaQuery>
            { `${formattedDate}`}
          </StyledVideo.VideoInfo>
          <StyledVideo.VideoTitle>
            {video.title}
          </StyledVideo.VideoTitle>
        </StyledVideo.VideoDescriptionBlock>
        <StyledVideo.Video>
          <YouTube
            videoId={video.youtube_id}
            opts={opts}
            onPlay={this.onPlay}
            onPause={this.onPause}
            onEnd={this.onEnd}
          />
        </StyledVideo.Video>
      </StyledVideo.VideoBlock>
    );
  }
}

const mapActionsToProps = dispatch => bindActionCreators({
  playVideo: playYouTubeVideo,
  stopVideo: stopYouTubeVideo
}, dispatch);

export const VideoCardConnect = connect(null, mapActionsToProps)(VideoCard);

VideoCard.propTypes = {
  video: objectOf(any).isRequired,
  playVideo: func.isRequired,
  stopVideo: func.isRequired
};
