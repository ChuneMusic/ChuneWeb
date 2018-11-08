import React from 'react';
import {
  any, arrayOf, string,
  func
} from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as StyledContent from '../styled-components/content';
import * as StyledArtists from '../styled-components/artistsBlock';
import { ArtistsForChoiceConnect } from './firstChoice/artistsForChoice';
import { NavBarConnect } from './firstChoice/navbar';
import { sendArrayFirstChoice, skipChoiceArtists } from '../../store/artists/actions';

class FirstArtists extends React.Component {
  state = {
    select: 0,
    value: {
      0: ['Select 3', '0'],
      1: ['Select 2', '33%'],
      2: ['Select 1', '66%']
    }
  }

  componentWillReceiveProps(nextProps) {
    const { arrayArtists } = nextProps;
    this.setState({ select: arrayArtists.length });
  }

  sendArrayArtists = (artists) => {
    const { sendArtists } = this.props;
    sendArtists(artists);
  }

  render() {
    const { artists, arrayArtists, skipChoice } = this.props;
    const { select, value } = this.state;
    let btn = null;
    let widthColor = null;
    if (select <= 2) {
      btn = <StyledArtists.ButtonSend onClick={() => this.sendArrayArtists(arrayArtists)}>{value[select][0]}</StyledArtists.ButtonSend>;
      widthColor = value[select][1];
    } else {
      btn = <StyledArtists.ButtonSend onClick={() => this.sendArrayArtists(arrayArtists)}>Next</StyledArtists.ButtonSend>;
      widthColor = '100%';
    }
    return (
      <div>
        <StyledArtists.FirstArtistsHeader>
          <NavBarConnect />
          <StyledArtists.DivBlockSend>
            <StyledArtists.DivColorBlock widthColor={widthColor} />
            {btn}
          </StyledArtists.DivBlockSend>
        </StyledArtists.FirstArtistsHeader>
        <StyledContent.WrapperFirstChoice>
          <StyledArtists.WrapperArtists>
            <StyledArtists.FirstArtistsBody>
              <StyledArtists.FirstBlock>
                <StyledArtists.DescriptionPage>
                  {'Who are your favorite artists?'}
                </StyledArtists.DescriptionPage>
                <StyledArtists.TextPage>
                  {'Pick at least 3 to get started.'}
                </StyledArtists.TextPage>
              </StyledArtists.FirstBlock>
              {
                artists.map(artist => (
                  <ArtistsForChoiceConnect
                    artist={artist}
                    key={`${artist.id}-${artists.name}`}
                  />
                ))
              }
            </StyledArtists.FirstArtistsBody>
            <StyledArtists.DivBlockSkip>
              <StyledArtists.ButtonSkip onClick={skipChoice}>Skip</StyledArtists.ButtonSkip>
            </StyledArtists.DivBlockSkip>
          </StyledArtists.WrapperArtists>
        </StyledContent.WrapperFirstChoice>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  arrayArtists: store.dataArtists.firstArray
});

const mapActionsToProps = dispatch => bindActionCreators({
  sendArtists: sendArrayFirstChoice,
  skipChoice: skipChoiceArtists
}, dispatch);

export const FirstArtistsConnect = connect(mapStateToProps, mapActionsToProps)(FirstArtists);

FirstArtists.propTypes = {
  artists: arrayOf(any).isRequired,
  arrayArtists: arrayOf(string).isRequired,
  sendArtists: func.isRequired,
  skipChoice: func.isRequired
};
