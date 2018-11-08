import React from 'react';
import MediaQuery from 'react-responsive';
import { objectOf, any } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { FooterConnect } from './shared/Footer';
import BackgroundPNG from '../../assets/images/background.jpg';
import ArtistOnePNG from '../../assets/images/landing/artist1.png';
import ArtistTwoPNG from '../../assets/images/landing/artist2.png';
import ArtistOneMobilePNG from '../../assets/images/landing/mobile/artist1-mobile.png';
import ArtistTwoMobilePNG from '../../assets/images/landing/mobile/artist2-mobile.png';
import ArticlePNG from '../../assets/images/landing/article-cards.png';
import ArticleMobilePNG from '../../assets/images/landing/mobile/article-cards-mobile.png';
import VideoPNG from '../../assets/images/landing/video-card.png';
import VideoMobilePNG from '../../assets/images/landing/mobile/video-card-mobile.png';
import AlbumPNG from '../../assets/images/landing/album-card.png';
import AlbumMobilePNG from '../../assets/images/landing/mobile/album-card-mobile.png';
import EventCardPNG from '../../assets/images/landing/event-cards.png';
import EventCardMobilePNG from '../../assets/images/landing/mobile/event-cards-mobile.png';

const styles = () => ({
  heroSectionContainer: {
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
    },
    '& .heroUnit': {
      width: 900,
      margin: '0px auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '@media (max-width: 1029px)': {
        width: 332,
        margin: '98px auto',
        alignItems: 'flex-start',
      },
      '& .heading': {
        width: 900,
        height: 96,
        fontFamily: 'Open Sans',
        fontSize: 36,
        fontWeight: 800,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.33,
        letterSpacing: 0.1,
        textAlign: 'center',
        color: '#ffffff',
        marginBottom: 22,
        marginTop: 0,
        '@media (max-width: 1029px)': {
          width: 332,
          height: 160,
          fontSize: 30,
          textAlign: 'left',
        },
      },
      '& .subHeading': {
        width: 716,
        height: 52,
        fontFamily: 'Open Sans',
        fontSize: 16,
        fontWeight: 600,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.63,
        letterSpacing: 0.1,
        textAlign: 'center',
        color: '#ffffff',
        marginBottom: 40,
        marginTop: 0,
        '@media (max-width: 1029px)': {
          width: 332,
          height: 72,
          fontSize: 14,
          textAlign: 'left',
        },
      },
    },
  },
  cta: {
    display: 'table-cell',
    verticalAlign: 'middle',
    width: 130,
    height: 52,
    borderRadius: 4,
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 8px 0 rgba(22, 8, 39, 0.5)',
    fontFamily: 'Open Sans',
    fontSize: 16,
    fontWeight: 800,
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 0.1,
    textAlign: 'center',
    color: '#9228c8',
    border: 'none',
    '&:focus': {
      backgroundColor: '#ffffff'
    },
    cusor: 'pointer',
  },
  ctaPurple: {
    display: 'table-cell',
    verticalAlign: 'middle',
    width: 130,
    height: 52,
    borderRadius: 4,
    backgroundColor: '#9228c8',
    boxShadow: '0 2px 8px 0 rgba(22, 8, 39, 0.5)',
    fontFamily: 'Open Sans',
    fontSize: 16,
    fontWeight: 800,
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 0.1,
    textAlign: 'center',
    color: '#ffffff',
    border: 'none',
    '&:focus': {
      backgroundColor: '#9228c8'
    },
    cusor: 'pointer',
  },
  headingStyle1: {
    width: 530,
    height: 48,
    fontFamily: 'Open Sans',
    fontSize: 36,
    fontWeight: 800,
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 1.33,
    letterSpacing: 0.1,
    textAlign: 'center',
    color: '#232323',
    marginTop: 122,
    marginBottom: 20,
    '@media (max-width: 1029px)': {
      marginTop: 100,
      width: 332,
    },
  },
  descriptionStyle1: {
    width: 530,
    height: 26,
    fontFamily: 'Open Sans',
    fontSize: 18,
    fontWeight: 600,
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 1.44,
    letterSpacing: 0.1,
    textAlign: 'center',
    color: '#515151',
    marginTop: 0,
    marginBottom: 47,
    '@media (max-width: 1029px)': {
      width: 332,
      height: 48,
    },
  },
  headingStyle2: {
    width: 530,
    height: 48,
    fontFamily: 'Open Sans',
    fontSize: 36,
    fontWeight: 800,
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 1.33,
    letterSpacing: 0.1,
    textAlign: 'center',
    color: '#ffffff',
    marginTop: 122,
    marginBottom: 20,
    '@media (max-width: 1029px)': {
      width: 332,
      marginTop: 100,
    },
  },
  descriptionStyle2: {
    width: 530,
    height: 26,
    fontFamily: 'Open Sans',
    fontSize: 18,
    fontWeight: 600,
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 1.44,
    letterSpacing: 0.1,
    textAlign: 'center',
    color: '#ffffff',
    marginTop: 0,
    marginBottom: 47,
    '@media (max-width: 1029px)': {
      width: 332,
      height: 48,
    },
  },
  whiteSection: {
    height: 760,
    width: '100%',
    margin: '0px auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '@media (max-width: 1029px)': {
      width: '100vw',
      margin: '0px auto',
      height: 910,
    },
    '& .artistCardsContainer': {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      width: 720,
      height: 354,
      marginTop: 0,
      marginBottom: 48,
      '@media (max-width: 1029px)': {
        width: 332,
        height: 536,
        flexDirection: 'column'
      },
      '& .artistCardImage': {
        '&:last-child': {
          marginLeft: -60,
          '@media (max-width: 1029px)': {
            margin: 0,
          },
        },
      },
    },
    '& .artistCardsContainerMobile': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      width: 375,
      height: 708,
      marginTop: 0,
      marginBottom: 48,
      '& .artistCardImage': {
        width: 375,
        height: 354,
        '&:last-child': {
          marginTop: -70,
        },
      },
    },
    '& .eventsCardContainer': {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      width: 813,
      height: 376,
      marginTop: 0,
      marginBottom: 142,
    },
    backgroundColor: '#fafafa',
  },
  purpleSection: {
    backgroundColor: '#9228c8',
    height: 790,
    width: '100%',
    margin: '0px auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '@media (max-width: 1029px)': {
      width: '100vw',
      height: 827,
      flexDirection: 'column'
    },
    '& .articleCardsContainer': {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      width: 769,
      height: 454,
      marginTop: 0,
      marginBottom: 46,
      '@media (max-width: 1029px)': {
        width: 375,
        height: 454,
        flexDirection: 'column'
      },
    },
  },
  videosSection: {
    height: 760,
    width: '100%',
    margin: '0px auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '@media (max-width: 1029px)': {
      width: '100vw',
      height: 673,
    },
    '& .videoCardContainer': {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      width: 529,
      height: 423,
      marginTop: 0,

      '@media (max-width: 1029px)': {
        width: 375,
        height: 369,
        marginBottom: 28,
      },
    },
    backgroundColor: '#fafafa',
  },
  albumSection: {
    backgroundColor: '#9228c8',
    height: 790,
    width: '100%',
    margin: '0px auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '@media (max-width: 1029px)': {
      width: '100vw',
      margin: '0px auto',
      height: 870,
    },
    '& .albumCardContainer': {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      width: 812,
      height: 350,
      marginTop: 0,
      marginBottom: 46,
      '@media (max-width: 1029px)': {
        width: 375,
        margin: '0px auto',
        height: 566,
      },
    },
  },
  eventsSection: {
    height: 842,
    width: '100%',
    margin: '0px auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '@media (max-width: 1029px)': {
      width: '100vw',
      margin: '0px auto',
      height: 940,
    },
    '& .eventsCardContainer': {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      width: 813,
      height: 376,
      marginTop: 0,
      marginBottom: 20,
      '@media (max-width: 1029px)': {
        width: 375,
        margin: '0px auto',
        height: 524,
      },
    },
    backgroundColor: '#fafafa',
  },
});

