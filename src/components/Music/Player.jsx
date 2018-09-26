import React from 'react';

export const Player = ({ trackId }) => (
  <iframe
    title="Spotify"
    src={`https://embed.spotify.com/?uri=spotify:track:${trackId}`}
    width="100%"
    height="80"
    frameBorder="0"
    allowTransparency="true"
    allow="encrypted-media"
    theme="black"
  />
);
