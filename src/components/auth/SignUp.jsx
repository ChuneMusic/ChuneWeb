import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
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
import {
  objectOf, any, func,
  string
} from 'prop-types';

// import { GoogleIcon, FacebookIcon, TwitterIcon } from '../shared/SocialIcons';
import { createNewUser } from '../../store/auth/actions';
import BackgroundPNG from '../../../assets/images/background.jpg';

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
      height: 450,
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
    marginTop: 40,
    color: 'white',
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
  errorMessage: {
    margin: '0 auto',
    color: 'red',
    fontSize: 12,
    marginTop: 18,
    width: 290,
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
    height: 47
  },
  inputStylesOverrides: {
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)'
  }
});

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      showPassword: false
    };
  }

  onNameChange = ({ target }) => {
    this.setState({ name: target.value });
  };

  onEmailChange = ({ target }) => {
    this.setState({ email: target.value });
  };

  onPassChange = ({ target }) => {
    this.setState({ password: target.value });
  }

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  }

  onSubmit = () => {
    const { email, password, name } = this.state;
    const { newUserBasic } = this.props;
    newUserBasic(email, password, name);
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      if (this.enableButton()) this.onSubmit();
    }
  }

  validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  validateNotBlank = value => value !== '';

  enableButton = () => {
    const { email, password, name } = this.state;
    return this.validateNotBlank(email)
    && this.validateNotBlank(name)
    && this.validateNotBlank(password)
    && this.validateEmail(email);
  }

  render() {
    const { classes, message } = this.props;
    const {
      email, password, name,
      showPassword
    } = this.state;
    return (
      <div className={classes.pageContainer}>
        <Paper className={classes.contentContainer}>
          <div className={classes.headingContainer}>
            <h3 className={classes.formHeading}>
              Sign Up
            </h3>
          </div>
          {/* <div className={classes.iconListContainer}>
            <ul className={classes.iconList}>
              <li className={classes.iconListItem}>
                <a href="https://chune-api.herokuapp.com/api/v1/users/social/login/twitter">
                  <TwitterIcon />
                </a>
              </li>
              <li className={classes.iconListItem}>
                <a href="https://chune-api.herokuapp.com/api/v1/users/social/login/facebook">
                  <FacebookIcon />
                </a>
              </li>
              <li className={classes.iconListItem}>
                <a href="https://chune-api.herokuapp.com/api/v1/users/social/login/google-oauth2">
                  <GoogleIcon />
                </a>
              </li>
            </ul>
          </div>
          <div className={classes.paragraphContainer}>
            <p className={classes.para}>
              Or use email instead
            </p>
          </div> */}
          <div className={classes.errorMessage}>
            {message || null}
          </div>
          <div className={classes.formContainer}>
            <form className={classes.signupForm} noValidate autoComplete="off" onKeyPress={this.handleKeyPress}>
              <div className={classes.inputStylesOverrides}>
                <TextField
                  label="Name"
                  InputProps={{
                    disableUnderline: true,
                  }}
                  className={classes.inputLabel}
                  onChange={this.onNameChange}
                  value={name}
                  type="text"
                  margin="normal"
                />
              </div>
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
                SIGN UP
              </Button>
            </form>
          </div>
          <div className={classes.footerContainer}>
            <p className={classes.footerLine}>
              Already have an account?
              {' '}
              <Link to="/login" style={{ color: '#6200ee', fontWeight: 500 }}>
                Log in
              </Link>
            </p>
          </div>
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  message: store.dataAuth.messageSignUp
});

const mapActionsToProps = dispatch => bindActionCreators({
  newUserBasic: createNewUser
}, dispatch);

export const SignUpConnect = withStyles(styles)(connect(mapStateToProps, mapActionsToProps)(SignUp));

SignUp.propTypes = {
  classes: objectOf(any).isRequired,
  newUserBasic: func.isRequired,
  message: string
};

SignUp.defaultProps = {
  message: undefined
};
