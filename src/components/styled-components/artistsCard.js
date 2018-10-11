import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ArtistCard = styled.div`
  width: 343px;
  height: 130px;
  border: solid 1px rgba(0, 0, 0, 0.12);
  display: flex;
  border-radius: 6px;
  flex-direction: row;
  background-color: #ffffff;
  margin: 0 22px 20px 0;
  &:nth-child(3n){
    margin: 0 0 20px 0;
  }
  @media(max-width: 1080px) and (min-width: 960px) {
    margin: 0 10px 10px 0;
    width: 310px;
    height: 130px;
    &:nth-child(3n){
    margin: 0 0 10px 0;
  }
  }
  @media(max-width: 959px) and (min-width: 320px) {
    width: 310px;
    height: 130px;
    margin: 0 0 10px 0;
  }
`;
export const ArtistCardImages = styled.div`
  border-radius: 6px 0 0 6px;
  background: url(${props => props.image}) center no-repeat; 
  background-size: cover;
  width: 130px;
  height: 130px;
`;
export const ArtistCardContainer = styled.div`
  width: 213px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  @media(max-width: 1080px) and (min-width: 320px) {
    width: 180px;
  }
`;
export const ArtistCardName = styled.p`
  color: rgba(0, 0, 0, 0.9);
  font-size: 20px;
  font-family: 'Roboto';
  font-weight: 500;
  letter-spacing: 0.3px;
  padding: 20px 5px 0 20px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 188px;
  height: 40px;
  @media(max-width: 1080px) and (min-width: 320px) {
    width: 155px;
  }
`;
export const ArtistCardButton = styled.button`
  color: #6200ee;
  border: 0;
  cursor: pointer;
  font-size: 14px;
  line-height: 1.15;
  margin: 0;
  padding: 0;
  font-weight: 500;
  font-family: 'Roboto';
  letter-spacing: 1.3px;
  text-transform: uppercase;
  outline: none;
  background: none;
  position: absolute;
  left: 20px;
  bottom: 20px;
`;
export const ArtistCardUnffolow = styled.button`
  color: #6200ee;
  border: 0;
  cursor: pointer;
  font-size: 14px;
  line-height: 1.15;
  margin: 0;
  padding: 0;
  font-weight: 500;
  font-family: 'Roboto';
  letter-spacing: 1.3px;
  text-transform: uppercase;
  outline: none;
  background: none;
  position: absolute;
  right: 20px;
  bottom: 20px;
`;
export const ArtistCardLink = styled(Link)`
  color: #6200ee;
  border: 0;
  cursor: pointer;
  font-size: 14px;
  line-height: 1.15;
  margin: 0;
  padding: 0;
  font-weight: 500;
  font-family: 'Roboto';
  letter-spacing: 1.3px;
  text-transform: uppercase;
  outline: none;
  background: none;
  position: absolute;
  left: 20px;
  bottom: 20px;
`;
export const ArtistGenre = styled.p`
  color: rgba(0, 0, 0, 0.87);
  font-size: 12px;
  padding: 10px 0 0 20px;
  font-family: 'Roboto';
  font-weight: 500;
  line-height: 1.33;
  letter-spacing: 2px;
  text-transform: capitalize;
`;
export const BlockButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
