import React from 'react';
import { objectOf, any, func } from 'prop-types';
import MediaQuery from 'react-responsive';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Player } from './Player';
import { timestampToDate } from '../../helpers/populateArticles';
import * as StyledVideo from '../styled-components/video';
import { truncateWithEllipses } from '../../helpers/eventHelpers';
import { playYouTubeVideo } from '../../store/learningMachine/actions';

class VideoCard extends React.Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }

  render() {
    const { video, playVideo } = this.props;
    const formattedDate = video.published_on ? timestampToDate(video.published_on) : '';
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
          <Player url={video.youtube_id} title={video.title} refer={this.videoRef} />
        </StyledVideo.Video>
      </StyledVideo.VideoBlock>
    );
  }
}

const mapActionsToProps = dispatch => bindActionCreators({
  playVideo: playYouTubeVideo
}, dispatch);

export const VideoCardConnect = connect(null, mapActionsToProps)(VideoCard);

VideoCard.propTypes = {
  video: objectOf(any).isRequired,
  playVideo: func.isRequired
};
