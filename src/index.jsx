import React from 'react';
import ReactDOM from 'react-dom';
import {
  Route, Redirect, Switch,
  withRouter
} from 'react-router-dom';
import { connect, Provider } from 'react-redux';
import mixpanel from 'mixpanel-browser';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { PersistGate } from 'redux-persist/integration/react';
import { ConnectedRouter } from 'connected-react-router';

import { store, persistor, history } from './store';
import {
  ArtistsConnect, ArtistConnect, HomeConnect,
  LandingConnect, TermsOfUseConnect, PrivacyPolicyConnect, FAQConnect,
  SignUpConnect, SignInConnect,
  EventsConnect, ArtistEventsConnect, NavBarConnect,
  GuestNavbarConnect, ForYouConnect, blogiFrame
} from './components';
import { ModalBlockConnect } from './components/Music/modalAudioPlayer';
import { ModalNewsConnect } from './components/News/modalNews';

import './styles/reset.css';
import './styles/global.css';
import './styles/artists.css';


mixpanel.init('34f4d0ce6ee0830af62b12a7d0e53e1f');

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#552e89',
    },
  },
  status: {
    danger: 'orange',
  },
});

function PrivateRoute({ component: Component, token, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (token) {
          return <Component {...props} />;
        }
        return <Redirect to={{ pathname: '/', state: { from: props.location } }} />;
      }
      }
    />
  );
}

function PublicRoute({ component: Component, token, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => (!token
        ? <Component {...props} />
        : <Redirect to="/home" />)}
    />
  );
}

class App extends React.PureComponent {
  render() {
    const {
      token, modal,
      modalNews, topTracks
    } = this.props;
    const newsModal = modalNews ? <ModalNewsConnect /> : null;
    const musicPlayer = modal ? (
      <ModalBlockConnect
        playlist={topTracks}
      />
    ) : null;
    let navbar = false;
    if (token) navbar = true;
    return (
      <div>
        {newsModal}
        {musicPlayer}
        { navbar ? <NavBarConnect /> : <GuestNavbarConnect />}
        <Switch>
          <PublicRoute exact path="/" token={token} component={LandingConnect} />
          <PublicRoute exact path="/signup" token={token} component={SignUpConnect} />
          <PublicRoute exact path="/login" token={token} component={SignInConnect} />
          <Route exact path="/terms-of-use" token={token} render={props => (<TermsOfUseConnect token={token} {...props} />)} />
          <Route exact path="/privacy" token={token} render={props => (<PrivacyPolicyConnect token={token} {...props} />)} />
          <Route exact path="/faq" token={token} render={props => (<FAQConnect token={token} {...props} />)} />
          <PrivateRoute exact path="/home" token={token} component={HomeConnect} />
          <PrivateRoute exact path="/for-you" token={token} component={ForYouConnect} />
          <PrivateRoute exact path="/artists" token={token} component={ArtistsConnect} />
          <PrivateRoute exact path="/artist/:artistName" token={token} component={ArtistConnect} />
          <PrivateRoute exact path="/events" token={token} component={EventsConnect} />
          <PrivateRoute exact path="/event/:artistName" token={token} component={ArtistEventsConnect} />
          <PrivateRoute exact path="/blog" token={token} component={blogiFrame} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  topTracks: state.dataContent.topTracks,
  token: state.dataAuth.token,
  modalNews: state.dataContent.modal,
  modal: state.dataSpotify.modal
});

const ChuneApp = withRouter(connect(mapStateToProps, null)(App));

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConnectedRouter history={history}>
          <ChuneApp />
        </ConnectedRouter>
      </PersistGate>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);
