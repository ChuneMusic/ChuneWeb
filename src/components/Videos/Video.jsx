import React from 'react';
import { objectOf, any } from 'prop-types';
import MediaQuery from 'react-responsive';

import { Player } from './Player';
import { timestampToDate } from '../../helpers/populateArticles';
import * as StyledVideo from '../styled-components/video';
import { truncateWithEllipses } from '../../helpers/eventHelpers';

const VideoCard = ({ video }) => {
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
        <Player url={video.youtube_id} title={video.title} />
      </StyledVideo.Video>
    </StyledVideo.VideoBlock>
  );
};

export const VideoCardConnect = VideoCard;

VideoCard.propTypes = {
  video: objectOf(any).isRequired
};
