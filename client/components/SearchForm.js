import React from 'react';
import PropTypes from 'prop-types';
import Autosuggest from 'react-autosuggest'; 
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import CloseIcon from '@material-ui/icons/Close';
import { loadSuggestions, updateInputValue, clearSuggestions } from '../store/auto-suggestions';
import { fetchArtist } from '../store/currentArtist';

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { database, auth } from '../firebase'

const styles = (theme) => {
  return {
    suggestionContainer: {
      backgroundColor: 'white',
      opacity: 1,
      zIndex: 10,
      top: -10,
      '&:hover': {
        backgroundColor: "#552e89",
        color: 'white',
        opacity: 1,
      }
    },
    input: {
      //'important' modifier used because existing materialize styles interferes with JSS overrides
      // And we can't completely remove materialize at this stage yet.
      // TODO: remove 'important' modifiers once meterialize styles are removed.
      padding: "22px 24px 23px 40px!important",
      margin: "0px!important",
      height: "28px!important",
      minHeight: 28,
      transition: "all 2s!important",
      backgroundColor: "#ffffff",
      boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.14)",
      '&::placeholder': {
        fontFamily: "Roboto",
        fontSize: 24,
        fontWeight: "normal",
        fontStyle: "normal",
        fontStretch: "normal",
        lineHeight: "normal",
        letterSpacing: 0.3,
        color: "#757575",
      }
    },
    inputFocused: {
      borderColor: "#552e89!important",
      borderBottom: "1px solid #552e89!important",
      boxShadow: "0 1px 0 0 #552e89!important",
    },
    suggestionHighlighted: {
      backgroundColor: "#552e89",
      opacity: 1,
    },
    container: {
      height: 73,
    },
    closeIcon: {
      position: 'absolute',
      top: 27,
      right: 24,
      color: "#757575",
      cursor: 'pointer',
      width: 14,
      height: 14,
    }
  };
};

class SearchForm extends React.Component {
  componentDidMount() {
    var searchInput = document.getElementById('search-input');
    searchInput.focus();
  }

  render() {
    const userId = auth.currentUser.uid;
    const {
      value, suggestions, isLoading,
      onChange, onSuggestionsFetchRequested,
      onSuggestionsClearRequested, classes,
      resetSearch, cancelSearch,
    } = this.props;
    const inputProps = {
      placeholder: "Search artists",
      value,
      style: {},
      onChange,
      id: 'search-input',
    };

    const getSuggestionValue = (suggestion) => {
      return suggestion;
    }

    const renderSuggestion = (suggestion, { query, isHighlighted }) => {
      return (
        <MenuItem component="div" className={classes.suggestionContainer}>
          <div>
            {suggestion}
          </div>
        </MenuItem>
      );
    }

    const renderSuggestionsContainer = (options) => {
      const { containerProps, children } = options;

      return (
        <Paper {...containerProps} square>
          {children}
        </Paper>
      );
    }

    const onSuggestionSelected = (event, { suggestion }) => {
      database.ref(`users/${userId}/artists`).update({[suggestion]: true});
      resetSearch();
      cancelSearch();
      // I used window.location to reload the page because it's current behaviour.
      // I'd rather use react router to redirect to Artist page but current implmentation
      // of Artist page doesn't support internal redirect well yet
      // TODO: replace window.location redirect with React Router once Artist page has been modified
      window.location = `${window.location.origin}/Artist?n=${suggestion}`;
    };

    const onCloseClick = () => {
      resetSearch();
      cancelSearch();
    }

    return (
      <div>
        <div style={{margin: "0 auto", width: '100%'}}>
        <Autosuggest
          id="search-bar"
          theme={classes}
          suggestions={suggestions}
          onSuggestionsFetchRequested={onSuggestionsFetchRequested}
          onSuggestionsClearRequested={onSuggestionsClearRequested}
          onSuggestionSelected={onSuggestionSelected}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps} />
          <CloseIcon className={classes.closeIcon} onClick={onCloseClick} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state.artistAutosuggestions
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onChange(event, { newValue }) {
      dispatch(updateInputValue(newValue));
    },
    resetSearch() {
      dispatch(updateInputValue(''));
    },
    onSuggestionsFetchRequested({ value }) {
      dispatch(loadSuggestions(value));
    },
    onSuggestionsClearRequested() {
      dispatch(clearSuggestions());
    },
    loadArtist(name) {
      dispatch(fetchArtist(name));
    }
  };
}
export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(SearchForm));