import React from 'react';
import { connect } from 'react-redux';
import { string, func } from 'prop-types';
import { bindActionCreators } from 'redux';

import { Loading } from '../shared/Loading';
import { CloseIcon } from '../shared/InteractionIcons';
import { closeArticleUrl } from '../../store/content/actions';
import * as StyledArticle from '../styled-components/article';
import { closeArticleUser } from '../../store/learningMachine/actions';

class ArticleiFrame extends React.Component {
  closeModal = () => {
    const { closeModalArticle, idNews, sendCloseArticle } = this.props;
    const endDate = new Date();
    closeModalArticle(false);
    sendCloseArticle(idNews, endDate);
  }

  render() {
    const { url, title } = this.props;
    if (url.length === 0) return <Loading />;
    const str = navigator.userAgent;
    let scrl = 'auto';
    if (~str.indexOf('iPhone')) scrl = 'no';
    return (
      <StyledArticle.ArticleBackGround>
        <StyledArticle.ArticleModal>
          <StyledArticle.ArticleModalBackGroundTitle>
            <StyledArticle.ArticleButtonCloseModal onClick={this.closeModal}>
              <CloseIcon />
            </StyledArticle.ArticleButtonCloseModal>
          </StyledArticle.ArticleModalBackGroundTitle>
          <StyledArticle.AticleIFrame
            title={title}
            src={url}
            scrolling={scrl}
          />
        </StyledArticle.ArticleModal>
      </StyledArticle.ArticleBackGround>
    );
  }
}

const mapStateToProps = store => ({
  url: store.dataContent.url,
  title: store.dataContent.title,
  idNews: store.dataContent.idNews
});

const mapActionsToProps = dispatch => bindActionCreators({
  closeModalArticle: closeArticleUrl,
  sendCloseArticle: closeArticleUser
}, dispatch);

export const ArticleiFrameConnect = connect(mapStateToProps, mapActionsToProps)(ArticleiFrame);

ArticleiFrame.propTypes = {
  url: string.isRequired,
  title: string.isRequired,
  closeModalArticle: func.isRequired,
  idNews: string.isRequired,
  sendCloseArticle: func.isRequired
};
