import React from 'react';
import { connect } from 'react-redux';
import { string, func } from 'prop-types';
import { bindActionCreators } from 'redux';

import { Loading } from '../shared/Loading';
import { CloseIcon } from '../shared/InteractionIcons';
import { closeArticleUrl } from '../../store/content/actions';
import * as StyledArticle from '../styled-components/article';

const ArticleiFrame = ({ url, title, closeModalArticle }) => {
  if (url.length === 0) return <Loading />;
  const str = navigator.userAgent;
  let scrl = 'auto';
  if (~str.indexOf('iPhone')) scrl = 'no';
  console.log(scrl);
  return (
    <StyledArticle.ArticleBackGround onClick={() => closeModalArticle(false)}>
      <StyledArticle.ArticleModal>
        <StyledArticle.ArticleModalBackGroundTitle>
          <StyledArticle.ArticleButtonCloseModal onClick={() => closeModalArticle(false)}>
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
};

const mapStateToProps = store => ({
  url: store.dataContent.url,
  title: store.dataContent.title
});

const mapActionsToProps = dispatch => bindActionCreators({
  closeModalArticle: closeArticleUrl
}, dispatch);

export const ArticleiFrameConnect = connect(mapStateToProps, mapActionsToProps)(ArticleiFrame);

ArticleiFrame.propTypes = {
  url: string.isRequired,
  title: string.isRequired,
  closeModalArticle: func.isRequired
};
