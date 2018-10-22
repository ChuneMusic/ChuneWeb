import styled from 'styled-components';

export const Wrapper = styled.div`
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  height: calc(100vh - 74px);
  @media(max-width: 1059px){
    height: calc(100vh - 56px);
  }
`;
export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 960px;
  align-items: flex-start;
  margin: 0 auto;
  @media(max-width: 959px) and (min-width: 320px) {
    width: 310px;
  }
`;
export const ForYouPadding = styled.div`
  padding: 24px 0 0 0;
  @media(max-width: 959px) and (min-width: 320px) {
    padding: 10px 0 0 0;
  }
`;
export const LeftBlockContent = styled.div`
  width: 530px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media(max-width: 959px) and (min-width: 320px) {
    width: 310px;
  }
`;
export const RightBlockContent = styled.div`
  width: 365px;
  margin-top: ${props => props.pos}px;
  @media(max-width: 959px) and (min-width: 320px) {
    display: none;
  }
`;
export const RightBlockArtistContent = styled.div`
  width: 345px;
  margin-top: ${props => props.pos}px;
  @media(max-width: 959px) and (min-width: 320px) {
    display: none;
  }
`;
