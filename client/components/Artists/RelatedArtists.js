import React from 'react'
import chunk from 'lodash/chunk'
import isEqual from 'lodash/isEqual'
import { database, auth } from '../../firebase'
import { Row, Col, ProgressBar } from 'react-materialize'
import { connect } from 'react-redux'
import { addArtists, deleteArtist } from '../../store/artists';
import { fetchFollowingArtists } from '../../store/followingArtists';
import { withStyles } from '@material-ui/core/styles';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import FollowingArtist from './FollowingArtist'
import RelatedArtistCard from './RelatedArtistCard'
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    width: 1086,
    height: 350,
    marginLeft: 99,
    marginRight: 99,
  },
  subMenuContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 27,
  },
  recommendedArtistHeading: {
    width: 244,
    height: 28,
    fontFamily: "Roboto",
    fontSize: 24,
    fontWeight: "normal",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "normal",
    letterSpacing: 0.3,
    color: "#000000",
  },
  moreButton: {
    width: 104,
    height: 36,
    backgroundColor: 'rgba(98, 2, 238, 0)',
    border: 'solid 1px rgba(0, 0, 0, 0.12)',
    fontFamily: "Roboto",
    fontSize: 14,
    fontWeight: 500,
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: 1.14,
    letterSpacing: 1.3,
    textAlign: "center",
    color: "#6200ee",
    '&:hover': {
      backgroundColor: 'rgba(98, 2, 238, 0)',
    },
  },
  heading: {
    width: 283,
    height: 28,
    fontFamily: "Roboto",
    fontSize: 24,
    fontWeight: "normal",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "normal",
    letterSpacing: 0.3,
    color: "#000000",
  },
  gridList: {},
  gridListTile: {
    height: 260,
  },
  container: {
    backgroundColor: "#fafafa",
    width: '100%',
    paddingTop: 24,
  }
});

class RelatedArtists extends React.Component {

  constructor(props) {
    super(props);
    const pages = chunk(props.relatedArtists, 3);
    this.state = {
      pages: pages,
      totalPages: pages.length,
      currentPage: 0,
    }
  }

  componentDidUpdate(prevProps) {
    if(!isEqual(this.props.relatedArtists, prevProps.relatedArtists)) {
      const pages = chunk(this.props.relatedArtists, 3);

      this.setState({
        pages: pages,
        totalPages: pages.length,
      })
    }
  }

  incrementPage = () => {
    const newPage = (this.state.currentPage + 1) % this.state.totalPages;
    this.setState({
      currentPage: newPage,
    })
  }

  render() {
    const { classes, followHandler } = this.props;
    const { pages, currentPage, totalPages } = this.state;

    if(totalPages > 0) {
      const activeArtists = pages[currentPage];

      return (
        <div className={classes.root}>
          <div className={classes.subMenuContainer}>
            <div className={classes.recommendedArtistHeading}>Recommended Artists</div>
            <Button className={classes.moreButton} onClick={this.incrementPage}>MORE</Button>
          </div>
          <GridList cols={3} className={classes.gridList} cellHeight={260} spacing={29}>
            {
              activeArtists.map(relatedArtist => (
                <GridListTile key={relatedArtist.id} className={classes.gridListTile}>
                  <RelatedArtistCard artist={relatedArtist} followHandler={followHandler} />
                </GridListTile>
              ))
            }
          </GridList>
        </div>
      );
    } else {
      return (
        <div>
            <div className="chune-feed-container">
              <h3 className={classes.heading}>Related Artists</h3>
              <Row>
                <Col s={12}>
                  <ProgressBar className="chune-progressbar" color="cyan" />
                </Col>
              </Row>
          </div>
        </div>
      )
    }
  }
};

export default withStyles(styles)(RelatedArtists);