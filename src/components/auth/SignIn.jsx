import React from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  objectOf, any, func,
  string
} from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { OauthSender } from 'react-oauth-flow';

import { loginUser, loginSocialUser } from '../../store/auth/actions';
import BackgroundPNG from '../../../assets/images/background.jpg';
import {
  GoogleIcon, FacebookIcon,
  TwitterIcon, SpotifyIcon2
} from '../shared/SocialIcons';


const styles = () => ({
  pageContainer: {
    backgroundImage: `url(${BackgroundPNG})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    '@media (max-width: 1029px)': {
      width: '100vw',
      alignItems: 'flex-start'
    }
  },
  contentContainer: {
    width: 342,
    height: 500,
    margin: '0 auto',
    flexDirection: 'column',
    borderRadius: 8,
    boxShadow: '0 6px 12px 0 rgba(0, 0, 0, 0.3), 0 0 2px 0 rgba(0, 0, 0, 0.12)',
    border: 'solid 1px transparent',
    backgroundImage: 'linear-gradient(#ffffff, #ffffff), linear-gradient(to bottom, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1) 5%, rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0))',
    display: 'flex',
    '@media (max-width: 1029px)': {
      margin: '60px auto 0 auto',
      width: 300,
      height: 500,
    }
  },
  headingContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 36,
    '@media (max-width: 1029px)': {
      marginTop: 20,
    }
  },
  iconListContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 34,
    height: 18,
    '@media (max-width: 1029px)': {
      marginTop: 20,
    }
  },
  paragraphContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 34,
    height: 15,
    '@media (max-width: 1029px)': {
      marginTop: 20,
    }
  },
  formContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 14,
  },
  footerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 34,
    marginBottom: 38,
    '@media (max-width: 1029px)': {
      marginTop: 20,
      marginBottom: 0,
    }
  },
  signupForm: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 290,
  },
  submitButton: {
    padding: 0,
    width: 96,
    height: 36,
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: 600,
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 1.13,
    letterSpacing: 1.3,
    textAlign: 'center',
    marginTop: 90,
    color: '#ffffff',
    backgroundColor: '#6200EE',
    '&:hover': {
      backgroundColor: 'rgba(98, 0, 238, 0.58)',
    },
    '&:focus': {
      backgroundColor: '#6200EE',
    },
    '&:disabled': {
      pointerEvents: 'none',
      cursor: 'default',
      backgroundColor: 'rgba(0, 0, 0, 0.87)',
      color: 'white',
      opacity: 0.12,
    },
  },
  formHeading: {
    width: 82,
    height: 28,
    fontFamily: 'Roboto',
    fontSize: 24,
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    textAlign: 'center',
    color: '#000000',
  },
  iconList: {
    margin: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 28,
    width: 190,
  },
  iconListItem: {
    cursor: 'pointer',
  },
  para: {
    width: 125,
    height: 16,
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: 300,
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    textAlign: 'center',
    color: '#000000',
  },
  footerLine: {
    margin: 0,
    height: 16,
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 0.5,
    textAlign: 'center',
    color: '#9b9b9b',
  },
  inputLabel: {
    top: 5,
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 1.5,
    letterSpacing: 'normal',
    color: 'rgba(0, 0, 0, 0.38)',
    width: 290,
    height: 47,
    '@media (max-width: 1029px)': {
      width: 260
    }
  },
  errorMessage: {
    margin: '0 auto',
    color: 'red',
    fontSize: 12,
    marginTop: 18,
    width: 290,
  },
  inputStylesOverrides: {
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)'
  }
});

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      showPassword: false,
      provider: ''
    };
  }

  onEmailChange = ({ target }) => {
    this.setState({ email: target.value });
  };

  onPassChange = ({ target }) => {
    this.setState({ password: target.value });
  };

  validateNotBlank = value => value !== '';

  validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  }

  enableButton = () => {
    const { email, password } = this.state;
    return this.validateNotBlank(email)
           && this.validateNotBlank(password)
           && this.validateEmail(email);
  }

  onSubmit = () => {
    const { email, password } = this.state;
    const { loginBasic } = this.props;
    loginBasic(email, password);
  }


  openSocial = (url, provider) => {
    this.setState({ provider });
    const w = 450;
    const h = 600;
    const dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : screen.left;
    const dualScreenTop = window.screenTop !== undefined ? window.screenTop : screen.top;
    const width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
    const height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

    const left = ((width / 2) - (w / 2)) + dualScreenLeft;
    const top = ((height / 2) - (h / 2)) + dualScreenTop;


    const newWin = window.open(url, '_blank', `alwaysRaised=yes, scrollbars=yes, width=${w}, height=${h}, top=${top}, left=${left}`);
    console.log(this.props.host, 'host su', newWin.location.href);
    const checkConnect = setInterval(() => {
      try {
        if (newWin.location.href.startsWith(this.props.host)) {
          clearInterval(checkConnect);
          this.authenticateSocial(newWin);
        }
      } catch (e) {
        console.log(e.message);
      }
    }, 100);
  }

    authenticateSocial = (popup) => {
      const url = popup.location.href;
      popup.close();
      console.log(url);
      const uri = url.split('?')[1];
      const params = uri.split('&');
      let code = null;
      if (params.length > 1) {
        params.forEach((p) => {
          const parts = p.split('=');
          const key = parts[0];
          const val = parts[1];
          if (key === 'code') {
            code = val;
          }
        });
      }
      if (!code) {
        alert('Something went wrong. Please try again');
        return;
      }

      const { loginSocial } = this.props;
      loginSocial(code, this.props.host, this.state.provider);
    }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.onSubmit();
    }
  }

  render() {
    const { classes, message, host } = this.props;
    const { email, password, showPassword } = this.state;
    const scope = 'user-read-private user-read-email user-read-playback-state user-modify-playback-state streaming user-read-birthdate user-read-currently-playing';
    return (
      <div className={classes.pageContainer}>
        <Paper className={classes.contentContainer}>
          <div className={classes.headingContainer}>
            <h3 className={classes.formHeading}>
              Log In
            </h3>
          </div>
          <div className={classes.iconListContainer}>
            <ul className={classes.iconList}>
              <li className={classes.iconListItem}>
                <OauthSender
                  authorizeUrl="https://www.facebook.com/v2.5/dialog/oauth?response_type=code&scope=email&display=popup"
                  clientId="177327102945347"
                  redirectUri={host}
                  state={{ from: '/settings' }}
                  render={({ url }) => (
                    <FacebookIcon
                      onClick={() => this.openSocial(url, 'facebook')}
                    />
                  )}
                />
              </li>
              <li className={classes.iconListItem}>
                <OauthSender
                  authorizeUrl="https://accounts.google.com/o/oauth2/v2/auth?scope=email"
                  clientId="243198086936-g6h4hfvujnoms1j5i4d76vjqk08pp7gd.apps.googleusercontent.com"
                  redirectUri={host}
                  state={{ from: '/settings' }}
                  render={({ url }) => (
                    <GoogleIcon
                      onClick={() => this.openSocial(url, 'google')}
                    />
                  )}
                />
              </li>
              <li className={classes.iconListItem}>
                <OauthSender
                  authorizeUrl={`https://accounts.spotify.com/authorize?scope=${encodeURIComponent(scope)}`}
                  clientId="a48cf79e2b704d93adef19d5bcd67530"
                  redirectUri={host}
                  state={{ from: '/settings' }}
                  render={({ url }) => (
                    <SpotifyIcon2
                      onClick={() => this.openSocial(url, 'spotify')}
                    />
                  )}
                />
              </li>
            </ul>
          </div>
          <div className={classes.errorMessage}>
            {message || null}
          </div>
          <div className={classes.formContainer}>
            <form className={classes.signupForm} noValidate autoComplete="off" onKeyPress={this.handleKeyPress}>
              <div className={classes.inputStylesOverrides}>
                <TextField
                  label="Email"
                  InputProps={{
                    disableUnderline: true,
                  }}
                  className={classes.inputLabel}
                  onChange={this.onEmailChange}
                  value={email}
                  type="email"
                  margin="normal"
                />
              </div>
              <div className={classes.inputStylesOverrides}>
                <FormControl className={classes.inputLabel} margin="normal">
                  <InputLabel htmlFor="adornment-password">Password</InputLabel>
                  <Input
                    id="adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={this.onPassChange}
                    disableUnderline
                    autoComplete="current-password"
                    endAdornment={(
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="Toggle password visibility"
                          onClick={this.handleClickShowPassword}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    )}
                  />
                </FormControl>
              </div>
              <Button className={classes.submitButton} onClick={this.onSubmit} disabled={!this.enableButton()}>
                  LOG IN
              </Button>
            </form>
          </div>
          <div className={classes.footerContainer}>
            <p className={classes.footerLine}>
                New user?
              {' '}
              <Link to="/signup" style={{ color: '#6200ee', fontWeight: 500 }}>
                Sign Up
              </Link>
              .
              {/* . Or
              {' '}
              <Link to="/reset-password" style={{ color: '#6200ee', fontWeight: 500 }}>
                Forgot Password
              </Link>
                ? */}
            </p>
          </div>
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  message: store.dataAuth.messageSignIn
});

const mapActionsToProps = dispatch => bindActionCreators({
  loginBasic: loginUser,
  loginSocial: loginSocialUser
}, dispatch);

export const SignInConnect = withStyles(styles)(connect(mapStateToProps, mapActionsToProps)(SignIn));

SignIn.propTypes = {
  classes: objectOf(any).isRequired,
  loginBasic: func.isRequired,
  message: string,
  loginSocial: func.isRequired
};

SignIn.defaultProps = {
  message: undefined,
  host: window.location.origin + '/'
};
