/* eslint no-unused-expressions: ["off"] */
import styled, { injectGlobal } from 'styled-components';

injectGlobal`
  html, body {
    font-family: 'Roboto';
    margin: 0;
    padding: 0;
  }
`;

export const ModalShade = styled.div`
  background-color: rgba(0,0,0,0.5);
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: auto;
  background: #4E4273;
  border-radius: 5px;
`;
export const InviteBlock = styled.div`
    width: 350px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`;
export const InputModal = styled.input`
  margin: 15px auto;
  border: 2px solid #ffffff;
  padding: 0 0 0 10px;
  width: 320px;
  height: 48px;
  font-size: 16px;
  color: #555555;
  border-radius: 2px;
`;
export const BtnModal = styled.button`
  margin: 15px auto;
  width: 320px;
  height: 48px;
  color: #000000;
  font-size: 16px;
  font-weight: 400;
  border: 0;
  border-radius: 2px;
  cursor: pointer;
`;
