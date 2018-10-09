import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { objectOf, any, func } from 'prop-types';

import { unfollowArtist } from '../../store/artists/actions';
import * as StyledCard from '../styled-components/artistsCard';
import { moreInfoAboutArtist } from '../../store/learningMachine/actions';

const FollowingArtist = ({ artist, unfollowToArtist, sendMore }) => {
  let genre = 'None';
  if (artist.genres[0] !== undefined) genre = artist.genres[0].description;
  return (
    <StyledCard.ArtistCard>
      <StyledCard.ArtistCardImages image={artist.image_url || 'https://via.placeholder.com/254x254'} />
      <StyledCard.ArtistCardContainer>
        <StyledCard.ArtistGenre>
          { genre }
        </StyledCard.ArtistGenre>
        <StyledCard.ArtistCardName>
          { artist.name }
        </StyledCard.ArtistCardName>
        <StyledCard.ArtistCardLink to={`/artist/${artist.name}`} onClick={() => sendMore(artist.id)}>
          More
        </StyledCard.ArtistCardLink>
        <StyledCard.ArtistCardUnffolow onClick={() => unfollowToArtist(artist.name)}>
          Unfollow
        </StyledCard.ArtistCardUnffolow>
      </StyledCard.ArtistCardContainer>
    </StyledCard.ArtistCard>
  );
};

const mapActionsToProps = dispatch => bindActionCreators({
  unfollowToArtist: unfollowArtist,
  sendMore: moreInfoAboutArtist
}, dispatch);

export const FollowingArtistConnect = withRouter(connect(null, mapActionsToProps)(FollowingArtist));

FollowingArtist.propTypes = {
  artist: objectOf(any).isRequired,
  unfollowToArtist: func.isRequired,
  sendMore: func.isRequired
};
