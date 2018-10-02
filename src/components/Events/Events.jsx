import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  objectOf, any, arrayOf,
  bool
} from 'prop-types';

import { addArtists, deleteArtist } from '../../store/artists';
import { fetchEventsForMultipleArtists, loadingEvents } from '../../store/events';
import { EventCardConnect } from './EventCard';
import { Loading } from '../shared/Loading';
import { EmptyListConnect } from '../shared/EmptyList';
import * as StyledEvents from '../styled-components/events';

const Events = ({
  artists, events,
  eventsLoading, geolocation, artistsSuccess
}) => {
  if (!artistsSuccess) return <Loading />;
  if (artists.length === 0) {
    return (
      <EmptyListConnect
        messageOne="You didn't follow any artists yet."
        messageTwo="Search to find and follow artists."
      />
    );
  }
  return (
    <StyledEvents.WrapperEvents>
      <StyledEvents.EventsTitle>
        Events
      </StyledEvents.EventsTitle>
      <StyledEvents.EventsBlockArtist>
        {
          artists.map(artist => (
            <EventCardConnect
              artist={artist}
              eventsLoading={eventsLoading}
              events={events}
              geolocation={geolocation}
              key={artist.id}
            />
          ))
        }
      </StyledEvents.EventsBlockArtist>
    </StyledEvents.WrapperEvents>
  );
};

const mapStateToProps = store => ({
  artists: store.dataArtists.artists,
  artistsSuccess: store.dataArtists.artistsSuccess,
  events: store.events.events,
  eventsLoading: store.events.initialLoading,
  geolocation: store.dataEvents.geolocation
});

const mapDispatch = dispatch => ({
  fetchEventsForMultipleArtists: artists => dispatch(fetchEventsForMultipleArtists(artists)),
  loadingEvents: () => dispatch(loadingEvents()),
  addArtists: artists => dispatch(addArtists(artists)),
  deleteArtist: artist => dispatch(deleteArtist(artist)),
});

export const EventsConnect = withRouter(connect(mapStateToProps, mapDispatch)(Events));

Events.propTypes = {
  artists: arrayOf(any).isRequired,
  eventsLoading: bool.isRequired,
  events: arrayOf(any).isRequired,
  geolocation: objectOf(any),
  artistsSuccess: bool.isRequired
};
Events.defaultProps = {
  geolocation: null
};
