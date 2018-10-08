import React from 'react';
import { string } from 'prop-types';

export const Player = ({ url, title, refer }) => (
  <iframe
    title={title}
    width="100%"
    height="100%"
    id="ytplayer"
    type="text/html"
    src={`//www.youtube.com/embed/${url}`}
    frameBorder="0"
    allowFullScreen="1"
    rel="0"
    ref={refer}
  />
);

Player.propTypes = {
  url: string.isRequired,
  title: string.isRequired
};
