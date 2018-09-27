import React from 'react';
import { connect } from 'react-redux';
import MediaQuery from 'react-responsive';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import {
  objectOf, any, arrayOf,
  bool
} from 'prop-types';

import { addArtists, deleteArtist } from '../../store/artists';
import { fetchEventsForMultipleArtists, loadingEvents } from '../../store/events';
import { EventCardConnect } from './EventCard';
import { Loading } from '../shared/Loading';
import { EmptyListConnect } from '../shared/EmptyList';

const styles = () => ({
  root: {
    width: '100%',
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
    marginBottom: 26,
  },
  gridList: {
    '@media (max-width: 1023px)': {
      width: 344,
      margin: '16px auto',
    }
  },
  gridListTile: {
    height: 128,
    marginBottom: 16,
  },
  container: {
    backgroundColor: '#fafafa',
    width: 1080,
    margin: '0 auto',
    paddingTop: 44,
  }
});

const Events = ({
  classes, artists, events,
  eventsLoading, geolocation, artistsSuccess
}) => {
  if (!artistsSuccess) {
    return (
      <div>
        <div className={classes.root}>
          <Loading />
        </div>
      </div>
    );
  }
  if (artists.length === 0) {
    return (
      <div>
        <EmptyListConnect
          messageOne="You didn't follow any artists yet."
          messageTwo="Search to find and follow artists."
        />
      </div>
    );
  }
  return (
    <div>
      <div className={classes.root}>
        <MediaQuery minWidth={1024} className={classes.container}>
          <h3 className={classes.heading}>Events</h3>
          <GridList cols={3} className={classes.gridList} cellHeight={135}>
            {
              artists.map(artist => (
                <GridListTile key={artist.id} className={classes.gridListTile}>
                  <EventCardConnect
                    artist={artist}
                    eventsLoading={eventsLoading}
                    events={events}
                    geolocation={geolocation}
                  />
                </GridListTile>
              ))
            }
          </GridList>
        </MediaQuery>
        <MediaQuery maxWidth={1023}>
          <div className={classes.gridList}>
            <GridList cols={1} cellHeight={128}>
              {
                artists.map(artist => (
                  <GridListTile key={artist.id} className={classes.gridListTile}>
                    <EventCardConnect
                      artist={artist}
                      eventsLoading={eventsLoading}
                      events={events}
                      geolocation={geolocation}
                    />
                  </GridListTile>
                ))
              }
            </GridList>
          </div>
        </MediaQuery>
      </div>
    </div>
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

export const EventsConnect = withStyles(styles)(withRouter(connect(mapStateToProps, mapDispatch)(Events)));

Events.propTypes = {
  classes: objectOf(any).isRequired,
  artists: arrayOf(any).isRequired,
  eventsLoading: bool.isRequired,
  events: arrayOf(any).isRequired,
  geolocation: objectOf(any)
};
Events.defaultProps = {
  geolocation: null,
};
