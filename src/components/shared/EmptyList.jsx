import React from 'react';
import {
  objectOf, any, string,
  func
} from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import SearchSVG from '../../../assets/images/search-ring.svg';
import { openCloseSearch } from '../../store/autosuggest/actions';

const styles = () => ({
  root: {
    width: 412,
    margin: '178px auto',
    display: 'flex',
    flexDirection: 'column',
    '@media (max-width: 1023px)': {
      width: '310px',
      margin: '80px auto',
    }
  },
  searchRing: {
    margin: '0px auto',
    width: 98,
    height: 98,
    marginBottom: 29,
  },
  description: {
    width: 412,
    fontFamily: 'Roboto',
    fontSize: 15,
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 1.6,
    letterSpacing: 0.3,
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 0.5)',
    '@media (max-width: 1023px)': {
      width: 310,
      margin: '0px auto',
    }
  },
});

const EmptyList = ({
  classes, messageOne, messageTwo,
  showHideSearch
}) => (
  <div className={classes.root}>
    <img src={SearchSVG} className={classes.searchRing} title="Search" alt="Search" onClick={showHideSearch} />
    <div className={classes.description}>
      { messageOne }
      <br />
      { messageTwo }
    </div>
  </div>
);

const mapActionsToProps = dispatch => bindActionCreators({
  showHideSearch: openCloseSearch
}, dispatch);

export const EmptyListConnect = withStyles(styles)(withRouter(connect(null, mapActionsToProps)(EmptyList)));

EmptyList.propTypes = {
  classes: objectOf(any).isRequired,
  messageOne: string.isRequired,
  messageTwo: string.isRequired,
  showHideSearch: func.isRequired
};
