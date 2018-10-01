import React from 'react';
import { objectOf, any } from 'prop-types';

import { Player } from './Player';
import { truncateWithEllipses } from '../../helpers/eventHelpers';
import { timestampToDate } from '../../helpers/populateArticles';
import * as StyledVideo from '../styled-components/video';

const VideoCard = ({ video }) => {
  const formattedDate = video.published_on ? timestampToDate(video.published_on) : '';
  return (
    <StyledVideo.VideoBlock>
      <StyledVideo.VideoDescriptionBlock>
        <StyledVideo.VideoInfo>
          { `via ${video.channel_name} · `}
          { `${formattedDate}`}
          <StyledVideo.VideoLink to={`/artist/${video.artist_name}`}>
            { ` · ${video.artist_name}` }
          </StyledVideo.VideoLink>
        </StyledVideo.VideoInfo>
        <StyledVideo.VideoTitle>
          { truncateWithEllipses(video.title, 45) }
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
