import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  objectOf, any, bool,
  arrayOf, func
} from 'prop-types';
// import LinearProgress from '@material-ui/core/LinearProgress';

// import { filterEventsWithinTwoMonths, anyNearByEventsWithinTwoMonths } from '../../helpers/eventHelpers';
import { getEventsArtist } from '../../store/events/actions';
import * as StyledEvents from '../styled-components/events';

// const EventStatus = (props) => {
//   const {
//     events, eventsLoading, artist,
//     geolocation, classes
//   } = props;
//   const getEventsForArtist = (ev, ar) => {
//     const event = ev.filter(e => e.artistId === ar.artistId)[0];
//     if (event) {
//       return event.events;
//     }
//     return [];
//   };

//   const eventsForArtist = getEventsForArtist(events, artist);

//   if (eventsLoading) {
//     return <Typography gutterBottom variant="headline" component="h2" className={classes.eventStatusNo} />;
//     // return <LinearProgress className={classes.progress} color="primary" size={20} />;
//   }
//   if (eventsForArtist.length === 0) {
//     return (
//       <Typography gutterBottom variant="headline" component="h2" className={classes.eventStatusNo}>
//         NO EVENTS
//       </Typography>
//     );
//   }
//   if (geolocation.latitude) {
//     const hasEventSoon = anyNearByEventsWithinTwoMonths(eventsForArtist, geolocation);
//     if (hasEventSoon) {
//       return (
//         <Typography gutterBottom variant="headline" component="h2" className={classes.eventStatusYes}>
//           SOON NEAR YOU
//         </Typography>
//       );
//     }
//     return (
//       <Typography gutterBottom variant="headline" component="h2" className={classes.eventStatusNo}>
//         NO EVENTS NEARBY
//       </Typography>
//     );
//   }
//   if (filterEventsWithinTwoMonths(events).length === 0) {
//     return (
//       <Typography gutterBottom variant="headline" component="h2" className={classes.eventStatusNo}>
//         NO EVENTS
//       </Typography>
//     );
//   }
//   return (
//     <Typography gutterBottom variant="headline" component="h2" className={classes.eventStatusNo} />
//   );
// };

const EventCard = (props) => {
  const { artist, getEvents } = props;
  return (
    <StyledEvents.EventsCard>
      <StyledEvents.EventsCardImages image={artist.image_url || 'https://via.placeholder.com/254x254'} />
      <StyledEvents.EventsCardContainer>
        <StyledEvents.EventsCardName>
          { artist.name }
        </StyledEvents.EventsCardName>
        {/* <EventStatus {...props} /> */}
        <StyledEvents.EventsCardButton onClick={() => getEvents(artist.id, artist.name)}>
          SEE EVENTS
        </StyledEvents.EventsCardButton>
      </StyledEvents.EventsCardContainer>
    </StyledEvents.EventsCard>
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
// EventStatus.propTypes = {
//   classes: objectOf(any).isRequired,
//   geolocation: objectOf(any),
//   eventsLoading: bool.isRequired,
//   events: arrayOf(any).isRequired,
//   artist: objectOf(any).isRequired
// };
// EventCard.defaultProps = {
//   geolocation: null,
// };
// EventStatus.defaultProps = {
//   geolocation: null,
// };