class Landing extends React.Component {
  componentWillMount() {
    const htmlBlock = document.getElementsByTagName('html');
    htmlBlock[0].style.overflow = 'auto';
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <div className={classes.heroSectionContainer}>
          <div className="heroUnit">
            <h3 className="heading">
              Follow your favorite artists and get a personalized music news feed
            </h3>
            <p className="subHeading">
              Read the latest news, watch the latest videos, listen to the latest albums, discover when your favorite artist is coming in town.
            </p>
            <div className="ctaContainer">
              <a className={classes.cta} href="/signup">
                Chune In
              </a>
            </div>
          </div>
        </div>
        <div className={classes.whiteSection}>
          <h4 className={classes.headingStyle1}>
            Artists
          </h4>
          <p className={classes.descriptionStyle1}>
            Follow your favorite artists.
          </p>
          <MediaQuery minWidth={1030}>
            <div className="artistCardsContainer">
              <img src={ArtistOnePNG} title="Dermot Kennedy" alt="Dermot Kennedy" />
              <img src={ArtistTwoPNG} title="Rejjie Snow" alt="Rejjie Snow" className="artistCardImage" />
            </div>
          </MediaQuery>
          <MediaQuery maxWidth={1029}>
            <div className="artistCardsContainerMobile">
              <img src={ArtistOneMobilePNG} title="Dermot Kennedy" alt="Dermot Kennedy" />
              <img src={ArtistTwoMobilePNG} title="Rejjie Snow" alt="Rejjie Snow" className="artistCardImage" />
            </div>
          </MediaQuery>
        </div>
        <div className={classes.purpleSection}>
          <h4 className={classes.headingStyle2}>
            Articles
          </h4>
          <p className={classes.descriptionStyle2}>
            Get the latest articles about your favorite artists.
          </p>
          <MediaQuery minWidth={1030}>
            <div className="articleCardsContainer">
              <img src={ArticlePNG} title="Articles" alt="Articles" />
            </div>
          </MediaQuery>
          <MediaQuery maxWidth={1029}>
            <div className="articleCardsContainer">
              <img src={ArticleMobilePNG} title="Articles" alt="Articles" />
            </div>
          </MediaQuery>
        </div>
        <div className={classes.videosSection}>
          <h4 className={classes.headingStyle1}>
            Videos
          </h4>
          <p className={classes.descriptionStyle1}>
            Get the latest videos about your favorite artists.
          </p>
          <MediaQuery minWidth={1030}>
            <div className="videoCardContainer">
              <img src={VideoPNG} title="Videos" alt="Videos" />
            </div>
          </MediaQuery>
          <MediaQuery maxWidth={1029}>
            <div className="videoCardContainer">
              <img src={VideoMobilePNG} title="Videos" alt="Videos" />
            </div>
          </MediaQuery>
        </div>
        <div className={classes.albumSection}>
          <h4 className={classes.headingStyle2}>
            Releases
          </h4>
          <p className={classes.descriptionStyle2}>
            Get the latest releases by your favorite artists.
          </p>
          <MediaQuery minWidth={1030}>
            <div className="albumCardContainer">
              <img src={AlbumPNG} title="Album" alt="Album" />
            </div>
          </MediaQuery>
          <MediaQuery maxWidth={1029}>
            <div className="albumCardContainer">
              <img src={AlbumMobilePNG} title="Album" alt="Album" />
            </div>
          </MediaQuery>
        </div>
        <div className={classes.eventsSection}>
          <h4 className={classes.headingStyle1}>
            Events
          </h4>
          <p className={classes.descriptionStyle1}>
            Know when your favorite artists are in town.
          </p>
          <MediaQuery minWidth={1030}>
            <div className="eventsCardContainer">
              <img src={EventCardPNG} title="Events" alt="Events" />
            </div>
          </MediaQuery>
          <MediaQuery maxWidth={1029}>
            <div className="eventsCardContainer">
              <img src={EventCardMobilePNG} title="Events" alt="Events" />
            </div>
          </MediaQuery>
          <div className="ctaContainer">
            <a className={classes.ctaPurple} href="/signup">
              Chune In
            </a>
          </div>
        </div>
        <FooterConnect />
      </React.Fragment>
    );
  }
}

export const LandingConnect = withStyles(styles)(Landing);

Landing.propTypes = {
  classes: objectOf(any).isRequired
};
