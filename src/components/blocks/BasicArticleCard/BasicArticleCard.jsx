import React from 'react';
import { string } from 'prop-types';

import './BasicArticleCard.css';

export const BasicArticleCard = ({ image, title, source }) => (
  <div
    className="basicArticleCardWrapper"
    style={{ backgroundImage: `url(${image || null})` }}
  >
    <h2 className="title">{title}</h2>
    <p className="resourceName"> via {source}</p>
  </div>
);

BasicArticleCard.propTypes = {
  image: string.isRequired,
  title: string.isRequired,
  source: string.isRequired
};
