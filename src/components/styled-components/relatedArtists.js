import styled from 'styled-components';

export const WrapperArtists = styled.div`
  display: flex;
  width: 1080px;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  margin: 0 auto;
  @media(max-width: 1080px) and (min-width: 600px) {
    width: 100%;
    justify-content: center;
  }
  @media(max-width: 600px) and (min-width: 320px) {
    width: 100%;
    justify-content: center;
    flex-direction: column;
  }
`;
export const ArtistsHeader = styled.div`
  display: flex;
  width: 1080px;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 auto;
  padding: 0 0 20px 0;
  @media(max-width: 1080px) and (min-width: 600px) {
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  @media(max-width: 600px) and (min-width: 320px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
  }
`;
export const ArtistsTitle = styled.p`
  color: #000000;
  font-size: 24px;
  font-family: 'Roboto';
  letter-spacing: 0.3px;
  padding: 0 40px 0 0;
  @media(max-width: 600px) and (min-width: 320px) {
    padding: 0 0 0 10px;
  }
`;
export const ArtistsButton = styled.button`
  width: 104px;
  height: 36px;
  color: #6200ee;
  border: solid 1px rgba(0, 0, 0, 0.12);
  font-size: 14px;
  font-weight: 500;
  font-family: 'Roboto';
  line-height: 1.14;
  letter-spacing: 1.3px;
  background: none;
  border-radius: 6px;
  outline: none;
  cursor: pointer;
  @media(max-width: 600px) and (min-width: 320px) {
    display: none;
  }
`;
