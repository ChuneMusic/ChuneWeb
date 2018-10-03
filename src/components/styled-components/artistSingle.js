import styled from 'styled-components';

export const WrapperArtist = styled.div`
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
export const ArtistHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 960px;
  margin: 0 auto;
  padding: 0 0 24px 0;
  @media(max-width: 1030px) and (min-width: 850px) {
    width: 850px;
  }
  @media(max-width: 849px) and (min-width: 320px) {
    width: 310px;
    padding: 0 0 10px 0;
    flex-direction: column;
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
`;
export const RightBlockButton = styled.div`
  width: 345px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media(max-width: 1030px) and (min-width: 850px) {
    width: 320px;
  }
  @media(max-width: 849px) and (min-width: 320px) {
    width: 310px;
    margin: 10px 0;
  }
`;
