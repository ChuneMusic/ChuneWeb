import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { objectOf, any, func } from 'prop-types';

import { timestampToDate } from '../../helpers/populateArticles';
import { openArticleUrl } from '../../store/content/actions';
import * as StyledArticle from '../styled-components/article';
import { truncateWithEllipses } from '../../helpers/eventHelpers';

const ArticleCard = ({ article, openNews }) => {
  const formattedDate = article.published_on ? timestampToDate(article.published_on) : '';
  return (
    <StyledArticle.Article>
      <StyledArticle.ArticleImages images={`https://chunesupply.s3.amazonaws.com/imgs/${article.image}` || 'https://placeholder.com/344x194'} />
      <StyledArticle.ArticleContainer>
        <StyledArticle.ArticleInfo>
          { 'via ' }
          <StyledArticle.ArticleButton onClick={() => openNews(article.url, article.title, true)}>
            {article.source_name}
          </StyledArticle.ArticleButton>
          { ` · ${formattedDate} · ` }
          <StyledArticle.ArticleLink to={`/artist/${article.artist_name}`}>
            {article.artist_name}
          </StyledArticle.ArticleLink>
        </StyledArticle.ArticleInfo>
        <StyledArticle.ArticleTitle>
          { truncateWithEllipses(article.title, 100) }
        </StyledArticle.ArticleTitle>
      </StyledArticle.ArticleContainer>
    </StyledArticle.Article>
  );
};

const mapActionsToProps = dispatch => bindActionCreators({
  openNews: openArticleUrl,
}, dispatch);

export const ArticleCardConnect = connect(null, mapActionsToProps)(ArticleCard);

ArticleCard.propTypes = {
  article: objectOf(any).isRequired,
  openNews: func.isRequired
};
