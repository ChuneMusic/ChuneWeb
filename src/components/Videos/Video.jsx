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
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }

  onPlay = () => {
    const { playVideo, video } = this.props;
    playVideo(video.id);
  }

  onPause = ({ target }) => {
    const { stopVideo, video } = this.props;
    stopVideo(video.id, target.j.duration, target.j.currentTime);
  }

  onEnd = ({ target }) => {
    const { stopVideo, video } = this.props;
    stopVideo(video.id, target.j.duration, target.j.currentTime);
  }

  render() {
    const { video } = this.props;
    const formattedDate = video.published_on ? timestampToDate(video.published_on) : '';
    const opts = {
      height: '100%',
      width: '100%',
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
            videoId="M7lc1UVf-VE"
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
