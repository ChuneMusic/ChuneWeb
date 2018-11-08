import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  objectOf, any, func,
  bool
} from 'prop-types';

import { getEventsArtist } from '../../store/events/actions';
import * as StyledCard from '../styled-components/artistsCard';
import { viewsEventsArtist } from '../../store/learningMachine/actions';

class EventCard extends React.Component {
  artistEvents = (id, name) => {
    const { getEvents, sendEvents } = this.props;
    getEvents(id, name);
    sendEvents(id);
  }

  render() {
    const { artist, artistPage } = this.props;
    return (
      <StyledCard.ArtistCard artistPage={artistPage}>
        <StyledCard.ArtistCardImages image={artist.image_url || 'https://via.placeholder.com/254x254'} artistPage={artistPage} />
        <StyledCard.ArtistCardContainer>
          <StyledCard.ArtistCardName>
            { artist.name }
          </StyledCard.ArtistCardName>
          <StyledCard.ArtistCardButton onClick={() => this.artistEvents(artist.id, artist.name)}>
            SEE EVENTS
          </StyledCard.ArtistCardButton>
        </StyledCard.ArtistCardContainer>
      </StyledCard.ArtistCard>
    );
  }
}

const mapActionsToProps = dispatch => bindActionCreators({
  getEvents: getEventsArtist,
  sendEvents: viewsEventsArtist
}, dispatch);

export const EventCardConnect = connect(null, mapActionsToProps)(EventCard);

EventCard.propTypes = {
  artist: objectOf(any).isRequired,
  getEvents: func.isRequired,
  sendEvents: func.isRequired,
  artistPage: bool.isRequired
};
