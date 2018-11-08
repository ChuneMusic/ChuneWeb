import React from 'react';
import { any, arrayOf } from 'prop-types';

import { FollowingArtistConnect } from './FollowingArtist';
import * as StyledArtists from '../styled-components/artistsBlock';

const Following = ({
  artists
}) => (
  <StyledArtists.WrapperArtists>
    <StyledArtists.ArtistsTitleBlock>
      Currently Followed Artists
    </StyledArtists.ArtistsTitleBlock>
    <StyledArtists.ArtistsBlock>
      {
        artists.map(artist => (
          <FollowingArtistConnect
            artist={artist}
            key={`${artist.id}-${artists.name}`}
          />
        ))
      }
    </StyledArtists.ArtistsBlock>
  </StyledArtists.WrapperArtists>
);

export const FollowingConnect = Following;

Following.propTypes = {
  artists: arrayOf(any).isRequired
};
