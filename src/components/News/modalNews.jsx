import React from 'react';
import ReactDOM from 'react-dom';

import { ArticleiFrameConnect } from './ArticleiFrame';

const domNode = document.createElement('div');
const modalRoot = document.getElementById('root');

class ModalNews extends React.Component {
  componentDidMount() {
    const htmlBlock = document.getElementsByTagName('html');
    htmlBlock[0].style.overflow = 'hidden';
    const bodyBlock = document.getElementsByTagName('body');
    bodyBlock[0].style.overflow = 'hidden';
    const str = navigator.userAgent;
    if (~str.indexOf('iPhone')) {
      const divBlock = document.getElementById('blockDiv');
      bodyBlock[0].style.height = '100vh';
      divBlock.style.height = '100vh';
    }
    modalRoot.appendChild(domNode);
  }

  componentWillUnmount() {
    const htmlBlock = document.getElementsByTagName('html');
    htmlBlock[0].style.overflow = 'auto';
    const bodyBlock = document.getElementsByTagName('body');
    bodyBlock[0].style.overflow = 'auto';
    const str = navigator.userAgent;
    if (~str.indexOf('iPhone')) {
      const divBlock = document.getElementById('blockDiv');
      bodyBlock[0].style.height = 'auto';
      divBlock.style.height = 'auto';
    }
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
