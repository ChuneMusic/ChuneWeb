import React from 'react';
import MediaQuery from 'react-responsive';
import chunk from 'lodash/chunk';
import isEqual from 'lodash/isEqual';
import { objectOf, arrayOf, any } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import { RelatedArtistCardConnect } from './RelatedArtistCard';
import * as StyledArtists from '../styled-components/relatedArtists';

const styles = () => ({
  gridList: {
    margin: '0 !important',
    flexWrap: 'nowrap !important',
    '@media (max-width: 600px)': {
      width: '100vw',
      flexWrap: 'nowrap',
      transform: 'translateZ(0)',
      padding: '0 0 0 10px'
    }
  },
  gridListTile: {
    height: '258px !important',
    width: '345px !important',
    padding: '0 !important',
    margin: '0 22px 0 0',
    '@media (max-width: 600px)': {
      height: '250px !important',
      width: '250px !important',
      padding: '0 !important',
      margin: '0 5px 0 0'
    }
  }
});

class RelatedArtists extends React.Component {
  constructor(props) {
    super(props);
    const { relatedArtists } = this.props;
    const pages = chunk(relatedArtists, 3);
    this.state = {
      pages,
      totalPages: pages.length,
      currentPage: 0,
    };
  }

  componentDidUpdate(prevProps) {
    const { relatedArtists } = this.props;
    if (!isEqual(relatedArtists, prevProps.relatedArtists)) {
      const pages = chunk(relatedArtists, 3);
      this.setState({
        pages,
        totalPages: pages.length,
      });
    }
  }

  incrementPage = () => {
    const { currentPage, totalPages } = this.state;
    const newPage = (currentPage + 1) % totalPages;
    this.setState({
      currentPage: newPage,
    });
  }

  render() {
    const { classes, relatedArtists } = this.props;
    const { pages, currentPage, totalPages } = this.state;
    if (totalPages > 0) {
      const activeArtists = pages[currentPage];
      const newArray = activeArtists.map(e => (
        <GridListTile key={e.id} className={classes.gridListTile}>
          <RelatedArtistCardConnect artist={e} />
        </GridListTile>
      ));
      return (
        <StyledArtists.WrapperArtists>
          <StyledArtists.ArtistsHeader>
            <StyledArtists.ArtistsTitle>
              Recommended Artists
            </StyledArtists.ArtistsTitle>
            <StyledArtists.ArtistsButton onClick={this.incrementPage}>
              MORE
            </StyledArtists.ArtistsButton>
          </StyledArtists.ArtistsHeader>
          <MediaQuery minWidth={601}>
            <GridList cols={3} className={classes.gridList} cellHeight={258} spacing={30}>
              {newArray}
            </GridList>
          </MediaQuery>
          <MediaQuery maxWidth={600}>
            <GridList cols={1.25} className={classes.gridList} cellHeight={250} spacing={15}>
              {relatedArtists.map(e => (
                <GridListTile key={e.id} className={classes.gridListTile}>
                  <RelatedArtistCardConnect artist={e} />
                </GridListTile>
              ))}
            </GridList>
          </MediaQuery>
        </StyledArtists.WrapperArtists>
      );
    }
    return null;
  }
}

export const RelatedArtistsConnect = withStyles(styles)(RelatedArtists);

RelatedArtists.propTypes = {
  classes: objectOf(any).isRequired,
  relatedArtists: arrayOf(any).isRequired
};
