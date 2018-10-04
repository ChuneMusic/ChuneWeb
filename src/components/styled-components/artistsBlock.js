import styled from 'styled-components';

export const WrapperArtists = styled.div`
  display: flex;
  margin: 0 auto;
  width: 1080px;
  padding: 24px 0 0 0;
  flex-direction: column;
  @media(max-width: 1080px) and (min-width: 960px) {
    width: 960px;
  }
  @media(max-width: 959px) and (min-width: 320px) {
    width: 310px;
    padding: 10px 0 0 0;
  }
`;
export const ArtistsTitle = styled.div`
  color: #000000;
  font-size: 24px;
  font-family: 'Roboto';
  padding: 0 0 25px 0;
  letter-spacing: 0.3px;
  @media(max-width: 629px) and (min-width: 320px) {
    display: none;
  }
`;
export const ArtistsTitleBlock = styled.div`
  color: #000000;
  font-size: 24px;
  font-family: 'Roboto';
  padding: 0 0 25px 0;
  letter-spacing: 0.3px;
`;
export const ArtistsBlock = styled.div`
  display: flex;
  width: 1080px;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
  @media(max-width: 1080px) and (min-width: 960px) {
    width: 960px;
  }
  @media(max-width: 959px) and (min-width: 320px) {
    width: 310px;
    justify-content: center;
    flex-direction: column;
  }
`;
