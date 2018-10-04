import React from 'react';
import { objectOf, any } from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MediaQuery from 'react-responsive';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import MobileLogoSVG from '../../../assets/images/mobile-logo.svg';
import MobileLogoColorSVG from '../../../assets/images/mobile-logo-color.svg';
import LogotypeColorSVG from '../../../assets/images/Chune_Supply_Logotype_Color.svg';
import LogotypeSVG from '../../../assets/images/Chune_Supply_Logotype_White.svg';

const styles = () => ({
  root: {
    width: '100%',
    flexGrow: 1,
    height: 64,
    transition: 'all 0.8s',
    position: 'absolute',
    zIndex: 10,
    '@media (max-width: 1023px)': {
      width: '100vw',
    }
  },
  topBarContainer: {
    height: 64,
    width: '99%',
    margin: '0 auto',
  },
  topBarContainerAbsolute: {
    height: 64,
    width: '99%',
    margin: '0 auto',
    position: 'absolute'
  },
  indicator: {
    backgroundColor: 'white',
    height: 5,
  },
  logoContainer: {
    height: 64,
    width: 130,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 0 0 80px'
  },
  menuList: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 64,
    '& .menuListItem': {
      paddingTop: 0,
      paddingLeft: 10,
      paddingRight: 10,
      textAlign: 'center',
      marginLeft: 32,
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    '& .menuLink': {
      height: 16,
      fontFamily: 'Open Sans',
      fontSize: 14,
      fontWeight: 'normal',
      fontStyle: 'normal',
      fontStretch: 'normal',
      lineHeight: 'normal',
      letterSpacing: 0.2,
      textAlign: 'center',
      color: '#ffffff',
    },
  },
  menuListColor: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 64,
    '& .menuListItem': {
      paddingTop: 0,
      paddingLeft: 10,
      paddingRight: 10,
      textAlign: 'center',
      marginLeft: 32,
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    '& .menuListItem.active': {
      borderTop: '5px solid #9228c8',
      height: 55,
      marginTop: -6,
      '& .menuLink': {
        fontWeight: 'bold',
      },
    },
    '& .menuLink': {
      height: 16,
      fontFamily: 'Open Sans',
      fontSize: 14,
      fontWeight: 'normal',
      fontStyle: 'normal',
      fontStretch: 'normal',
      lineHeight: 'normal',
      letterSpacing: 0.2,
      textAlign: 'center',
      color: '#232323',
    },
  },
  rightMenuList: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 64,
    '& .menuListItem': {
      width: 99,
      paddingTop: 0,
      textAlign: 'center',
      marginLeft: 32,
    },
    '& .rightMenuLink': {
      width: 89,
      height: 16,
      fontFamily: 'Open Sans',
      fontSize: 14,
      fontWeight: 'bold',
      fontStyle: 'normal',
      fontStretch: 'normal',
      lineHeight: 'normal',
      letterSpacing: 1.3,
      textAlign: 'right',
      color: '#ffffff',
      textTransform: 'uppercase',
    },
  },
  rightMenuListColor: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 64,
    '& .menuListItem': {
      width: 99,
      paddingTop: 0,
      textAlign: 'center',
      marginLeft: 32,
      '& .rightMenuLink': {
        width: 89,
        height: 16,
        fontFamily: 'Open Sans',
        fontSize: 14,
        fontWeight: 'bold',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 1.3,
        textAlign: 'right',
        color: '#232323',
        textTransform: 'uppercase',
      },
    },
  },
  mobileTopbarContainer: {
    width: '100vw',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0px 19px',
    position: 'absolute'
  },
  mobileTopbarContainerColor: {
    width: '100vw',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0px 19px',
    backgroundColor: '#792aae',
  },
  menuButton: {
    width: 24,
    height: 24,
    '&:focus': {
      backgroundColor: 'transparent',
    }
  },
  menuButtonClose: {
    width: 24,
    height: 24,
    color: 'black',
    '&:focus': {
      backgroundColor: 'transparent',
    }
  },
  mobileToolbarLeftSection: {
    paddingTop: 15,
    paddingBottom: 6,
  },
  mobileToolbarRightSection: {
    paddingTop: 3,
    color: 'white',
  },
  drawerContainer: {
    width: '100vw',
    height: '100%',
    backgroundColor: 'white',
    color: '#0f0f0f',
  },
  drawerMenu: {
    padding: 0,
    margin: '60px 0 0 0'
  },
  listItem: {
    width: 200,
    margin: '22px auto',
    backgroundColor: 'white',
    textAlign: 'center',
    fontSize: 17,
  },
  listItemLink: {
    width: 200,
    fontFamily: 'Open Sans',
    fontSize: 14,
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: '#0f0f0f',
  },
  listItemLinkPrimary: {
    width: 200,
    fontFamily: 'Open Sans',
    fontSize: 14,
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: '#9228c8',
    textTransform: 'uppercase',
  }
});

class GuestNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: false,
    };
  }

  toggleDrawer = open => () => {
    this.setState({
      drawerOpen: open,
    });
  };

  render() {
    const activePage = window.location.pathname;
    let alternateColor = false;
    if (activePage === '/faq' || activePage === '/terms-of-use' || activePage === '/privacy') alternateColor = true;
    const { classes } = this.props;
    const { drawerOpen } = this.state;
    return (
      <div>
        <MediaQuery maxDeviceWidth={1023}>
          <div className={alternateColor ? classes.mobileTopbarContainerColor : classes.mobileTopbarContainer}>
            <div className={classes.mobileToolbarLeftSection}>
              <Link to="/">
                <img src={MobileLogoSVG} width={27} height={30} title="Logo" alt="Logo" />
              </Link>
            </div>
            <div className={classes.mobileToolbarRightSection}>
              <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={this.toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
              <Drawer open={drawerOpen} onClose={this.toggleDrawer(false)}>
                <div className={classes.drawerContainer}>
                  <div className={classes.mobileTopbarContainer}>
                    <div className={classes.mobileToolbarLeftSection}>
                      <img src={MobileLogoColorSVG} width={27} height={30} title="Logo" alt="Logo" />
                    </div>
                    <div className={classes.mobileToolbarRightSection}>
                      <IconButton className={classes.menuButtonClose} color="inherit" aria-label="Menu" onClick={this.toggleDrawer(false)}>
                        <CloseIcon />
                      </IconButton>
                    </div>
                  </div>
                  <List component="section" className={classes.drawerMenu}>
                    <ListItem button disableRipple className={classes.listItem}>
                      <Link className={classes.listItemLink} to="/privacy">
                        Privacy Policy
                      </Link>
                    </ListItem>
                    <ListItem button disableRipple className={classes.listItem}>
                      <Link className={classes.listItemLink} to="/terms-of-use">
                        Terms of Use
                      </Link>
                    </ListItem>
                    <ListItem button disableRipple className={classes.listItem}>
                      <Link className={classes.listItemLink} to="/faq">
                        FAQ
                      </Link>
                    </ListItem>
                    <ListItem button disableRipple className={classes.listItem}>
                      <Link className={classes.listItemLinkPrimary} to="/signup">
                        Sign Up
                      </Link>
                    </ListItem>
                    <ListItem button disableRipple className={classes.listItem}>
                      <Link className={classes.listItemLinkPrimary} to="/login">
                        Log In
                      </Link>
                    </ListItem>
                  </List>
                </div>
              </Drawer>
            </div>
          </div>
        </MediaQuery>
        <MediaQuery minDeviceWidth={1024}>
          <Grid
            container
            alignItems="flex-end"
            alignContent="flex-end"
            direction="row"
            justify="center"
            className={alternateColor ? classes.topBarContainer : classes.topBarContainerAbsolute}
          >
            <Grid item xs={1}>
              <div className={classes.logoContainer}>
                <Link to="/">
                  <img src={alternateColor ? LogotypeColorSVG : LogotypeSVG} height={30} title="Logo" alt="Logo" />
                  <sub className={alternateColor ? 'betaLogoColor' : 'betaLogo'}>beta</sub>
                </Link>
              </div>
            </Grid>
            <Grid item xs={8}>
              <ul className={alternateColor ? classes.menuListColor : classes.menuList}>
                <li className={`menuListItem ${activePage === '/privacy' ? 'active' : ''}`}>
                  <Link className="menuLink" to="/privacy">
                    Privacy Policy
                  </Link>
                </li>
                <li className={`menuListItem ${activePage === '/terms-of-use' ? 'active' : ''}`}>
                  <Link className="menuLink" to="/terms-of-use">
                    Terms of Use
                  </Link>
                </li>
                <li className={`menuListItem ${activePage === '/faq' ? 'active' : ''}`}>
                  <Link className="menuLink" to="/faq">
                    FAQ
                  </Link>
                </li>
              </ul>
            </Grid>
            <Grid item xs={3}>
              <ul className={alternateColor ? classes.rightMenuListColor : classes.rightMenuList}>
                <li className="menuListItem">
                  <Link className="rightMenuLink" to="/signup">
                    Sign Up
                  </Link>
                </li>
                <li className="menuListItem">
                  <Link className="rightMenuLink" to="/login">
                    Log In
                  </Link>
                </li>
              </ul>
            </Grid>
          </Grid>
        </MediaQuery>
      </div>
    );
  }
}

GuestNavbar.propTypes = {
  classes: objectOf(any).isRequired
};

export const GuestNavbarConnect = withStyles(styles)(GuestNavbar);
