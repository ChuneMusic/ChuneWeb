import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const VideoBlock = styled.div`
  width: 530px;
  height: 360px;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border-radius: 6px;
  border: solid 1px rgba(0,0,0,0.12);
  margin: 0 0 20px 0;
  @media(max-width: 849px) and (min-width: 320px) {
    width: 310px;
    height: 310px;
    margin: 0 0 10px 0;
  }
`;
export const VideoDescriptionBlock = styled.div`
  width: 530px;
  height: 65px;
  display: flex;
  flex-direction: column;
  @media(max-width: 849px) and (min-width: 320px) {
    width: 310px;
    height: 50px;
  }
`;
export const VideoInfo = styled.p`
  color: rgba(0, 0, 0, 0.87);
  font-size: 12px;
  font-family: 'Roboto';
  font-weight: 500;
  line-height: 1.33;
  letter-spacing: 2px;
  text-transform: uppercase;
  padding: 10px;
  @media(max-width: 849px) and (min-width: 320px) {
    padding: 5px 5px 0 5px;
    font-size: 10px;
  }
`;
export const VideoLink = styled(Link)`
  color: #6200ee;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.33;
  letter-spacing: 2px;
  text-transform: capitalize;
  @media(max-width: 849px) and (min-width: 320px) {
    font-size: 10px;
  }
`;
export const VideoTitle = styled.h2`
  color: rgba(0, 0, 0, 0.87);
  font-size: 20px;
  font-family: 'Roboto';
  font-weight: 500;
  letter-spacing: 0.3px;
  padding: 0 10px 10px 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 510px;
  @media(max-width: 849px) and (min-width: 320px) {
    padding: 5px;
    font-size: 12px;
    width: 300px;
  }
`;
export const Video = styled.div`
  width: 530px;
  height: 300px;
  @media(max-width: 849px) and (min-width: 320px) {
    width: 310px;
    height: 260px;
  }
`;
