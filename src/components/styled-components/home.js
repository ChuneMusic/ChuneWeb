import styled from 'styled-components';

export const WrapperHomePage = styled.div`
  display: flex;
  flex-direction: column;
  @media(max-width: 900px) and (min-width: 320px) {
    width: 310px;
    margin: 0 auto;
  }
`;
export const FeaturedBlock = styled.div`
  display: flex;
  margin: 0 auto;
  width: 900px;
  padding: 24px 0 0 0;
  flex-direction: column;
  @media(max-width: 900px) and (min-width: 320px) {
    padding: 10px 0 0 0;
    width: 310px;
    overflow: hidden;
    flex-direction: row;
  }
`;
export const WaypointBlock = styled.div`
  width: 100%;
  height: 20px;
`;
