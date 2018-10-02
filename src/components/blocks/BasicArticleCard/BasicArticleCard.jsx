import React from 'react';
import { arrayOf, any } from 'prop-types';

import * as Styled from '../../styled-components/featureArticles';
import { truncateWithEllipses } from '../../../helpers/eventHelpers';

export const BasicArticleCard = ({ featured }) => {
  if (featured.length === 0) {
    const articles = [
      {
        id: 10,
        image: 'https://www.billboard.com/files/styles/article_main_image/public/media/shakira-june-2018-billboard-1548.jpg',
        title: 'Smino Brings Out T-Pain For Epic "Chopped N Skrewed" Performance In Atlanta',
        source: 'hotnewhiphop',
      },
      {
        id: 1,
        image: 'https://www.billboard.com/files/styles/1024x577/public/media/Gerard-Pique-of-FC-Barcelona-and-Shakira-2015-billboard-1548.jpg',
        title: "Shakira Supports Gerard Pique's Retirement With Beautiful Message on Instagram",
        source: 'Billboard',
      },
      {
        id: 2,
        image: 'https://www.billboard.com/files/styles/1024x577/public/media/carlos-vives-shakira-La-Bicicleta-2016-billboard-1548.jpg',
        title: 'The 10 Best Latin Summer Songs Ever',
        source: 'Billboard',
      },
      {
        id: 3,
        image: 'https://www.billboard.com/files/styles/1024x577/public/media/Shakira-Maluma-Clandestino-screenshot-2018-billboard-1548.jpg',
        title: "Shakira and Maluma's 'Clandestino' Hits Hot Latin Songs Chart's Top 10",
        source: 'Billboard',
      },
    ];
    const featuredArticle = articles.map((e, index) => {
      let t = e.title;
      if (index !== 0) t = truncateWithEllipses(e.title, 40);
      return (
        <Styled.FeaturedArticle images={e.image} key={`${e.id}-article-featured`}>
          <h2>{t}</h2>
          <p> via {e.source}</p>
        </Styled.FeaturedArticle>
      );
    });
    return (
      <Styled.WrapperFeatured>
        { featuredArticle }
      </Styled.WrapperFeatured>
    );
  }
  const featuredArticle = featured.map((e, index) => {
    let t = e.title;
    if (index !== 0) t = truncateWithEllipses(e.title, 40);
    return (
      <Styled.FeaturedArticle images={e.image} key={`${e.id}-article-featured`}>
        <h2>{t}</h2>
        <p> via {e.source_name}</p>
      </Styled.FeaturedArticle>
    );
  });
  return (
    <Styled.WrapperFeatured>
      { featuredArticle }
    </Styled.WrapperFeatured>
  );
};

BasicArticleCard.propTypes = {
  featured: arrayOf(any).isRequired
};
