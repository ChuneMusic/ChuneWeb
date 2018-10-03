import styled from 'styled-components';

export const WrapperEvents = styled.div`
  display: flex;
  margin: 0 auto;
  width: 1080px;
  padding: 24px 0 0 0;
  flex-direction: column;
  @media(max-width: 1080px) and (min-width: 960px) {
    width: 960px;
  }
  @media(max-width: 959px) and (min-width: 630px) {
    width: 630px;
  }
  @media(max-width: 629px) and (min-width: 320px) {
    width: 310px;
    padding: 10px 0 0 0;
  }
`;
export const EventsTitle = styled.div`
  color: #000000;
  font-size: 24px;
  font-family: 'Roboto';
  padding: 0 0 25px 0;
  letter-spacing: 0.3px;
  @media(max-width: 629px) and (min-width: 320px) {
    display: none;
  }
`;
export const EventsBlockArtist = styled.div`
  display: flex;
  width: 1080px;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
  @media(max-width: 1080px) and (min-width: 320px) {
    width: 310px;
    justify-content: center;
    flex-direction: column;
  }
`;
export const EventsCard = styled.div`
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
  @media(max-width: 1080px) and (min-width: 320px) {
    width: 310px;
    height: 130px;
    margin: 0 0 10px 0;
  }
`;
export const EventsCardImages = styled.div`
  border-radius: 6px 0 0 6px;
  background: url(${props => props.image}) center no-repeat; 
  background-size: cover;
  width: 130px;
  height: 130px;
`;
export const EventsCardContainer = styled.div`
  width: 213px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  @media(max-width: 1080px) and (min-width: 320px) {
    width: 180px;
  }
`;
export const EventsCardName = styled.p`
  color: rgba(0, 0, 0, 0.9);
  font-size: 20px;
  font-family: 'Roboto';
  font-weight: 500;
  letter-spacing: 0.3px;
  padding: 20px 5px 0 20px;
  @media(max-width: 1080px) and (min-width: 320px) {
    width: 180px;
  }
`;
export const EventsCardButton = styled.button`
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
