import styled from 'styled-components';

export const WrapperArtist = styled.div`
  display: flex;
  margin: 0 auto;
  width: 900px;
  padding: 24px 0 0 0;
  flex-direction: column;
  @media(max-width: 900px) and (min-width: 630px) {
    width: 630px;
  }
  @media(max-width: 629px) and (min-width: 320px) {
    width: 310px;
    padding: 10px 0 0 0;
  }
`;
export const ArtistHeader = styled.div`
  display: none;
  @media(max-width: 920px) and (min-width: 320px) {
    width: 310px;
    padding: 0 0 10px 0;
    flex-direction: column;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
  }
`;
export const ArtistImage = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50px;
  background: url(${props => props.image}) center no-repeat;
  background-size: cover;
`;
export const ArtistName = styled.p`
  color: rgba(0,0,0,0.9);
  font-size: 20px;
  font-family: 'Roboto';
  font-weight: 500;
  letter-spacing: 0.3px;
  padding: 5px 0;
  text-transform: uppercase;
`;
export const RightBlockButton = styled.div`
  width: 310px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
`;
