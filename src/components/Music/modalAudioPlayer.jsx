import React from 'react';
import ReactDOM from 'react-dom';

import { PlayerConnect } from './Player';

const domNode = document.createElement('div');
const modalRoot = document.getElementById('root');

class ModalBlock extends React.Component {
  componentDidMount() {
    modalRoot.appendChild(domNode);
  }

  componentWillUnmount() {
    modalRoot.removeChild(domNode);
  }

  render() {
    return ReactDOM.createPortal(
      <PlayerConnect />,
      domNode
    );
  }
}

export const ModalBlockConnect = ModalBlock;
