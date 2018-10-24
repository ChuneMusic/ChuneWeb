import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  objectOf, any, arrayOf,
  bool
} from 'prop-types';

import { EventCardConnect } from './EventCard';
import { Loading } from '../shared/Loading';
import { EmptyListConnect } from '../shared/EmptyList';
import * as StyledArtists from '../styled-components/artistsBlock';

const Events = ({ artists, geolocation, artistsSuccess }) => {
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
    <StyledArtists.WrapperArtists>
      <StyledArtists.ArtistsTitle>
        Events
      </StyledArtists.ArtistsTitle>
      <StyledArtists.ArtistsBlock>
        {
          artists.map(artist => (
            <EventCardConnect
              artist={artist}
              key={artist.id}
              artistPage={false}
            />
          ))
        }
      </StyledArtists.ArtistsBlock>
    </StyledArtists.WrapperArtists>
  );
};

const mapStateToProps = store => ({
  artists: store.dataArtists.artists,
  artistsSuccess: store.dataArtists.artistsSuccess,
  geolocation: store.dataEvents.geolocation
});

export const EventsConnect = withRouter(connect(mapStateToProps, null)(Events));

Events.propTypes = {
  artists: arrayOf(any).isRequired,
  geolocation: objectOf(any),
  artistsSuccess: bool.isRequired
};
Events.defaultProps = {
  geolocation: null
};
