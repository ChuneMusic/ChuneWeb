import React from 'react';
import MediaQuery from 'react-responsive';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import FooterLogotypePNG from '../../../assets/images/landing/footer-logotype.png';
import FooterLogotypeMobilePNG from '../../../assets/images/landing/mobile/footer-logotype-mobile.png';

const styles = () => ({
  footer: {
    width: '100%',
    height: 193,
    backgroundColor: '#552e89',
    '@media (max-width: 800px)': {
      height: 412,
    },
    '& .footerContainer': {
      margin: '0px auto',
      backgroundColor: '#552e89',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: '54px 98px',
      '@media (max-width: 800px)': {
        width: 310,
        margin: '0px auto',
        flexDirection: 'column',
        justifyContent: 'center',
        height: 412,
        padding: 0,
      },
    },
    '& .leftSection': {
      paddingTop: 21,
      '@media (max-width: 800px)': {
        margin: '0px auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      },
    },
    '& .rightSection': {
      paddingTop: 21,
      '& .navContainer': {
        '@media (max-width: 800px)': {
          width: 98,
          margin: '0px auto',
          display: 'flex',
          flexDirection: 'column',
        },
      }
    },
    '& .navLink': {
      width: 90,
      height: 19,
      fontFamily: 'Open Sans',
      fontSize: 14,
      fontWeight: 'normal',
      fontStyle: 'normal',
      fontStretch: 'normal',
      lineHeight: 'normal',
      letterSpacing: 0.2,
      textAlign: 'right',
      color: '#ffffff',
      marginLeft: 32,
      '@media (max-width: 800px)': {
        textAlign: 'center',
        marginLeft: 0,
        marginTop: 30,
        width: 98,
      }
    }
  }
});

const Footer = (props) => {
  const { classes } = props;
  return (
    <footer className={classes.footer}>
      <div className="footerContainer">
        <div className="leftSection">
          <MediaQuery minWidth={1060}>
            <img src={FooterLogotypePNG} title="Chune Inc Logo" alt="Chune Inc Logo" />
          </MediaQuery>
          <MediaQuery maxWidth={1059}>
            <img src={FooterLogotypeMobilePNG} title="Chune Inc Logo" alt="Chune Inc Logo" />
          </MediaQuery>
        </div>
        <div className="rightSection">
          <div className="navContainer">
            <Link to="/privacy" className="navLink">Privacy Policy</Link>
            <Link to="/terms-of-use" className="navLink">Terms of Use</Link>
            <Link to="/faq" className="navLink">FAQ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const FooterConnect = withStyles(styles)(Footer);
