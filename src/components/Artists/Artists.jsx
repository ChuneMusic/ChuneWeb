import React from 'react';
import { connect } from 'react-redux';
import { arrayOf, any, bool } from 'prop-types';

import { RelatedArtistsConnect } from './RelatedArtists';
import { FollowingConnect } from './Following';
import { EmptyListConnect } from '../shared/EmptyList';
import { Loading } from '../shared/Loading';
import { FirstArtistsConnect } from './firstArtists';
import * as StyledContent from '../styled-components/content';

class Artists extends React.Component {
  componentWillMount() {
    const htmlBlock = document.getElementsByTagName('html');
    htmlBlock[0].style.overflow = 'hidden';
  }

  render() {
    const {
      artists, recommended, artistsSuccess,
      modal, followArtists, firstListArtists
    } = this.props;
    if (!artistsSuccess) return <Loading />;
    if (followArtists && firstListArtists.length !== 0) {
      return (
        <FirstArtistsConnect artists={firstListArtists} />
      );
    }
    if (artists.length === 0) {
      return (
        <EmptyListConnect
          messageOne="You didn't follow any artists yet."
          messageTwo="Search to find and follow artists."
        />
      );
    }
    return (
      <StyledContent.Wrapper modal={modal}>
        <RelatedArtistsConnect relatedArtists={recommended} />
        <FollowingConnect artists={artists} />
      </StyledContent.Wrapper>
    );
  }
}

const mapStateToProps = store => ({
  artists: store.dataArtists.artists,
  recommended: store.dataArtists.recommended,
  artistsSuccess: store.dataArtists.artistsSuccess,
  modal: store.dataSpotify.modal,
  followArtists: store.dataContent.followArtists,
  firstListArtists: store.dataArtists.firstListArtists
});

export const ArtistsConnect = connect(mapStateToProps, null)(Artists);

Artists.propTypes = {
  artists: arrayOf(any).isRequired,
  recommended: arrayOf(any).isRequired,
  artistsSuccess: bool.isRequired,
  modal: bool.isRequired,
  followArtists: bool.isRequired,
  firstListArtists: arrayOf(any).isRequired
};
