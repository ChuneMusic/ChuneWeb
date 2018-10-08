import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { objectOf, any, func } from 'prop-types';
import MediaQuery from 'react-responsive';

import { timestampToDate } from '../../helpers/populateArticles';
import { openArticleUrl } from '../../store/content/actions';
import * as StyledArticle from '../styled-components/article';
import { truncateWithEllipses } from '../../helpers/eventHelpers';
import HipHop from '../../../assets/images/news/hnhh.svg';
import BillBoard from '../../../assets/images/news/billboard.svg';
import YouRedm from '../../../assets/images/news/yourEdm.svg';
import PitchFork from '../../../assets/images/news/pitchfork.svg';
import ThisSongIsSick from '../../../assets/images/news/tsis.svg';
import { openArticle } from '../../store/learningMachine/actions';

class ArticleCard extends React.Component {
  logoNews = (name) => {
    const str = name.toLowerCase();
    if (~str.indexOf('hiphop')) return HipHop;
    if (~str.indexOf('bill')) return BillBoard;
    if (~str.indexOf('redm')) return YouRedm;
    if (~str.indexOf('pitch')) return PitchFork;
    if (~str.indexOf('songis')) return ThisSongIsSick;
    return 'https://placeholder.com/344x194';
  };

  eventsArticle = (id, url, title) => {
    const { openNews, openArticleUser } = this.props;
    openNews(id, url, title, true);
    const openDate = new Date();
    console.log('hello', id, openDate);
    openArticleUser(id, openDate);
  }


  render() {
    const { article } = this.props;
    const formattedDate = article.published_on ? timestampToDate(article.published_on) : '';
    return (
      <StyledArticle.Article>
        <StyledArticle.ArticleImages images={`http://api-stage.chunesupply.com/static/imgs/thumbs/medium/${article.image}` || 'https://placeholder.com/344x194'} />
        <StyledArticle.ArticleContainer>
          <StyledArticle.ArticleInfo>
            { `${formattedDate} · ` }
            <StyledArticle.ArticleLink to={`/artist/${article.artist_name}`}>
              {article.artist_name}
            </StyledArticle.ArticleLink>
          </StyledArticle.ArticleInfo>
          <StyledArticle.ArticleTitle onClick={() => this.eventsArticle(article.id, article.url, article.title)}>
            <MediaQuery maxDeviceWidth={799}>
              { truncateWithEllipses(article.title, 40) }
            </MediaQuery>
            <MediaQuery minDeviceWidth={800}>
              { truncateWithEllipses(article.title, 65) }
            </MediaQuery>
          </StyledArticle.ArticleTitle>
          <StyledArticle.ArticleLogoSource
            onClick={() => this.eventsArticle(article.id, article.url, article.title)}
            src={this.logoNews(article.source_name)}
            alt={article.source_name}
            title={article.source_name}
            style={{
              height: `${~article.source_name.indexOf('HipHop') ? '50px' : ''}`,
              left: `${~article.source_name.indexOf('HipHop') ? '5px' : ''}`,
              bottom: `${~article.source_name.indexOf('HipHop') ? '0' : ''}`,
            }}
          />
        </StyledArticle.ArticleContainer>
      </StyledArticle.Article>
    );
  }
}

const mapActionsToProps = dispatch => bindActionCreators({
  openNews: openArticleUrl,
  openArticleUser: openArticle
}, dispatch);

export const ArticleCardConnect = connect(null, mapActionsToProps)(ArticleCard);

ArticleCard.propTypes = {
  article: objectOf(any).isRequired,
  openNews: func.isRequired,
  openArticleUser: func.isRequired
};
