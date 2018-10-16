import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import {
  arrayOf, any, objectOf,
  number, bool
} from 'prop-types';

import { EventsTableConnect } from './EventsTable';
import { ArtistWallpaperConnect } from './ArtistWallpaper';
import { EmptyListConnect } from '../shared/EmptyList';
import * as StyledContent from '../styled-components/content';


const styles = () => ({
  root: {
    width: 716,
    margin: '0px auto',
    '@media (max-width: 1023px)': {
      width: '100vw',
    }
  },
  heading: {
    width: 283,
    height: 28,
    fontFamily: 'Roboto',
    fontSize: 24,
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 0.3,
    color: '#000000',
  },
  gridList: {
  },
  container: {
    backgroundColor: '#fafafa',
    width: '100%',
    paddingTop: 24,
  },
  noevents: {
    width: 716,
    height: 300,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

class ArtistEvents extends React.Component {
  componentWillMount() {
    const htmlBlock = document.getElementsByTagName('html');
    htmlBlock[0].style.overflow = 'hidden';
  }

  render() {
    const {
      classes, events, id,
      artists, geolocation, history,
      modal
    } = this.props;
    if (artists.length === 0) {
      history.push('/events');
      return null;
    }
    const artist = artists.filter(e => e.id === id);
    if (events.length === 0) {
      return (
        <EmptyListConnect
          messageOne={`Sorry, no recent events for ${artist[0].name}`}
          messageTwo="Click on the search bar to find and follow another artist."
        />
      );
    }
    return (
      <StyledContent.Wrapper modal={modal}>
        <div className={classes.root}>
          <ArtistWallpaperConnect artist={artist[0]} />
          <EventsTableConnect events={events} geolocation={geolocation} />
        </div>
      </StyledContent.Wrapper>
    );
  }
}


const mapStateToProps = store => ({
  events: store.dataEvents.events,
  id: store.dataEvents.id,
  artists: store.dataArtists.artists,
  geolocation: store.dataEvents.geolocation,
  modal: store.dataSpotify.modal
});

export const ArtistEventsConnect = withStyles(styles)(connect(mapStateToProps, null)(ArtistEvents));

ArtistEvents.propTypes = {
  events: arrayOf(any).isRequired,
  id: number.isRequired,
  artists: arrayOf(any).isRequired,
  classes: objectOf(any).isRequired,
  geolocation: objectOf(any).isRequired,
  history: objectOf(any).isRequired,
  modal: bool.isRequired
};
