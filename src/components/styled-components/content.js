import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 1024px;
  @media(max-width: 1030px) and (min-width: 850px) {
    width: 850px;
  }
  @media(max-width: 849px) and (min-width: 320px) {
    width: 310px;
  }
`;
export const LeftBlockContent = styled.div`
  width: 500px;
  @media(max-width: 849px) and (min-width: 320px) {
    width: 310px;
  }
`;
export const RightBlockContent = styled.div`
  width: 345px;
  @media(max-width: 849px) and (min-width: 320px) {
    display: none;
  }
`;
