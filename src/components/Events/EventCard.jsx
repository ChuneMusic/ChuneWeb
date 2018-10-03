import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { objectOf, any, func } from 'prop-types';

import { getEventsArtist } from '../../store/events/actions';
import * as StyledCard from '../styled-components/artistsCard';

const EventCard = (props) => {
  const { artist, getEvents } = props;
  return (
    <StyledCard.ArtistCard>
      <StyledCard.ArtistCardImages image={artist.image_url || 'https://via.placeholder.com/254x254'} />
      <StyledCard.ArtistCardContainer>
        <StyledCard.ArtistCardName>
          { artist.name }
        </StyledCard.ArtistCardName>
        <StyledCard.ArtistCardButton onClick={() => getEvents(artist.id, artist.name)}>
          SEE EVENTS
        </StyledCard.ArtistCardButton>
      </StyledCard.ArtistCardContainer>
    </StyledCard.ArtistCard>
  );
};

const mapActionsToProps = dispatch => bindActionCreators({
  getEvents: getEventsArtist
}, dispatch);

export const EventCardConnect = connect(null, mapActionsToProps)(EventCard);

EventCard.propTypes = {
  artist: objectOf(any).isRequired,
  getEvents: func.isRequired
};
