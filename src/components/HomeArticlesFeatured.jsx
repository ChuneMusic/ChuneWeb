import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { map } from 'lodash';
import { arrayOf, any } from 'prop-types';

import { BasicArticleCard } from './blocks';

export const FeaturedArticles = ({ featured }) => {
  if (featured.length === 0) {
    const mainArticle = {
      id: 10,
      image: 'https://www.billboard.com/files/styles/article_main_image/public/media/shakira-june-2018-billboard-1548.jpg',
      title: 'Smino Brings Out T-Pain For Epic "Chopped N Skrewed" Performance In Atlanta',
      source: 'hotnewhiphop',
    };

    const otherMainArticles = [
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
    return (
      <div>
        <div className="mainArticle">
          <BasicArticleCard
            image={mainArticle.image}
            title={mainArticle.title}
            source={mainArticle.source}
          />
        </div>
        <div className="otherMainArticles">
          {map(otherMainArticles, article => (
            <BasicArticleCard
              key={article.id}
              image={article.image}
              title={article.title}
              source={article.source}
            />
          ))}
        </div>
        <div className="otherMainArticlesMobile">
          {map(otherMainArticles, article => (
            <Card className="root" key={article.id}>
              <CardMedia
                className="media"
                image={article.image}
                title={article.title}
              />
              <div className="rightContainer">
                <CardContent className="cardBody">
                  <Typography
                    className="articleSource"
                    gutterBottom
                    variant="headline"
                    component="p"
                  >
                    via
                    {' '}
                    {article.source}
                  </Typography>

                  <Typography
                    className="headline"
                    gutterBottom
                    variant="headline"
                    component="h2"
                  >
                    {article.title}
                  </Typography>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    );
  }
  const firstFeatured = featured[0];
  const otherFeatured = featured.splice(1, 0);
  return (
    <div>
      <div className="mainArticle">
        <BasicArticleCard
          image={`https://chunesupply.s3.amazonaws.com/imgs/${firstFeatured.image}`}
          title={firstFeatured.title}
          source={firstFeatured.source_name}
        />
      </div>
      <div className="otherMainArticles">
        {map(otherFeatured, article => (
          <BasicArticleCard
            key={article.id}
            image={`https://chunesupply.s3.amazonaws.com/imgs/${article.image}`}
            title={article.title}
            source={article.source_name}
          />
        ))}
      </div>
      <div className="otherMainArticlesMobile">
        {map(otherFeatured, article => (
          <Card className="root" key={article.id}>
            <CardMedia
              className="media"
              image={`https://chunesupply.s3.amazonaws.com/imgs/${article.image}`}
              title={article.title}
            />
            <div className="rightContainer">
              <CardContent className="cardBody">
                <Typography
                  className="articleSource"
                  gutterBottom
                  variant="headline"
                  component="p"
                >
                  via
                  {' '}
                  {article.source_name}
                </Typography>

                <Typography
                  className="headline"
                  gutterBottom
                  variant="headline"
                  component="h2"
                >
                  {article.title}
                </Typography>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

FeaturedArticles.propTypes = {
  featured: arrayOf(any).isRequired
};
