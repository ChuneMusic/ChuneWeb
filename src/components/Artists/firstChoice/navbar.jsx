import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { any, arrayOf } from 'prop-types';

import { unfollowArtist, followArtist } from '../../../store/artists/actions';
import * as StyledArtists from '../../styled-components/artistsBlock';
import { followFromArtistPage } from '../../../store/learningMachine/actions';

const NavBar = ({ arrayArtists }) => {
  return (
    <StyledArtists.BlockButtons>
      {
        arrayArtists.map((e, index) => (
          <StyledArtists.ButtonNameArtist key={`${e}-${index}`}>
            <StyledArtists.SpanNameArtist>
              {e}
            </StyledArtists.SpanNameArtist>
          </StyledArtists.ButtonNameArtist>
        ))
      }
    </StyledArtists.BlockButtons>
  );
};

const mapStateToProps = store => ({
  arrayArtists: store.dataArtists.firstArray
});

const mapActionsToProps = dispatch => bindActionCreators({
  followToArtist: followArtist,
  unfollowToArtist: unfollowArtist,
  sendDataArtist: followFromArtistPage,
}, dispatch);

export const NavBarConnect = connect(mapStateToProps, mapActionsToProps)(NavBar);

NavBar.propTypes = {
  arrayArtists: arrayOf(any).isRequired
};
