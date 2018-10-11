import React from 'react';
import { connect } from 'react-redux';
import {
  objectOf, arrayOf, any,
  bool
} from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { RelatedArtistsConnect } from './RelatedArtists';
import { FollowingConnect } from './Following';
import { EmptyListConnect } from '../shared/EmptyList';
import { Loading } from '../shared/Loading';
import * as StyledContent from '../styled-components/content';

const styles = () => ({
  initialMessage: {
    width: '713px',
    height: '300px',
    margin: '180px auto',
  },
  container: {
    margin: '44px auto',
    '@media (max-width: 1023px)': {
      width: '100vw',
      margin: '24px auto',
    }
  }
});
class Artists extends React.Component {
  componentWillMount() {
    const htmlBlock = document.getElementsByTagName('html');
    htmlBlock[0].style.overflow = 'hidden';
  }

  render() {
    const {
      classes, artists, recommended,
      artistsSuccess
    } = this.props;
    if (!artistsSuccess) return <Loading />;
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
      <StyledContent.Wrapper>
        <div className={classes.container}>
          <RelatedArtistsConnect relatedArtists={recommended} />
          <FollowingConnect artists={artists} />
        </div>
      </StyledContent.Wrapper>
    );
  }
}

const mapStateToProps = store => ({
  artists: store.dataArtists.artists,
  recommended: store.dataArtists.recommended,
  artistsSuccess: store.dataArtists.artistsSuccess
});

export const ArtistsConnect = withStyles(styles)(connect(mapStateToProps, null)(Artists));

Artists.propTypes = {
  classes: objectOf(any).isRequired,
  artists: arrayOf(any).isRequired,
  recommended: arrayOf(any).isRequired,
  artistsSuccess: bool.isRequired
};
