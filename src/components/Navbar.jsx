import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { matchPath } from 'react-router';
import MediaQuery from 'react-responsive';
import { Link, NavLink, withRouter } from 'react-router-dom';
import {
  objectOf, any, func,
  bool, string
} from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import SettingsIcon from '@material-ui/icons/Settings';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { OauthSender } from 'react-oauth-flow';

import { SearchFormConnect } from './SearchForm';
import { SpotifyIcon } from './shared/SocialIcons';
import LogoSVG from '../../assets/images/Chune_Supply_Logotype_White.svg';
import { logOutUser } from '../store/auth/actions';
import * as StyledNavBar from './styled-components/navbar';
import { openCloseSearch } from '../store/autosuggest/actions';
import { openSocial } from '../utilities/authSocial';


const styles = () => ({
  navContainer: {
    height: 74,
    '@media (max-width: 1029px)': {
      height: 56,
    }
  },
  root: {
    flexGrow: 1,
    height: 74,
    backgroundColor: '#552e89',
    backgroundImage: 'linear-gradient(262deg, #9c05cd, #552e89)',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    margin: 0,
    '@media (max-width: 1029px)': {
      backgroundImage: 'linear-gradient(262deg, #9c05cd, #552e89)',
      height: 56,
    }
  },
  appBar: {
    width: '100%',
    height: 74,
    margin: '0px auto',
    '@media (max-width: 1029px)': {
      width: '100vw',
      backgroundImage: 'linear-gradient(262deg, #9c05cd, #552e89)',
      height: 56,
    }
  },
  gridContainer: {
    height: 74,
  },
  indicator: {
    backgroundColor: 'white',
    height: 5,
  },
  logoContainer: {
    height: 74,
    width: 95,
    paddingLeft: 95,
    paddingTop: 22,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    alignContent: 'flex-end',
    justify: 'center',
  },
  thetab: {
    height: 74,
    minWidth: 120,
    width: 120
  },
  labelContainer: {
    paddingLeft: '0 !important',
    paddingRight: '0 !important'
  },
  tabLabel: {
    fontFamily: 'Roboto',
    fontSize: 20,
    fontWeight: 'normal',
    lineHeight: 'normal',
    letterSpacing: 0.3,
    textAlign: 'right',
    textTransform: 'none'
  },
  avatar: {
    width: 32,
    height: 32
  },
  avatarContainer: {
    display: 'flex',
    alignItems: 'center',
    alignContent: 'flex-end',
    justifyContent: 'flex-end',
    textAlign: 'right',
    marginRight: 24,
    cursor: 'pointer',
    background: 'none',
    border: 0,
    color: 'white',
    outline: 'none',
  },
  settingsMenu: {
    borderRadius: 4,
  },
  settingsIconButton: {
    width: 38,
    height: 38,
    fontSize: 24,
    backgroundColor: 'transparent',
    color: 'white',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.16)',
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
    },
    '&:focus': {
      backgroundColor: 'rgba(255, 255, 255, 0.16)',
    },
    borderRadius: '50%',
    '@media (max-width: 1029px)': {
      width: 24,
      height: 24,
      fontSize: 24,
    }
  },
  mobileToolbar: {
    width: '100%',
    boxSizing: 'border-box',
    padding: '0px 16px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  mobileTitle: {
    fontFamily: 'Roboto',
    fontSize: 20,
    fontWeight: 500,
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 0.3,
    color: '#ffffff',
  },
  mobileToolbarLeftSection: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
    alignItems: 'center',
  },
  mobileToolbarRightSection: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '50%',
    alignItems: 'center',
  },
  drawerContainer: {
    width: 200,
    height: '100%',
    backgroundImage: 'rgba(255, 255, 255, 0.16)',
  },
  navLink: {
    color: '#552e89',
    fontSize: 17,
    fontFamily: 'Roboto',
    fontWeight: 500,
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 0.3,
    '&:hover': {
      backgroundImage: 'linear-gradient(262deg, #9c05cd, #552e89)',
    }
  },
  navLinkActive: {
    color: 'white',
    fontSize: 17,
    fontFamily: 'Roboto',
    fontWeight: 500,
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 0.3,
    '&:hover': {
      backgroundColor: 'white',
    }
  },
  listItem: {
    color: '#552e89',
    backgroundColor: 'white',
    fontSize: 17,
    '&:hover': {
      backgroundImage: 'linear-gradient(262deg, #9c05cd, #552e89)',
    }
  },
  activeListItem: {
    color: 'white',
    fontSize: 17,
    backgroundImage: 'linear-gradient(262deg, #9c05cd, #552e89)',
    '&:focus': {
      backgroundImage: 'linear-gradient(262deg, #9c05cd, #552e89)',
    }
  },
  menuButton: {
    width: 24,
    height: 24,
    '&:focus': {
      backgroundColor: 'transparent',
    }
  }
});

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      anchorEl: null,
      drawerOpen: false,
    };
  }

  componentWillMount() {
    const { location } = this.props;
    if (location.pathname.startsWith('/artist/')) return this.setState({ value: 2 });
    switch (location.pathname) {
      case '/home':
        return this.setState({ value: 0 });
      case '/for-you':
        return this.setState({ value: 1 });
      case '/artists':
        return this.setState({ value: 2 });
      case '/events':
        return this.setState({ value: 3 });
      case '/blog':
        return this.setState({ value: 4 });
      default:
        return null;
    }
  }

  componentWillReceiveProps(nextProps) {
    window.scrollTo(0, 0);
    const { location } = nextProps;
    if (location.pathname.startsWith('/artist/')) {
      return this.setState({ value: 2 });
    }
    if (location.pathname.startsWith('/event/')) {
      return this.setState({ value: 3 });
    }
    switch (location.pathname) {
      case '/home':
        return this.setState({ value: 0 });
      case '/for-you':
        return this.setState({ value: 1 });
      case '/artists':
        return this.setState({ value: 2 });
      case '/events':
        return this.setState({ value: 3 });
      case '/blog':
        return this.setState({ value: 4 });
      default:
        return null;
    }
  }

  getTitle = () => {
    const { history } = this.props;
    switch (history.location.pathname) {
      case '/home':
        return 'Home';
      case '/for-you':
        return 'Your Feed';
      case '/artists':
        return 'Artists';
      case '/events':
        return 'Events';
      case '/blog':
        return 'Blog';
      default:
        break;
    }
    if (history.location.pathname.startsWith('/artist/')) {
      return 'Artists';
    }
    if (history.location.pathname.startsWith('/event/')) {
      return 'Events';
    }
    return null;
  }

  matchPath = (targetPath) => {
    const match = matchPath(window.location.pathname, {
      path: targetPath,
      exact: true,
      strict: false
    });
    return match;
  }

  toggleDrawer = open => () => {
    this.setState({
      drawerOpen: open,
    });
  };

  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  goToRoute = (route) => {
    const { history } = this.props;
    history.push(route);
    this.setState({ anchorEl: null });
  };

  toggleSearch = () => {
    const { showHideSearch } = this.props;
    showHideSearch();
  }

  handleChange = (event, value) => {
    this.setState({ value });
  }

  render() {
    const { drawerOpen } = this.state;
    const {
      classes, logOut, searching,
      profile, host
    } = this.props;
    const scope = 'user-read-private user-read-email user-read-playback-state user-modify-playback-state streaming user-read-birthdate user-read-currently-playing';
    const { value, anchorEl } = this.state;
    const auth = 'OTHER';
    const spotify = profile ? (
      <MenuItem>
        <SpotifyIcon width="30px" height="30px" />
        &nbsp;{profile}
      </MenuItem>
    ) : (
      <OauthSender
        authorizeUrl={`https://accounts.spotify.com/authorize?scope=${encodeURIComponent(scope)}`}
        clientId="a48cf79e2b704d93adef19d5bcd67530"
        redirectUri={host}
        state={{ from: '/settings' }}
        render={({ url }) => (
          <MenuItem onClick={() => openSocial(url, 'spotify', host, auth)}>
            <SpotifyIcon width="30px" height="30px" />
            &nbsp;Spotify
          </MenuItem>
        )}
      />
    );
    const searchForm = <SearchFormConnect cancelSearch={this.toggleSearch} />;
    const normalMenu = (
      <header>
        <MediaQuery maxDeviceWidth={1109}>
          <div style={{ height: 56 }}>
            <StyledNavBar.NavBarMobile>
              <Toolbar className={classes.mobileToolbar}>
                <div className={classes.mobileToolbarLeftSection}>
                  <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={this.toggleDrawer(true)}>
                    <MenuIcon />
                  </IconButton>
                  <Typography variant="title" color="inherit" className={classes.mobileTitle}>
                    {this.getTitle()}
                  </Typography>
                  <Drawer open={drawerOpen} onClose={this.toggleDrawer(false)}>
                    <div className={classes.drawerContainer} role="button" onClick={this.toggleDrawer(false)}>
                      <List component="section" className={classes.drawerMenu}>
                        <NavLink exact to="/home" activeClassName={classes.navLinkActive} className={classes.navLink}>
                          <ListItem button className={this.matchPath('/home') ? classes.activeListItem : classes.listItem}>
                              Home
                          </ListItem>
                        </NavLink>
                        <NavLink exact to="/for-you" activeClassName={classes.navLinkActive} className={classes.navLink}>
                          <ListItem button className={this.matchPath('/for-you') ? classes.activeListItem : classes.listItem}>
                              Your Feed
                          </ListItem>
                        </NavLink>
                        <NavLink exact to="/artists" activeClassName={classes.navLinkActive} className={classes.navLink}>
                          <ListItem button className={this.matchPath('/artists') ? classes.activeListItem : classes.listItem}>
                              Artists
                          </ListItem>
                        </NavLink>
                        <NavLink exact to="/events" activeClassName={classes.navLinkActive} className={classes.navLink}>
                          <ListItem button className={this.matchPath('/events') ? classes.activeListItem : classes.listItem}>
                              Events
                          </ListItem>
                        </NavLink>
                        <NavLink exact to="/blog" activeClassName={classes.navLinkActive} className={classes.navLink}>
                          <ListItem button className={this.matchPath('/blog') ? classes.activeListItem : classes.listItem}>
                              Blog
                          </ListItem>
                        </NavLink>
                        <a href="https://chune-supply.myshopify.com/" target="_blank" rel="noopener noreferrer" className={classes.navLink}>
                          <ListItem button className={classes.listItem}>
                              Shop
                          </ListItem>
                        </a>
                      </List>
                    </div>
                    <IconButton classes={{ root: classes.settingsIconButton }} onClick={this.toggleSearch}>
                      <SearchIcon />
                    </IconButton>
                  </Drawer>
                  </div>
                </Toolbar>
              </StyledNavBar.NavBarMobile>
            </div>
          </MediaQuery>
        <MediaQuery minDeviceWidth={1110}>
          <div style={{ height: 74 }}>
            <StyledNavBar.NavBar>
              <StyledNavBar.NavBarLogoBlock>
                <StyledNavBar.NavBarLogo to="/home">
                  <img src={LogoSVG} height={30} title="Chune Supply Beta" alt="Chune Supply Beta" />
                  <sub>beta</sub>
                </StyledNavBar.NavBarLogo>
              </StyledNavBar.NavBarLogoBlock>
              <StyledNavBar.NavBarMenu>
                <StyledNavBar.NavBarMenuBlock>
                  <Tabs value={value} onChange={this.handleChange} fullWidth classes={{ root: classes.tabContainer, indicator: classes.indicator }}>
                    <Tab label={(<span className={classes.tabLabel}>Home</span>)} component={Link} to="/home" className={classes.thetab} classes={{ labelContainer: classes.labelContainer }} />
                    <Tab label={(<span className={classes.tabLabel}>Your Feed</span>)} component={Link} to="/for-you" className={classes.thetab} classes={{ labelContainer: classes.labelContainer }} />
                    <Tab label={(<span className={classes.tabLabel}>Artists</span>)} component={Link} to="/artists" className={classes.thetab} classes={{ labelContainer: classes.labelContainer }} />
                    <Tab label={(<span className={classes.tabLabel}>Events</span>)} component={Link} to="/events" className={classes.thetab} classes={{ labelContainer: classes.labelContainer }} />
                    <Tab label={(<span className={classes.tabLabel}>Blog</span>)} component={Link} to="/blog" className={classes.thetab} classes={{ labelContainer: classes.labelContainer }} />
                    <Tab label={(<span className={classes.tabLabel}>Shop</span>)} href="https://chune-supply.myshopify.com/" target="_blank" className={classes.thetab} classes={{ labelContainer: classes.labelContainer }} />
                  </Tabs>
                </StyledNavBar.NavBarMenuBlock>
                <StyledNavBar.NavBarSubMenu>
                  <IconButton
                    aria-owns={anchorEl ? 'simple-menu' : null}
                    aria-haspopup="true"
                    onClick={this.handleClick}
                    classes={{ root: classes.settingsIconButton }}
                  >
                    <SettingsIcon />
                  </IconButton>
                  <Menu
                    className={classes.settingsMenu}
                    id="simple-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'right',
                    }}
                    getContentAnchorEl={null}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                  >
                    <MenuItem onClick={() => this.goToRoute('/privacy')}>
                      Privacy Policy
                    </MenuItem>
                    <MenuItem onClick={() => this.goToRoute('/terms-of-use')}>
                      Terms of Use
                    </MenuItem>
                    {spotify}
                    {/* <MenuItem onClick={() => this.goToRoute('/faq')}>
                      FAQ
                    </MenuItem>
                    <MenuItem onClick={this.sendPasswordResetEmail}>
                      Reset Password
                    </MenuItem> */}
                    <MenuItem onClick={() => logOut()}>
                      Logout
                    </MenuItem>
                  </Menu>
                </StyledNavBar.NavBarSubMenu>
                <StyledNavBar.NavBarSearchBlock onClick={this.toggleSearch}>
                  <SearchIcon />
                </StyledNavBar.NavBarSearchBlock>
              </StyledNavBar.NavBarMenu>
            </StyledNavBar.NavBar>
          </div>
        </MediaQuery>
      </header>
    );
    return (
      <div>
        {searching ? searchForm : normalMenu}
      </div>
    );
  }
}

const mapStateToProps = store => ({
  profile: store.dataSpotify.profile,
  searching: store.dataSearch.inputSearch
});

const mapActionsToProps = dispatch => bindActionCreators({
  logOut: logOutUser,
  showHideSearch: openCloseSearch
}, dispatch);

export const NavBarConnect = withStyles(styles)(withRouter(connect(mapStateToProps, mapActionsToProps)(Navbar)));

Navbar.propTypes = {
  classes: objectOf(any).isRequired,
  profile: string.isRequired,
  history: objectOf(any).isRequired,
  location: objectOf(any).isRequired,
  logOut: func.isRequired,
  showHideSearch: func.isRequired,
  searching: bool.isRequired,
  host: string
};

Navbar.defaultProps = {
  host: `${window.location.origin}/`
};
