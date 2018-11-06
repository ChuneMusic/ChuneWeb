import React from 'react';
import { arrayOf, any, func } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as Styled from '../../styled-components/featureArticles';
import { truncateWithEllipses } from '../../../helpers/eventHelpers';
import { openArticleUrl } from '../../../store/content/actions';
import { openFeaturedArticleUser } from '../../../store/learningMachine/actions';


class BasicArticleCard extends React.Component {
  openFeaturedArticle = (id, url, title) => {
    const { openNews, sendOpenArticleUser } = this.props;
    const date = new Date();
    openNews(id, url, title, true);
    sendOpenArticleUser(id, date);
  }

  render() {
    const { featured } = this.props;
    if (featured.length === 0) {
      return null;
    }
    const featuredArticle = featured.map((e, index) => {
      let t = e.title;
      if (window.innerWidth >= 960) {
        if (index === 0) t = truncateWithEllipses(e.title, 90);
        if (index !== 0) t = truncateWithEllipses(e.title, 38);
      } else {
        t = truncateWithEllipses(e.title, 40);
      }
      const img = e.image.startsWith('static/') ? (
        `https://api-stage.chunesupply.com/${e.image}`
      ) : (
        `https://api-stage.chunesupply.com/static/imgs/full/${e.image}`
      );
      return (
        <Styled.FeaturedArticle
          images={img}
          key={`${e.id}-article-featured`}
          onClick={() => this.openFeaturedArticle(e.id, e.url, e.title)}
        >
          <Styled.FeaturedArticleTitle>{t}</Styled.FeaturedArticleTitle>
        </Styled.FeaturedArticle>
      );
    });
    return (
      <Styled.WrapperFeatured>
        { featuredArticle }
      </Styled.WrapperFeatured>
    );
  }
}

const mapActionsToProps = dispatch => bindActionCreators({
  openNews: openArticleUrl,
  sendOpenArticleUser: openFeaturedArticleUser
}, dispatch);

export const BasicArticleCardConnect = connect(null, mapActionsToProps)(BasicArticleCard);

BasicArticleCard.propTypes = {
  featured: arrayOf(any).isRequired,
  openNews: func.isRequired,
  sendOpenArticleUser: func.isRequired
};
