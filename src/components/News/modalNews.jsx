import React from 'react';
import ReactDOM from 'react-dom';

import { ArticleiFrameConnect } from './ArticleiFrame';

const domNode = document.createElement('div');
const modalRoot = document.getElementById('root');

class ModalNews extends React.Component {
  componentDidMount() {
    modalRoot.appendChild(domNode);
  }

  componentWillUnmount() {
    modalRoot.removeChild(domNode);
  }

  render() {
    return ReactDOM.createPortal(
      <ArticleiFrameConnect />,
      domNode
    );
  }
}

export const ModalNewsConnect = ModalNews;
