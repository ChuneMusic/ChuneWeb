import React from 'react';
import { any, arrayOf } from 'prop-types';

import * as StyledContent from '../styled-components/content';
import * as StyledArtists from '../styled-components/artistsBlock';
import { ArtistsForChoiceConnect } from './firstChoice/artistsForChoice';
import { NavBarConnect } from './firstChoice/navbar';

const FirstArtists = ({
  artists
}) => (
  <StyledContent.Wrapper>
    <StyledArtists.WrapperArtists>
      <StyledArtists.FirstArtistsHeader>
        <NavBarConnect />
        <StyledArtists.ButtonSend>Send</StyledArtists.ButtonSend>
      </StyledArtists.FirstArtistsHeader>
      <StyledArtists.FirstArtistsBody>
        <StyledArtists.FirstBlock>
          <StyledArtists.DescriptionPage>
            {'What are your favorite artists?'}
          </StyledArtists.DescriptionPage>
          <StyledArtists.TextPage>
            {'Select at least 3 artists from the proposed.'}
          </StyledArtists.TextPage>
        </StyledArtists.FirstBlock>
        {
          artists.map(artist => (
            <ArtistsForChoiceConnect
              artist={artist}
              key={`${artist.id}-${artists.name}`}
            />
          ))
        }
      </StyledArtists.FirstArtistsBody>
    </StyledArtists.WrapperArtists>
  </StyledContent.Wrapper>
);

export const FirstArtistsConnect = FirstArtists;

FirstArtists.propTypes = {
  artists: arrayOf(any).isRequired
};
