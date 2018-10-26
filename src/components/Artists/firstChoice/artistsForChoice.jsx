import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { objectOf, any, func } from 'prop-types';

import * as StyledArtists from '../../styled-components/artistsBlock';
import * as StyledCard from '../../styled-components/artistsCard';
import Check from '../../../../assets/images/control/check.svg';
import { addInArrayArtist } from '../../../store/artists/actions';

class ArtistsForChoice extends React.Component {
  state = {
    inActive: false
  }

  handleChange = () => {
    const { inActive } = this.state;
    const { addArtist, artist } = this.props;
    addArtist(artist.name);
    this.setState({ inActive: !inActive });
  }

  render() {
    const { artist } = this.props;
    const { inActive } = this.state;
    return (
      <StyledArtists.ButtonCheck onClick={this.handleChange}>
        <StyledArtists.OtherBlock image={artist.image_url} inActive={inActive}>
          <StyledCard.ArtistNameBlock>
            {artist.name}
          </StyledCard.ArtistNameBlock>
          {inActive ? (
            <StyledArtists.SVGCheck>
              <use xlinkHref={`${Check}#Check`} />
            </StyledArtists.SVGCheck>
          ) : null}
        </StyledArtists.OtherBlock>
      </StyledArtists.ButtonCheck>
    );
  }
}

const mapActionsToProps = dispatch => bindActionCreators({
  addArtist: addInArrayArtist
}, dispatch);

export const ArtistsForChoiceConnect = connect(null, mapActionsToProps)(ArtistsForChoice);

ArtistsForChoice.propTypes = {
  artist: objectOf(any).isRequired,
  addArtist: func.isRequired
};
