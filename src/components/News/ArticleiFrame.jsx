import React from 'react';
import { connect } from 'react-redux';
import { string, func } from 'prop-types';
import { bindActionCreators } from 'redux';

import { Loading } from '../shared/Loading';
import { CloseIcon } from '../shared/InteractionIcons';
import { closeArticleUrl } from '../../store/content/actions';

const ArticleiFrame = ({ url, title, closeModalArticle }) => {
  if (url.length === 0) return <Loading />;
  return (
    <div className="background_news" onClick={() => closeModalArticle(false)}>
      <div className="modal_news">
        <div className="header_news_color">
          <button className="close_iframe" type="button" onClick={() => closeModalArticle(false)}>
            <CloseIcon />
          </button>
        </div>
        <iframe
          title={title}
          src={url}
          className="iframe_news"
        />
      </div>
    </div>
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
