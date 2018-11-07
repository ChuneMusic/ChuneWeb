import React from 'react';
import { objectOf, any } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const styles = () => ({
  root: {
    width: 716,
    height: 300,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 0,
    boxShadow: 'none',
    '@media (max-width: 1029px)': {
      width: '100vw',
      height: 300,
    }
  },
  artistName: {
    height: 40,
    fontFamily: 'Roboto',
    fontSize: 34,
    letterSpacing: 0.3,
  },
  genre: {
    margin: '0px 0px 10px 0px',
    height: 20,
    fontFamily: 'Roboto',
    fontSize: 14,
    lineHeight: 1.43,
    letterSpacing: 0.3,
    textTransform: 'uppercase',
  },
});

const ArtistWallpaper = (props) => {
  const { classes, artist } = props;

  const overrideBgStyle = {
    backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 0.5)), url(${artist.image_url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center left',
    backgroundRepeat: 'no-repeat',
    width: '180px',
    height: '180px',
    borderRadius: '100px',
  };
  const genre = artist.genres[0].description || 'POP';
  return (
    <Paper className={classes.root}>
      <div style={overrideBgStyle} />
      <div className={classes.genre}>
        {genre}
      </div>
      <div>
        <h3 className={classes.artistName}>{artist.name}</h3>
      </div>
    </Paper>
  );
};

ArtistWallpaper.propTypes = {
  classes: objectOf(any).isRequired,
  artist: objectOf(any).isRequired,
};

export const ArtistWallpaperConnect = withStyles(styles)(ArtistWallpaper);
