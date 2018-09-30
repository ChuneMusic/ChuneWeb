import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import Autosuggest from 'react-autosuggest';
import { withStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import {
  func, objectOf, any,
  arrayOf
} from 'prop-types';

import { searchArtists, clearListSearch } from '../store/autosuggest/actions';

import '../styles/autosuggestion.css';

const styles = () => ({
  root: {
    position: 'relative',
    height: 74,
    boxSizing: 'border-box',
    backgroundColor: 'white',
    opacity: 1,
  },
  container: {
    height: '100%',
    '@media (max-width: 1023px)': {
      height: '100%',
    }
  },
  closeIcon: {
    position: 'absolute',
    top: 17,
    right: 25,
    color: '#757575',
    cursor: 'pointer',
    width: 35,
    height: 35,
  }
});

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  componentDidMount() {
    const searchInput = document.getElementById('search-input');
    searchInput.focus();
  }

  getSuggestionValue = suggestion => suggestion.name

  renderSuggestion = suggestion => (
    <span>
      {suggestion.name}
    </span>
  )

  onSuggestionSelected = (event, { suggestion }) => {
    const { cancelSearch, history } = this.props;
    cancelSearch();
    history.push(`/artist/${suggestion.name}`);
  };

  onCloseClick = () => {
    const { cancelSearch } = this.props;
    cancelSearch();
  }


  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    clearTimeout(this.timeout);
    const { searchListArtists } = this.props;
    this.timeout = setTimeout(() => {
      searchListArtists(value);
    }, 300);
  };

  onSuggestionsClearRequested = () => {
    const { clearListArtists } = this.props;
    clearListArtists();
    this.setState({
      value: ''
    });
  };

  timer;

  render() {
    const { suggestions, classes } = this.props;
    const { value } = this.state;
    const inputProps = {
      placeholder: 'Search artists',
      value,
      style: {
        backgroundColor: 'white'
      },
      onChange: this.onChange,
      id: 'search-input',
    };
    return (
      <div className={classes.root}>
        <div>
          <Autosuggest
            id="search-bar"
            suggestions={suggestions}
            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
            onSuggestionSelected={this.onSuggestionSelected}
            getSuggestionValue={this.getSuggestionValue}
            renderSuggestion={this.renderSuggestion}
            inputProps={inputProps}
          />
          <CloseIcon className={classes.closeIcon} onClick={this.onCloseClick} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  suggestions: store.dataSearch.suggestions
});

const mapActionsToProps = dispatch => bindActionCreators({
  searchListArtists: searchArtists,
  clearListArtists: clearListSearch
}, dispatch);

export const SearchFormConnect = withStyles(styles)(withRouter(connect(mapStateToProps, mapActionsToProps)(SearchForm)));

SearchForm.propTypes = {
  suggestions: arrayOf(any).isRequired,
  classes: objectOf(any).isRequired,
  clearListArtists: func.isRequired,
  searchListArtists: func.isRequired,
  cancelSearch: func.isRequired,
  history: objectOf(any).isRequired
};
