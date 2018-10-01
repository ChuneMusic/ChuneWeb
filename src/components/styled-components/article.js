import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Article = styled.div`
  width: 500px;
  height: 150px;
  border: solid 1px rgba(0, 0, 0, 0.12);
  margin: 0 auto;
  display: flex;
  border-radius: 6px;
  margin: 0 0 20px 0;
  background-color: #ffffff;
  @media(max-width: 849px) and (min-width: 320px) {
    width: 310px;
    height: 120px;
    margin: 0 0 10px 0;
  }
`;
export const ArticleImages = styled.div`
  border-radius: 6px 0 0 6px;
  background: url(${props => props.images}) center no-repeat; 
  background-size: cover;
  width: 150px;
  height: 150px;
  @media(max-width: 849px) and (min-width: 320px) {
    width: 100px;
    height: 120px;
  }
`;
export const ArticleContainer = styled.div`
  width: 350px;
  height: 150px;
  display: flex;
  flex-direction: column;
  position: relative;
  @media(max-width: 849px) and (min-width: 320px) {
    width: 210px;
    height: 120px;
  }
`;
export const ArticleInfo = styled.p`
  color: rgba(0, 0, 0, 0.87);
  font-size: 12px;
  font-family: 'Roboto';
  font-weight: 500;
  line-height: 1;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  padding: 10px;
  @media(max-width: 849px) and (min-width: 320px) {
    font-size: 10px;
    padding: 10px 5px 5px 5px;
    letter-spacing: 1px;
  }
`;
export const ArticleLink = styled(Link)`
  color: #6200ee;
  font-size: 12px;
  font-weight: 500;
  line-height: 1;
  letter-spacing: 1.5px;
  text-transform: capitalize;
  @media(max-width: 849px) and (min-width: 320px) {
    font-size: 10px;
    letter-spacing: 1px;
  }
`;
export const ArticleTitle = styled.h2`
  color: rgba(0, 0, 0, 0.87);
  font-size: 20px;
  font-family: 'Roboto';
  font-weight: 500;
  line-height: 1;
  letter-spacing: 0.3px;
  padding: 10px;
  @media(max-width: 849px) and (min-width: 320px) {
    font-size: 16px;
    padding: 5px;
  }
`;
export const ArticleButton = styled.button`
  color: #6200ee;
  border: 0;
  cursor: pointer;
  outline: none;
  font-size: 14px;
  text-align: center;
  font-family: 'Roboto';
  font-weight: 500;
  line-height: 1.14;
  text-transform: uppercase;
  letter-spacing: 1.3px;
  left: 10px;
  bottom: 10px;
  position: absolute;
  padding: 0;
  margin: 0;
  background: none;
  @media(max-width: 849px) and (min-width: 320px) {
    left: 5px;
  }
`;
