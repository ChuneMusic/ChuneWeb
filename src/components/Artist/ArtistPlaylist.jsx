import React from 'react';
import { connect } from 'react-redux';
import { Row, ProgressBar, Col } from 'react-materialize';

import { Player } from '../Music/Player';


const ArtistPlaylist = ({ tracks, artist }) => {
  if (tracks.length > 0) {
    const tracksSpotify = tracks.map(e => <Player key={e.id} trackId={e.spotify_id} />);
    return (
      <div>
        <div className="chune-feed-container">
          <Row style={{ marginBottom: 0 }}> <h2 className="chune-feed-title">Playlist for <span>{artist.name}</span></h2> </Row>
          <Row style={{ paddingLeft: 10, paddingRight: 10 }}>
            {tracksSpotify}
          </Row>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className="chune-feed-container">
        <Row style={{ marginBottom: 0 }}><h2 className="chune-feed-title">Playlist for {artist}</h2></Row>
        <Row>
          <Col s={12}>
            <ProgressBar className="chune-progressbar" color="cyan" />
          </Col>
        </Row>
      </div>
    </div>

  );
};

const mapStateToProps = store => ({
  tracks: store.dataArtists.tracks,
  artist: store.dataArtists.artist
});

export const ArtistPlaylistConnect = connect(mapStateToProps, null)(ArtistPlaylist);
